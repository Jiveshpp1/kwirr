
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






room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name")
function logOut(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "login.html";
}

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").innerHTML = "";
}
