import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import {auth, firestore} from  '../firebase/firebase'
import useAuthStore from '../store/authStore';


const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword,,loading,error] = useCreateUserWithEmailAndPassword(auth);
    const loginUser = useAuthStore(state =>state.login)

    const signup = async(inputs)=>{

        if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullName){
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

            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)     //creates and returns an object if the user was not auth before with the same email
            if(!newUser && error){
                console.log(error)
                return
            }
            if(newUser){
                const userDoc = {
                    uid :newUser.user.uid,
                    email:inputs.email,
                    username:inputs.username,
                    fullName:inputs.fullName,
                    bio:"",
                    profilePicURL:"/images/person-placeholder.png",
                    followers:[],
                    following:[],
                    posts:[],
                    savedPosts:[],
                    createdAt:Date.now(),
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc); //this created a doc in firestore
                localStorage.setItem("user-info", JSON.stringify(userDoc)) //saves it in local storage
                loginUser(userDoc)  //saves it in Global State management
            }
        } catch (error) {
            console.log(error)
        }
    }

    return {loading, error, signup}
}

export default useSignUpWithEmailAndPassword
