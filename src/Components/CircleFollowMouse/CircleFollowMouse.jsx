import React, { useState, useEffect } from 'react';

const useMousePosition = () => {
 const [position, setPosition] = useState({ x: 0, y: 0 });

 useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    document.addEventListener('mousemove', updatePosition);
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
 }, []);
  
 return position;
};

const CircleFollowMouse = ({ transitionDelay }) => {
 const { x, y } = useMousePosition();
 const circleSize = 40;

 const scrollX = window.scrollX;
 const scrollY = window.scrollY;

 return (
    <div
      style={{
        position: 'absolute',
        left: `${x + scrollX}px`,
        top: `${y + scrollY}px`,
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        borderRadius: '50%',
        zIndex: '99911000',
        backdropFilter: 'invert(100%)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }}
    />
 );
};

export default CircleFollowMouse;
