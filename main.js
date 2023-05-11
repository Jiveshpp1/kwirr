
const firebaseConfig = {
  apiKey: "AIzaSyCqGRgSlLxmq9Pp9-O6yJgipnD0CuvfoMw",
  authDomain: "kwitter-project-db8d3.firebaseapp.com",
  databaseURL: "https://kwitter-project-db8d3-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-db8d3",
  storageBucket: "kwitter-project-db8d3.appspot.com",
  messagingSenderId: "789666006688",
  appId: "1:789666006688:web:4ddf980864794852876bc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 
document.getElementById("welcome").innerHTML = "Welcome" + user_name;

function addroom (){

  room_name = document.getElementById("room").value;
  localStorage.setItem("room_name",room_name);
  window.location = "kiwtterpage.html";
 
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class = 'room_name' id = "+Room_Names+" onlcilck = redirectToRoomName(this.id) >#"+ Room_Names +"</div><hr";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function rediectToRoomName(){
  localStorage.setItem("room_name",Room_names);
  window.location = "kiwtterpage.html";
}
function logOut(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "login.html";
}