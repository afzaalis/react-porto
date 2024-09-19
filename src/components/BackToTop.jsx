import React, { useState, useEffect } from 'react';
import './BackToTop.css'; 

export const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const checkScrollTop = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`back-to-top ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
            ↑
        </div>
    );
};

