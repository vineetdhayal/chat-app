const sendMessage = (chatId, message) => {
    console.log(`Sending message "${message.content}" to chat ${chatId}`);
};

const receiveMessage = (chatId, message) => {
    console.log(`Receiving message "${message.content}" in chat ${chatId}`);
};

const deleteChat = (chatId) => {
    console.log(`Deleting chat ${chatId}`);
};

export {sendMessage, receiveMessage, deleteChat};