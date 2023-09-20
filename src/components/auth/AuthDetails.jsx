import { onAuthStateChanged, signOut } from "firebase/auth";
import React, {useEffect, useState} from "react";
//import {auth} from "../firebase";
import {auth} from "../../firebase.js"
//import Gallery from "../Gallery.js";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user);
        }
        else {
            setAuthUser(null);
        }
    });
    return () => {
        listen();
    }

}, [])
const userSignOut = () => {
    signOut(auth).then(() => {
        console.log('sign out successful')
    }).catch(error => console.log(error))
}
return (
<div> 
{authUser ?  <p>{`Signed In as ${authUser.email}`}</p> : <p>You are Logged Out</p>}
<button onClick={userSignOut}>Sign Out</button>

</div>)
}
export default AuthDetails