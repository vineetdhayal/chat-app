import { useEffect, useState } from "react";
import Message from "./Message";
import { sendMessage } from "./utils";
import './chat.css';

const ChatComponent = ({ chat, currentUser, onSend, onDelete }: any) => {
    const [messageUser1, setMessageUser1] = useState('');
    const [messageUser2, setMessageUser2] = useState('');
    const [messages, setMessages] = useState(chat.messages);

    useEffect(() => {
        setMessages(chat.messages);
    }, [chat.messages]);

    const handleSendUser1 = () => {
        if (messageUser1.trim() !== '') {
            const newMessage = {
                sender: currentUser,
                timestamp: new Date(),
                content: messageUser1
            };
            sendMessage(chat.id, newMessage);
            onSend(chat.id, newMessage);
            setMessages([...messages, newMessage]);
            setMessageUser1('');
        }
    };

    const handleSendUser2 = () => {
        if (messageUser2.trim() !== '') {
            const newMessage = {
                sender: 'User 2',
                timestamp: new Date(),
                content: messageUser2
            };
            sendMessage(chat.id, newMessage);
            onSend(chat.id, newMessage);
            setMessages([...messages, newMessage]);
            setMessageUser2('');
        }
    };

    const handleReceive = (receivedMessage: string) => {
        onSend(chat.id, receivedMessage);
        setMessages([...messages, receivedMessage]);
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg: any, index: number) => (
                    <Message key={index} message={msg} isCurrentUser={msg.sender === currentUser} />
                ))}
            </div>
            <div>
                <h2>{chat.name}</h2>
                <input type="text" value={messageUser1} onChange={(e) => setMessageUser1(e.target.value)} />
                <button onClick={handleSendUser1}>Send</button>
            </div>
            <div>
                <h3>User 2</h3>
                <input type="text" value={messageUser2} onChange={(e) => setMessageUser2(e.target.value)} />
                <button onClick={handleSendUser2}>Send</button>
            </div>
            <button className="delete-button" onClick={() => onDelete(chat.id)}>Delete Chat</button>
        </div>
    );
};

export default ChatComponent;
