import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import MessageContainer from './MessageContainer';
import InputContainer from './InputContainer';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [showAvatarSelection, setShowAvatarSelection] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const messageContainerRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTo({
                top: messageContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    };

    const handleAvatarSelection = (avatar) => {
        setSelectedAvatar(avatar);
        setShowAvatarSelection(false);
    };

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, { text: inputValue, sender: 'user', avatar: selectedAvatar }]);
            setInputValue('');
        }
    };

    return (
        <div className="chatbot-container">
            <MessageContainer
                messages={messages}
                selectedAvatar={selectedAvatar}
                showAvatarSelection={showAvatarSelection}
                handleAvatarSelection={handleAvatarSelection}
                setShowAvatarSelection={setShowAvatarSelection}
                ref={messageContainerRef}
            />

            <InputContainer
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleSendMessage={handleSendMessage}
            />
        </div>
    );
};

export default Chatbot;




