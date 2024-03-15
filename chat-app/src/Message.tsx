
const Message = ({ message, isCurrentUser }: any) => {
    const { sender, timestamp, content } = message;
    const messageClass = isCurrentUser ? 'sent' : 'received';
    const color = isCurrentUser ? '#DCF8C6' : '#E8E8E8';
    return (
        <div className={`message ${messageClass}`} style={{ backgroundColor: color }}>
            <p><strong>{sender}</strong> - {timestamp.toLocaleString()}</p>
            <p>{content}</p>
        </div>
    );
};

export default Message;
