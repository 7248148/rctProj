import React, { useRef, useEffect } from 'react';
import './style.css';

function MirroredText({ children }) {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          textRef.current.classList.add('mirror');
        } else {
          textRef.current.classList.remove('mirror');
        }
      });
    });
    observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={textRef} className="text">
      {children}
    </div>
  );
}

export default MirroredText;