// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import {getAuth,signInWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5-Ql6BPRrz8THBpQKImhzGtx3B7kuCeE",
  authDomain: "web-2-c6330.firebaseapp.com",
  databaseURL: "https://web-2-c6330-default-rtdb.firebaseio.com",
  projectId: "web-2-c6330",
  storageBucket: "web-2-c6330.appspot.com",
  messagingSenderId: "927487669942",
  appId: "1:927487669942:web:b3979f067ae45f70355817"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function (success) {
      alert("logined Successfully")
      var aaaa =  (success.user.uid);
      localStorage.setItem("uid",aaaa)
      console.log(aaaa)
      window.location.replace('UserPage.html')
     // localStorage.setItem(success,user,uid)
      
    })
    .catch(function (err) {
      alert("login error"+err);
    });

  console.log(obj);
}