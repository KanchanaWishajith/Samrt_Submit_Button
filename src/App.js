import React, { useState } from 'react';
import './style.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);
  const [buttonPosition, setButtonPosition] = useState(0);

  const isUsernameValid = () => {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}$/;
    return usernameRegex.test(username);
  };

  const isPasswordValid = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleMouseOver = () => {
    if (!isUsernameValid() || !isPasswordValid()) {
      setButtonPosition(prev => (prev === 0 ? 16.25 : 0));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUsernameValid() && isPasswordValid()) {
      setMessageVisible(true);
    } else {
      setMessageVisible(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setMessageVisible(false);
          }}
          style={{
            borderColor: isUsernameValid() ? '#34bd34' : '#fe2e2e',
            backgroundColor: isUsernameValid() ? '#c2ffc2' : '#ffc2c2'
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessageVisible(false);
          }}
          style={{
            borderColor: isPasswordValid() ? '#34bd34' : '#fe2e2e',
            backgroundColor: isPasswordValid() ? '#c2ffc2' : '#ffc2c2'
          }}
        />
        <button
          type="submit"
          id="submit"
          onMouseOver={handleMouseOver}
          style={{ transform: `translateX(${buttonPosition}em)` }}
        >
          Submit
        </button>
      </form>
      {messageVisible && <p id="message-ref">Signed Up Successfully!</p>}
    </div>
  );
}

export default App;
