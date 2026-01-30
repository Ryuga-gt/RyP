import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX - 8}px, ${e.clientY - 8}px, 0)`;
            }
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ease-out ${isHovering ? 'scale-[2.5]' : 'scale-100'}`}
            style={{ willChange: 'transform' }}
        />
    );
};

export default Cursor;
