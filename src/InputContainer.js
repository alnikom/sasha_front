import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import backgroundImage from './6176650.jpg';
import './InputContainer.css';

const InputContainer = ({ inputValue, setInputValue, handleSendMessage }) => {
    const [inputHeight, setInputHeight] = useState(0);

    useEffect(() => {
        const calculateInputHeight = () => {
            const chatContainer = document.getElementById('chat-container');
            const inputContainer = document.getElementById('input-container');

            if (chatContainer && inputContainer) {
                const windowHeight = window.innerHeight;
                const chatContainerHeight = chatContainer.offsetHeight;
                const inputContainerTop = inputContainer.offsetTop;
                const inputContainerHeight = windowHeight - chatContainerHeight - inputContainerTop;
                setInputHeight(inputContainerHeight);
            }
        };

        calculateInputHeight();
        window.addEventListener('resize', calculateInputHeight);

        return () => {
            window.removeEventListener('resize', calculateInputHeight);
        };
    }, []);

    return (
        <div className="input-container" id="input-container" style={{ height: `${inputHeight}px` }}>
            <textarea
                className="input-field"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="send-button" onClick={handleSendMessage}>
                Send
            </button>
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }} />
        </div>
    );
};

InputContainer.propTypes = {
    inputValue: PropTypes.string.isRequired,
    setInputValue: PropTypes.func.isRequired,
    handleSendMessage: PropTypes.func.isRequired,
};

export default InputContainer;

