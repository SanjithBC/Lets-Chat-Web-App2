const firebaseConfig = {
    apiKey: "AIzaSyDCDtmiRh4m2Wcw8H-B1qQicDZ88geRYCs",
    authDomain: "kwitter-50bee.firebaseapp.com",
    databaseURL: "https://kwitter-50bee-default-rtdb.firebaseio.com",
    projectId: "kwitter-50bee",
    storageBucket: "kwitter-50bee.appspot.com",
    messagingSenderId: "41638481237",
    appId: "1:41638481237:web:17decfe8b0e499877f73dc"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

 function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
 }

 function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
