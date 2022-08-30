//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyA0yXaf83AJ-E-ulkNvG3q6pLaH-Jyj48E",
  authDomain: "kwitter-652a6.firebaseapp.com",
  databaseURL: "https://kwitter-652a6-default-rtdb.firebaseio.com",
  projectId: "kwitter-652a6",
  storageBucket: "kwitter-652a6.appspot.com",
  messagingSenderId: "603582992993",
  appId: "1:603582992993:web:7b1e884c2933e4786f1020",
  measurementId: "G-LJKCXYYTKX",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code

        //End code
      });
    });
}
getData();
