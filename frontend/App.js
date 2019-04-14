import React, {useEffect} from 'react';
import {connect, sendMessage} from './ws/index';

const App = (props) => {

    useEffect(() => {
        connect();
    }, []);

    const send = () => {
        sendMessage('hello');
    };

    return (
        <div>
            <button onClick={send}>Send message</button>
        </div>
    );
};


export default App;