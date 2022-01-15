var firebaseConfig =
{
apiKey: "AIzaSyCNHBICIedOrnZXJFzE3T34hScKsBwTIKU",
authDomain: "kwitter-2dffb.firebaseapp.com",
projectId: "kwitter-2dffb",
storageBucket: "kwitter-2dffb.appspot.com",
messagingSenderId: "735973281650",
appId: "1:735973281650:web:0db189b0a93d9cda2f57eb",
measurementId: "G-9DQCXF3JBH"
};
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
firebase_message_id=childKey;
message_data=childData;
console.log(firebase_message_id)
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+ name +"<img class='user_tick'src='tick.png></h4>";
message_with_tag="<h4 class='message_h4'>"+ message +"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;
});});}
getData();
function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
});
localStorage.setItem("room name",room_name);
window.location ="Kwitter room.html";
}
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter page.html")
}
function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value ="";
}
function updateLike(message_id)
{
console.log("clicked on like button-"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase:database().ref(room_name).child(message_id).update({
});
}