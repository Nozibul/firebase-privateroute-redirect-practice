import { useEffect, useState } from "react"
import { GoogleAuthProvider,  getAuth, signInWithPopup ,onAuthStateChanged, signOut} from "firebase/auth";
import initializeAuthenticationConfig from "./firebase.init";

initializeAuthenticationConfig()//firebase.init.js file theke jeta export kora hoise seta akane import korte hobe ta na hole firebase kaj korbe an 

const useFirebase = () =>{
    
 // jehetu user input gulo changable bec tara login korteo pare abr now pare so state lagbe
 const [user, setUser] = useState({}) // ata akta objec return kore console korle dehbo
 const [error, setError] = useState({}) //error asteo pare naw pare so state lagbe


 const googleProvider = new GoogleAuthProvider();
 const auth = getAuth();


 const signInGoogle =()=>{
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        console.log(result.user); 
        setUser(result.user) // login korle user er sob information setUser theke user er vitore chole jabe.
      })
      .catch(error =>{
          setError(error.message)
      })
 }


 // google sign out
 const logOut =()=>{
    signOut(auth)
    .then((result) => {
        setUser(result)
      })
 }

 // 
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
          
        })
    
    },[])
 
    return {
        signInGoogle ,
        user, // login korle user er sob information setUser theke user er vitore chole jabe.
        error,
        logOut
    };

}
export default useFirebase ;