import React from 'react';
import './Popup.css'; 

const Popup = ({ content, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close" onClick={onClose}>X</button>
                {content.imageUrl && <img src={content.imageUrl} alt="Popup Content" className="popup-image" />}
                <h2>{content.title}</h2>
                <p>{content.text}</p>
            </div>
        </div>
    );
};



export default Popup;
