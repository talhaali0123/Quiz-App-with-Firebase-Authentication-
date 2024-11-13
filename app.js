const firebaseConfig = {
    apiKey: "AIzaSyDeN0aYHG3TP129X3BZigLzFnlH9fNLLN4",
    authDomain: "quiz-application-d8b5f.firebaseapp.com",
    databaseURL: "https://quiz-application-d8b5f-default-rtdb.firebaseio.com",
    projectId: "quiz-application-d8b5f",
    storageBucket: "quiz-application-d8b5f.firebasestorage.app",
    messagingSenderId: "200668453050",
    appId: "1:200668453050:web:890d1c715dd5b3eb73ca83"
  };
  
  
var frb = firebase.initializeApp(firebaseConfig);

 var auth = firebase.auth();

 console.log(frb.auth);
var form = document.getElementById("form");

function signUp() {
   var name = document.getElementById("name");
   var email = document.getElementById("email");
   var password = document.getElementById("password");
 
   auth
     .createUserWithEmailAndPassword(email.value, password.value)
     .then((userCredential) => {
       // Signed in
       const user = userCredential.user;
       console.log(user);
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorMessage);
     });
 }
 
 function login() {
   var email = document.getElementById("Loginemail");
   var password = document.getElementById("Loginpassword");
 
   auth
     .signInWithEmailAndPassword(email.value, password.value)
     .then((userCredential) => {
       // Signed in
       var user = userCredential.user;
       console.log(user);
       window.location.href = "./quiz.html";
     })
     .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log(errorMessage);
     });
 }

 