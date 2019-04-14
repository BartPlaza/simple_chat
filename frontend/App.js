import React, {useEffect, useState} from 'react';
import {connect, sendMessage} from './ws/index';

const App = (props) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        connect(addMessage);
    }, []);

    const addMessage = (msg) => {
        setMessages((prevMessages) => {
            return [...prevMessages, msg];
        });
    };

    const send = () => {
        sendMessage('hello');
    };

    console.log(messages);

    return (
        <React.Fragment>
            <div>
                <button onClick={send}>Send message</button>
            </div>
            <div>
                <h2>Logs:</h2>
                {messages.map((msg, index) => <p key={index}>{msg.data}</p>)}
            </div>
        </React.Fragment>
    );
};


export default App;