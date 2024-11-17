import { createContext } from "react";
import auth from "../../Firebase/Firebsae.Init";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const authContext = createContext();

const AuthProbaider = ({ children }) => {
    console.log(children);

    const handalRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const handalLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvaider = new GoogleAuthProvider()
    const handalGoogleLogin = () => {
        signInWithPopup(auth, googleProvaider)
            .then(res => {
                console.log(res);

            })
            .catch(error => {
                console.log(error);

            })
    }
    const githubProbaider = new GithubAuthProvider()
    const handalGitbutLogin = () => {
        signInWithPopup(auth, githubProbaider)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    };


    const handalLogout = () => {
        signOut(auth)
    }


    const authdata = {
        handalRegister,
        handalLogin,
        handalLogout,
        handalGoogleLogin,
        handalGitbutLogin
    }

    return (
        <div>
            <authContext.Provider value={authdata}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProbaider;