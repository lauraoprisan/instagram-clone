import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";

const useLogin = () => {
    const [
        signInWithEmailAndPassword,
        ,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const loginUser = useAuthStore((state)=> state.login)

    const login = async(inputs) =>{

        if(!inputs.email || !inputs.password){
            alert("Please fill in all the inputs")
            return
        }

        try {
            const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password)    //signs in the user and returns an object; it returns an object if the user signed up before
            console.log("userCred", userCred)
            if(userCred){   //if the signing process was successfull
                const docRef = doc(firestore, "users", userCred.user.uid);  //searches the doc of the user in firebase
                const docSnap = await getDoc(docRef);   //retrieves the user info from backend
                localStorage.setItem("user-info", JSON.stringify(docSnap.data()))   //saves the user info from backend to localStorage
                loginUser(docSnap.data())   //saves the user info from backend to global state management
            }
        } catch (error) {
            console.log(error)
        }
    }

  return {loading, error, login}
}

export default useLogin
