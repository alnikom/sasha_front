import React from 'react';
import './AvatarSelectionWindow.css';

const AvatarSelectionWindow = ({
                                   avatars,
                                   selectedAvatar,
                                   handleAvatarSelection,
                               }) => {
    return (
        <div className="avatar-selection-window">
            <h3>Select Your Avatar</h3>
            <div className="avatar-grid">
                {avatars.map((avatar, index) => (
                    <img
                        key={index}
                        src={avatar}
                        alt={`Avatar ${index + 1}`}
                        className={`avatar ${selectedAvatar === avatar ? 'selected' : ''}`}
                        onClick={() => handleAvatarSelection(avatar)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AvatarSelectionWindow;


