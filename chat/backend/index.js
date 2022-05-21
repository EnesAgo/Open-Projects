const { Console } = require('console');

const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: {origin: "*"}
})

io.on('connection', socket => {
    console.log(socket.id);
    socket.on('send-message', (resiveMessage, room) => {
        if(room === ''){
            socket.broadcast.emit('resive-message', resiveMessage)
            console.log(resiveMessage)
        }
        else{
            socket.to(room).emit('resive-message', resiveMessage);
            console.log(resiveMessage)
        }
    });
    socket.on('join-room', (prevRoom,room) => {
        if(prevRoom == ''){
            socket.join(room);
        }else{
            socket.leave(prevRoom);
            socket.join(room);
        }
    });
});

console.log("server started");

http.listen(3000, () => console.log('server started'));
