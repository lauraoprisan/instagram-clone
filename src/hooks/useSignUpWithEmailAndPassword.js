import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import {auth, firestore} from  '../firebase/firebase'
import useAuthStore from '../store/authStore';


const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword,,loading,error] = useCreateUserWithEmailAndPassword(auth);
    const loginUser = useAuthStore(state =>state.login)
    console.log("login user from login hook", loginUser)

    const signup = async(inputs)=>{

        if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullname){
            console.log("Please fill in all the fields!")
            return
        }

        //checking if the username already exists
        const usersRef = collection(firestore, "users");
        const q = query(usersRef, where("username", "==", inputs.username))
        const querySnapshot = await getDocs(q)

        if(!querySnapshot.empty){
            alert("Username already exists")
            return
        }

        try {

            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
            if(!newUser && error){
                console.log(error)
                return
            }
            if(newUser){
                const userDoc = {
                    uid :newUser.user.uid,
                    email:inputs.email,
                    username:inputs.username,
                    fullname:inputs.fullname,
                    bio:"",
                    profilePicURL:"",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt:Date.now(),
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc); //this created a doc in firestore
                localStorage.setItem("user-info", JSON.stringify(userDoc)) //saves it in local storage
                loginUser(userDoc)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return {loading, error, signup}
}

export default useSignUpWithEmailAndPassword
