import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvDmZ_sjPJJyyuYC_ZCuiTz-INjF8e3qI",
    authDomain: "crud-reservacion.firebaseapp.com",
    projectId: "crud-reservacion",
    storageBucket: "crud-reservacion.appspot.com",
    messagingSenderId: "114203151296",
    appId: "1:114203151296:web:d4ce3c0bf60dc91e961625"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();