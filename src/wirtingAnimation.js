import React, { useEffect, useState } from 'react';

const WordWritingAnimation = ({ text , styleData}) => {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (currentIndex < text.length) {
                setTypedText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Adjust typing speed as needed

        return () => clearInterval(typingInterval);
    }, [text, currentIndex]);

    return (
        <div className="word-writing-animation">
            <span className={styleData}>{typedText}</span>
        </div>
    );
};

export default WordWritingAnimation;
