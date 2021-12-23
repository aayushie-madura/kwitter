// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1UwzXWv35hadZjPQotFfXwU3FyQJYmrI",
  authDomain: "kwitter-social-website-7dab2.firebaseapp.com",
  databaseURL: "https://kwitter-social-website-7dab2-default-rtdb.firebaseio.com",
  projectId: "kwitter-social-website-7dab2",
  storageBucket: "kwitter-social-website-7dab2.appspot.com",
  messagingSenderId: "1027427268482",
  appId: "1:1027427268482:web:81c29ab03018e820a0419b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name -"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}