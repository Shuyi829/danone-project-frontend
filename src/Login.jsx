import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigate('/main'); // Set according to your main interface route
    } else {
      alert('Username or password is incorrect');
    }
  };

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <br />
      <input
        className="input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br />
      <button className="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
