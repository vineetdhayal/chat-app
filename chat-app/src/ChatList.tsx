import ChatComponent from "./ChatComponent";
import { IChat } from "./types";
import { receiveMessage } from "./utils";

const ChatList = ({ chats, currentUser, onDelete, onReceiveMessage }: any) => {
    console.log('rendered again', chats);
    return (
        <div>
            {chats.map((chat: IChat) => (
                <div key={chat.id}>
                    <ChatComponent
                        chat={chat}
                        currentUser={currentUser}
                        onSend={(chatId: number, message: string) => {
                            onReceiveMessage(chatId, message);
                        }}
                        onDelete={onDelete}
                    />
                </div>
            ))}
        </div>
    );
};

export default ChatList;
