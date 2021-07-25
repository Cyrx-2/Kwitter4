// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAjljotvYmUUWtyRJoAlZKkD-d0Wc0QVrQ",
    authDomain: "language-byjj.firebaseapp.com",
    databaseURL: "https://language-byjj-default-rtdb.firebaseio.com",
    projectId: "language-byjj",
    storageBucket: "language-byjj.appspot.com",
    messagingSenderId: "344878911326",
    appId: "1:344878911326:web:1bca2bb5eaa8b50e56c9cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
 function addRoom(){
       room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"adding room name"
       });
       localStorage.setItem("room_name",room_name);
       window.location="kwitterpage.html";
 }
 function getdata()
 {
       firebase.database().ref("/").on('value',function (snapshot){
             document.getElementById("output").innerHTML=" ";
 snapshot.forEach(function(childsnapshot){
       childKey=childsnapshot.key;
       Room_names=childKey;
       console.log("room name -"+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
       });
 });
 } 
 getData();
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitterpage.html";
 }
 
 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="Index.html";
 }