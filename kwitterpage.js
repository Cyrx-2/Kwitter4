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
  room_name=localStorage.getItem("room_name");
  
  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name1:user_name,
          message:msg,
         like:0
      });
      document.getElementById("msg").value="";
  }