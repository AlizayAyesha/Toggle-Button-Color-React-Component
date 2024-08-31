import React, { useState } from 'react';
import './style.css';

function ToggleButtonColor() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b"); // Default text color
  const [buttonStyle, setButtonStyle] = useState("white");

  function handleClick() {
    setBackgroundColor(backgroundColor === "white" ? '#1b1b1b' : 'white');
    setTextColor(textColor === "#1b1b1b" ? "#ff0000" : "#1b1b1b"); // Change to red
    setButtonStyle(backgroundColor === "white" ? '#1b1b1b' : 'white');
  }

  return (
    <>
      <section style={{ backgroundColor, color: textColor }}>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: buttonStyle,
            color: textColor,
            border: `2px solid ${textColor}`,
          }}
        >
          White Theme
        </button>
        <section className='content'>
          <p className='kumar-one-outline-regular'>
            "  Master the color toggle as Batman wields his gadgets. Turn every shift into a weapon against mediocrity. 
            <br /> Embrace the risk, and let each adjustment be a strike against the chaos."
          </p>
        </section>
      </section>
    </>
  );
}

export default ToggleButtonColor;
