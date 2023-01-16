const firebaseConfig = {
    apiKey: "AIzaSyDCDtmiRh4m2Wcw8H-B1qQicDZ88geRYCs",
    authDomain: "kwitter-50bee.firebaseapp.com",
    databaseURL: "https://kwitter-50bee-default-rtdb.firebaseio.com",
    projectId: "kwitter-50bee",
    storageBucket: "kwitter-50bee.appspot.com",
    messagingSenderId: "41638481237",
    appId: "1:41638481237:web:17decfe8b0e499877f73dc",
    measurementId: "G-G3BERZVVFY"
};

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "lcwa_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "lcwa_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}