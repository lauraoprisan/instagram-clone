
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase/firebase';
import useAuthStore from '../../store/authStore';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const GoogleAuth = ({prefix}) => {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const loginUser = useAuthStore(state=>state.login)

  const handleGoogleAuth = async()=>{
    try {
      const newUser = await signInWithGoogle()
      if(!newUser && error){
        alert(error.message)
        return
      }

      const userRef = doc(firestore, "users", newUser.user.uid);
      const userSnap = await getDoc(userRef);

      if(userSnap.exists()){
          //login
          const userDoc = userSnap.data()
          localStorage.setItem("user-info", JSON.stringify(userDoc))
          loginUser(userDoc)

      } else{
        //signup
        const userDoc = {
          uid :newUser.user.uid,
          email:newUser.user.email,
          username:newUser.user.email.split("@")[0],
          fullName:newUser.user.displayName,
          bio:"",
          profilePicURL:newUser.user.photoURL,
          followers:[],
          following:[],
          posts:[],
          savedPosts:[],
          createdAt:Date.now(),
         }

        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc); //this created a doc in firestore
        localStorage.setItem("user-info", JSON.stringify(userDoc)) //saves it in local storage
        loginUser(userDoc)
      }
    } catch (error) {
        console.log(error.message)
    }
  }

  return (
    <>
        <button className="google-login-btn flex" onClick={handleGoogleAuth}>
            <img className="google-icon" src="/images/google.png" alt="Google Icon" />
            <span>{prefix} with Google</span>
        </button>
    </>
  )
}

export default GoogleAuth
