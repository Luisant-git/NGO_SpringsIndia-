import React, { useState, useEffect } from 'react';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 z-50 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{backgroundColor: '#00695c'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d7d32'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00695c'}
            aria-label="Go to top"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default BackToTopButton;