import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './MessageContainer.css';
import AvatarSelectionWindow from './AvatarSelectionWindow';
import avatar1 from './avatar1.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.jpg';

const MessageContainer = ({
                              messages,
                              selectedAvatar,
                              showAvatarSelection,
                              handleAvatarSelection,
                              setShowAvatarSelection,
                          }) => {
    const messageContainerRef = useRef(null);
    const lastMessageRef = useRef(null);

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

    return (
        <div className="message-container" ref={messageContainerRef}>
            <div className="message-list">
                {messages.map((message, index) => (
                    <div
                        className={`message ${message.sender}`}
                        key={index}
                        ref={index === messages.length - 1 ? lastMessageRef : null}
                    >
                        {message.sender === 'bot' && (
                            <img src={message.avatar} alt="Avatar" className="avatar" />
                        )}
                        <p>{message.text}</p>
                        {message.sender === 'user' && selectedAvatar && (
                            <img src={selectedAvatar} alt="Avatar" className="avatar" />
                        )}
                    </div>
                ))}
                <div ref={lastMessageRef} />
            </div>

            {showAvatarSelection && (
                <div className="avatar-selection-container">
                    <AvatarSelectionWindow
                        avatars={[avatar1, avatar2, avatar3]}
                        selectedAvatar={selectedAvatar}
                        handleAvatarSelection={handleAvatarSelection}
                        handleHideAvatarSelection={() => setShowAvatarSelection(false)}
                    />
                </div>
            )}
        </div>
    );
};

MessageContainer.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            sender: PropTypes.oneOf(['user', 'bot']).isRequired,
            avatar: PropTypes.string.isRequired,
        })
    ).isRequired,
    selectedAvatar: PropTypes.string,
    showAvatarSelection: PropTypes.bool.isRequired,
    handleAvatarSelection: PropTypes.func.isRequired,
    setShowAvatarSelection: PropTypes.func.isRequired,
};

export default MessageContainer;







