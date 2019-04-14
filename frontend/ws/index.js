const socket = new WebSocket("ws://localhost:8080/ws");

const connect = (callback) => {

    console.log('Attempt connect');

    socket.onopen = () => {
        console.log('Successfully connected');
    };

    socket.onerror = (error) => {
        console.log('Connection error: ', error);
    };

    socket.onclose = () => {
        console.log('Connection closed');
    };

    socket.onmessage = (message) => {
        callback(message)
        console.log(message);
    };
};

const sendMessage = (message) => {
    console.log('Sending message: ', message);
    socket.send(message);
};

export {connect, sendMessage};


