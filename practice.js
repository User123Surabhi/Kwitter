// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAZpzGdJh1mOudhhThO78M274qzYycdkPI",
authDomain: "practise-activity-cc129.firebaseapp.com",
databaseURL: "https://practise-activity-cc129-default-rtdb.firebaseio.com",
projectId: "practise-activity-cc129",
storageBucket: "practise-activity-cc129.appspot.com",
messagingSenderId: "710964848718",
appId: "1:710964848718:web:837d3fac08375930c1fb1f",
measurementId: "G-KZY33X1QJ5"
}; 
// Initialize Firebase
function addUser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
 });
}
