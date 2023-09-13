import React, { useState } from 'react';
import './login.css';
import FB from '../img/icon_social/facebook.png'
import GG from '../img/icon_social/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="frame-login">
      <div className="login">
        <p className="text">Đăng Nhập</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="password">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              className="eye"
              id="show-password"
              style={{ color: '#827a7a', cursor: 'pointer' }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}{' '}
              <FontAwesomeIcon icon={faEye} />
            </span>
          </div>

          <div className="forgetpassword">
            <a href="">Quên mật khẩu?</a>
          </div>
          <button type="submit">Đăng Nhập</button>
        </form>
        <div className="center">
          <p>Chưa có tài khoản?</p>
          <a href="">Đăng ký</a>
        </div>
        <div className="center">
          <p>Hoặc đăng nhập bằng:</p>
        </div>
        <div className="center">
          <a href="">
            <img src={FB} alt="" />
          </a>
          <a href="">
            <img src={GG} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
