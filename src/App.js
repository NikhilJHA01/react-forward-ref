import React, { useState, useEffect, useRef } from 'react';
import CustomInput from './CustomInput';
import './style.css';

export default function App() {
  const [text, setText] = useState('');
  const count = useRef(1);
  const inputRef = useRef('');
  useEffect(() => {
    count.current += 1;
  });
  const handleClick = () => {
    if (!inputRef.current.value) {
      inputRef.current.focus();
    }
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <CustomInput
        ref={inputRef}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
      <h1>Hello !{text}</h1>
      <p>Start editing to see some magic happen :) {count.current}</p>
    </div>
  );
}
