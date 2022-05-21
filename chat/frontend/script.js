const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
let messageInput = document.getElementById("message");
let userName = document.getElementById('name');
let room = '', prevRoom='';

const socket = io("https://chat-backend.enesago.repl.co");

socket.on('connect', () => {
    document.getElementById("messageContainer").append(`you connected with id: ${socket.id}`);
})

socket.on('resive-message', resiveMessage => {
    displayMessage(resiveMessage);
})

form1.addEventListener('submit', e => {
    e.preventDefault()


  
  

    userName = document.getElementById('name').value;

    form1.style.display = "none";
    form2.style.display = "block";

    displayMessage(userName + ' connected; with id: ' + socket.id, 'me');
    socket.emit('send-message', userName + ' connected; with id: ' + socket.id, room)

});

form2.addEventListener('submit', e => {
    e.preventDefault();

    prevRoom = room;
    const message = messageInput.value;

    if(message == "") return

    displayMessage(userName + ' said ' + message, 'me')
    socket.emit('send-message', userName + ' said ' + message, room)

    messageInput.value = "";

  if(document.querySelectorAll('li')){
  document.querySelectorAll('li')[document.querySelectorAll('li').length-1].scrollIntoView()
}
});

document.querySelector("#joinRoom").addEventListener("click", e => {
    e.preventDefault()

    prevRoom = room;
    room = document.getElementById('room').value;
    socket.emit('join-room', prevRoom, room);

    document.getElementById('room').value = '';
});

function displayMessage(message, classname) {
    const li = document.createElement('li');
    if(classname){
    li.classList.add(classname);
    }
    li.textContent = `${message}`;

    document.getElementById("messageContainer").append(li);


    if(document.querySelectorAll('li')){
  document.querySelectorAll('li')[document.querySelectorAll('li').length-1].scrollIntoView()
}
}
