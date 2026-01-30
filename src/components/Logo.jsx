import React from 'react';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-wrapper">
            <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
                <text x="20" y="80" className="logo-text-ryuga">
                    Ryuga
                </text>

                <circle cx="200" cy="70" r="8" className="logo-dot" />

                <text x="215" y="72" className="logo-text-dev">
                    Dev
                </text>

                <rect x="25" y="95" width="350" height="0.5" className="logo-line" />
            </svg>
        </div>
    );
};

export default Logo;
