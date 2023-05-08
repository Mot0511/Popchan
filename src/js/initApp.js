import {initializeApp} from "firebase/app";

export default () => {
    const app = initializeApp({
        apiKey: "AIzaSyCG-KzbRM72oXs6_0xi2_U9gIAWCdTn5FE",
        authDomain: "popchan-b091e.firebaseapp.com",
        projectId: "popchan-b091e",
        storageBucket: "popchan-b091e.appspot.com",
        messagingSenderId: "160550339763",
        appId: "1:160550339763:web:d25fcfa63aef602e85dcc6",
        measurementId: "G-DWDH6339YK"
    })

    return app
}