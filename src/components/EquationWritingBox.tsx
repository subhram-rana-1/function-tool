// DialogBox.js
import React from 'react';
import './equation-writing-box.css'; // Add CSS for DialogBox styling

// @ts-ignore
const EquationWritingBox = ({ message, onClose }) => {
    return (
        <div className="overlay">
            <div className="dialog-box">
                <button className="cancel-button" onClick={onClose}>
                    X
                </button>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default EquationWritingBox;
