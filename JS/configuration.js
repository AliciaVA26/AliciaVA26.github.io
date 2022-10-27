 
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCgsNpcxxb_MxMT-FB3lhPC18tAnVCii6w",
   authDomain: "nexusnt.firebaseapp.com",
   projectId: "nexusnt",
   storageBucket: "nexusnt.appspot.com",
   messagingSenderId: "1068085546613",
   appId: "1:1068085546613:web:f877ccd0e1b653afd3323c",
   measurementId: "G-KG4CPZXSMP"
 };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();