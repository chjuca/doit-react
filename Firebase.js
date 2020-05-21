import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDs7lUK3wx2WpzXKwffOFXcH4EyZyN9AXU",
    authDomain: "doit-react-project-784d9.firebaseapp.com",
    databaseURL: "https://doit-react-project-784d9.firebaseio.com",
    projectId: "doit-react-project-784d9",
    storageBucket: "doit-react-project-784d9.appspot.com",
    messagingSenderId: "696883679209",
    appId: "1:696883679209:web:db9c4542adae8740dd0578",
    measurementId: "G-SYT7FDM25V"
};

firebase.initializeApp(config);

export default firebase;