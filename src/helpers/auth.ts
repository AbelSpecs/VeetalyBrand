import { Auth } from "@/types/auth";

const auth = {
    
    authenticate(authInfo: Auth, cb: () => void) {
        if(typeof window !== "undefined") {
            sessionStorage.setItem("token", JSON.stringify(authInfo.token));
            sessionStorage.setItem("id", JSON.stringify(authInfo.id));
            sessionStorage.setItem("name", JSON.stringify(authInfo.name));
        }
        cb();
    },

    // update(jwt) {
    //     if(typeof window !== "undefined") {
    //         const userData = JSON.parse(sessionStorage.getItem('jwt'));
    //         const keys = Object.keys(userData.user);
    //         keys.forEach((k) => { 
    //             if(!jwt[k])
    //                 return;
    //             userData.user = {...userData.user, [k]: jwt[k]};
    //         });
    //         sessionStorage.setItem("jwt", JSON.stringify(userData));
    //     }
    // },
    
    isAuthenticated() {
        if(typeof window == "undefined"){
            return false;
        }
        
        if(sessionStorage.getItem('token')){
            return true;
        }
        else{
            return false;
        }
    },
    
    clear(cb: () => void) {
        if(typeof window !== "undefined"){
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('id');
            sessionStorage.removeItem('name');
        }
        
        cb();
    },

    getUser() {
        if(typeof window == "undefined"){
            return;
        }

        if(sessionStorage.getItem('token')){
            return JSON.parse(sessionStorage.getItem('id')!);
        }
    }

    // getData() {
    //     if(!sessionStorage.getItem('jwt')){
    //         return;
    //     }
    //     const jwt = JSON.parse(sessionStorage.getItem('jwt'));
    //     const user = { 
    //                     token: jwt.token, 
    //                     id: jwt.user._id, 
    //                     name: jwt.user.name, 
    //                     email: jwt.user.email, 
    //                     about: jwt.user.about, 
    //                     background: jwt.user.background,
    //                     photo: jwt.user.photo,
    //                     created: jwt.user.created 
    //                 }
    //     return user;
    // }
}

export default auth;