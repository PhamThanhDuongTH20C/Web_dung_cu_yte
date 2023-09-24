import React, { useState, useEffect } from 'react';
import './login.css';
import FB from '../img/icon_social/facebook.png'
import GG from '../img/icon_social/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(''); 
  const [passwordError, setPasswordError] = useState(''); 
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const IsValidate = () => {
    let isproceed = true;

    if (email === '' || !email) {
      isproceed = false;
      setEmailError('Vui lòng nhập Email');
    } else {
      setEmailError('');
    }

    if (password === '' || !password) {
      isproceed = false;
      setPasswordError('Vui lòng nhập Mật khẩu');
    } else {
      setPasswordError('');
    }

    return isproceed;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (IsValidate()) {
      try {
        const response = await axios.post('http://localhost:5001/api/users/login', {
          email: email,
          password: password,
        });
  
        if (response.status === 200) {
          const accessToken = response.data.accessToken; // Assuming your API response contains 'accessToken'
          if (accessToken) {
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 7);
            document.cookie = `accessToken=${accessToken}; expires=${expirationDate.toUTCString()}; path=/`;
            setLoginError('');
          }
          navigate('/');
          window.location.reload();
          console.log('Đăng nhập thành công');
        } 
      } catch (error) {
        console.error('Lỗi đăng nhập:', error);
        setLoginError('Email hoặc mật khẩu không chính xác.');
      }
    }
  };
  
  useEffect(() => {
    const accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
    if (accessToken) {
      navigate('/');
    }
  }, [navigate]);

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
          <p className="error-message">{emailError}</p>
       
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
          <p className="error-message">{passwordError}</p>
          <p className="error-message">{loginError}</p>
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
