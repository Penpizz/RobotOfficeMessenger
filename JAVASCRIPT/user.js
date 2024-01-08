
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase,ref,onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import {getAuth,signOut,onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyB5-Ql6BPRrz8THBpQKImhzGtx3B7kuCeE",
  authDomain: "web-2-c6330.firebaseapp.com",
  databaseURL: "https://web-2-c6330-default-rtdb.firebaseio.com",
  projectId: "web-2-c6330",
  storageBucket: "web-2-c6330.appspot.com",
  messagingSenderId: "927487669942",
  appId: "1:927487669942:web:b3979f067ae45f70355817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase();

//getting reference to data we want
var dataRef1 = ref(database,'sensor/one');
var dataRef2 = ref(database,'sensor/two');
var dataRef3 = ref(database,'sensor/three');
var dataRef4 = ref(database,'sensor/four');
var dataRef5 = ref(database,'gyro/azimut');



onValue(dataRef1, (snapshot) => {
  const APone = snapshot.val();
  document.getElementById('one').innerHTML = APone + " dBm";
});
onValue(dataRef2, (snapshot) => {
  const APtwo = snapshot.val();
  document.getElementById('two').innerHTML = APtwo + " dBm";
});
onValue(dataRef3, (snapshot) => {
  const APthree = snapshot.val();
  document.getElementById('three').innerHTML = APthree + " dBm";
});
onValue(dataRef4, (snapshot) => {
  const APfour = snapshot.val();
  document.getElementById('four').innerHTML = APfour + " dBm";
});
onValue(dataRef5, (snapshot) => {
  const Az = snapshot.val();
//direction
  document.getElementById('azimut').innerHTML = Az + "&deg;";
  if (Az < 22.5 || Az > 337.5) {
    document.getElementById('Direc').innerHTML = "North";
  }
  if (Az > 22.5 || Az > 67.5) {
    document.getElementById('Direc').innerHTML = "North-East";
  }
  if (Az > 67.5 || Az > 112.5) {
    document.getElementById('Direc').innerHTML = "East";
  }
  if (Az > 112.5 || Az > 157.5) {
    document.getElementById('Direc').innerHTML = "South-East";
  }
  if (Az > 157.5 || Az > 202.5) {
    document.getElementById('Direc').innerHTML = "South";
  }
  if (Az > 202.5 || Az > 247.5) {
    document.getElementById('Direc').innerHTML = "South-west";
  }
  if (Az > 247.5 || Az > 292.5) {
    document.getElementById('Direc').innerHTML = "West";
  }
  if (Az > 292.5 || Az > 337.5) {
    document.getElementById('Direc').innerHTML = "North-West";
  }

});
//tile
document.addEventListener("DOMContentLoaded", function() {
  const tileContainer = document.getElementById("tile-container");

  for (let i = 0; i < 30; i++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tileContainer.appendChild(tile);
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const tileContainer = document.getElementById("tile-container1");

  for (let i = 0; i < 15; i++) {
      const tile = document.createElement("div");
      tile.className = "tile1";
      tileContainer.appendChild(tile);
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const tileContainer = document.getElementById("tile-container2");

  for (let i = 0; i < 12; i++) {
      const tile = document.createElement("div");
      tile.className = "tile2";
      tileContainer.appendChild(tile);
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const tileContainer = document.getElementById("tile-container3");

  for (let i = 0; i < 12; i++) {
      const tile = document.createElement("div");
      tile.className = "tile3";
      tileContainer.appendChild(tile);
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const tileContainer = document.getElementById("tile-container4");

  for (let i = 0; i < 6; i++) {
      const tile = document.createElement("div");
      tile.className = "tile4";
      tileContainer.appendChild(tile);
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const tileContainer = document.getElementById("tile-container5");

  for (let i = 0; i < 22; i++) {
      const tile = document.createElement("div");
      tile.className = "tile5";
      tileContainer.appendChild(tile);
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const tileContainer = document.getElementById("tile-container6");

  for (let i = 0; i < 6; i++) {
      const tile = document.createElement("div");
      tile.className = "tile6";
      tileContainer.appendChild(tile);
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const tileContainer = document.getElementById("tile-container7");

  for (let i = 0; i < 2; i++) {
      const tile = document.createElement("div");
      tile.className = "tile7";
      tileContainer.appendChild(tile);
  }
});

//needle 
onValue(dataRef5, (snapshot) => {
    const azimutValue = snapshot.val();
    console.log('Azimut Value:', azimutValue);

    // Now you can use the azimutValue as needed, for example, update the arrow rotation
    const arrow = document.getElementById('needle');
    arrow.style.transform = `rotate(${azimutValue}deg)`;
  });


// var inp = document.getElementById("Name")
// var descri= document.getElementById("Description") 
// var status = document.getElementById("Status")


// window.sendtodo = function () {
//     var obj = {
//         task: inp.value,
//         description:descri.value,
//         status:status.value,
//         uid:localStorage.getItem("uid")
//     };
//        if(obj.task=="",obj.description=="",obj.status==""){
//         alert("All Fields Are Requried")
//         return false
//        }
//        else{

//     const keyRef = ref(database, 'todotask','Users')
//     obj.id=push(keyRef).key;
//     const refrences = ref(database, `todotask/${obj.id}/`);
//     // const sab =  localStorage.setItem()
//     // console.log(sab)



//     set(refrences,obj)
//         console.log(obj.id)
//         console.log(obj)
//         alert("data addded")

// }
// }
// var list = []
// function renderData(){
//     const refrences = ref(database, `todotask/`);
//     var parent = document.getElementById('parent')
//     parent.innerHTML = "";
//     for(var i=0;  i<list.length; i++ ){
//       // console.log(list[i].uid)
//         if(list[i].uid==localStorage.getItem("uid")){
//           parent.innerHTML += `<ul><li id=${list[i].id}>Name : ${list[i].task}</br><li id=${list[i].id}>Description:${list[i].description}</br><li id=${list[i].id}>Status:${list[i].status}</br><button onclick="delTask(this)" id="del">${"Delete"}</button><button onclick="editask(this)" id="edit">${"Edit"}</button></li></ul>`;
//         }
//     }
// }
// "user"
// var un = [];
// function username(){

//   var usn =  document.getElementById('user');
//   usn.innerHTML = "";
//   for (var i=0; i<un.length; i++){
//     usn.innerHTML += `<h2>${un[i].user}</h2>`
//   }

// }
// username();

// window.getdata = function () {

//   onValue(ref(database, '/todotask/'), (snapshot) => {
//     // console.log(snapshot.val())
//   });


//   const taskRef =ref(database,'todotask/');
//   onChildAdded(taskRef, function(data){
//    list.push(data.val());
//       // console.log(data.val());
//       renderData();
//   });
//   // console.log(list.uid)

// }
// window.delTask = function(y){
//     let UID = y.parentElement.getAttribute("id")
//   remove(ref(database,`todotask/${UID}`))
//   .then(()=>{
//     alert("data removed successfully ")
//   })
//   .catch((error)=>{
//      alert("error"+error)
//   })
//   y.parentElement.parentElement.remove()
// }
// window.editask = function(y){
//     let Value = prompt("Please Enter new name ",y.parentElement.value)
//     let Value2 = prompt("Please Enter new description ",y.parentElement.value)
//     let Value3 = prompt("Please Enter new Status ",y.parentElement.value)
//     let UID = y.parentElement.getAttribute("id")
//   const REF = ref(database, `todotask/${UID}`);
//   update(REF,{
//     task: Value,
//     description:Value2,
//     status:Value3
//   })
//   .then(()=>{
//     alert("data Update successfully ")
//     var parent = document.getElementById('parent')
//     parent.innerHTML="";
//     getdata()
//   })
//   .catch((error)=>{
//      alert("error"+error)
//   })
// console.log()
  
// }


window.logout = function () {
  signOut(auth)
    .then(function () {
      alert("Logout Successfully");
      window.location.href = "login.html";
    })
    .catch(function (err) {
      console.log(err);
    });
};
function checkAuthentication() {
  onAuthStateChanged(auth, function (user) {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
      window.location.href = "login.html";
    }
  });
}
checkAuthentication();