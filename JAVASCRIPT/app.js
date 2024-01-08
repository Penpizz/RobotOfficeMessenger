
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const auth = getAuth()

var fullName = document.getElementById("fullname");
var contact = document.getElementById("contact");
var email = document.getElementById("email");
var password = document.getElementById("password");
var copassword = document.getElementById("copassword")
window.signup = function (e) {
  if (password)

    if (fullName.value == "" || contact.value == "" || email.value == "" || password.value == "") {
      alert("All Field Are Required")
    }
  if (password.value == copassword.value) {

  }
  else {
    alert("Password Confirmation is Wrong")
    return false
  }

  e.preventDefault();
  var obj = {
    firstName: fullName.value,
    contact: contact.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function (success) {
      window.location.replace('/HTML/login.html')
      // console.log(success.user.uid)
      alert("signup successfully")
    })
    .catch(function (err) {
      alert("Error in " + err)
    });
  console.log()
  console.log(obj);
};