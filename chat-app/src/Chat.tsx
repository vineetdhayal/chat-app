import { useState } from "react";
import { deleteChat } from "./utils";
import ChatList from "./ChatList";

const Chat = () => {
    const initialChats = [
        { id: 1, name: 'User 1', type: 'private', participants: ['User 1', 'User 2'], messages: [] },
    ];
    const currentUser = 'User 1';

    const [chats, setChats] = useState(initialChats);

    const handleSend = (chatId: number, message: string) => {
        setChats((prev: any[]) =>
            prev.map((chat: any) =>
                chat.id === chatId ? { ...chat, messages: [...chat.messages, message] } : chat
            )
        );
    };

    const handleDelete = (chatId: number) => {
        console.log(chatId);
        console.log(chats);
        setChats(prev =>
            prev.map(chat =>
                chat.id === chatId ? { ...chat, messages: [] } : chat
            )
        );
    };

    return (
        <div>
            <h1>Chat App</h1>
            <ChatList
                chats={chats}
                currentUser={currentUser}
                onDelete={handleDelete}
                onReceiveMessage={(chatId: number, message: string) => {
                    handleSend(chatId, message);
                }}
            />
        </div>
    );
};

export default Chat;
