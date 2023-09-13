import React, { useState } from 'react';
import './register.css'
import FB from '../img/icon_social/facebook.png'
import GG from '../img/icon_social/google.png'
function Register() {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
  
    const togglePasswordVisibility1 = () => {
      setShowPassword1(!showPassword1);
    };
  
    const togglePasswordVisibility2 = () => {
      setShowPassword2(!showPassword2);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      setEmail('');
      setPassword1('');
      setPassword2('');
    };
  
    return (
        <div className="frame-login">
          <div className="login">
            <p className="text">Đăng Ký</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password">
                <input
                  type={showPassword1 ? 'text' : 'password'}
                  name="password"
                  id="password1"
                  placeholder="Mật khẩu"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                />
                <i
                  className={`fa-regular fa-eye eye ${showPassword1 ? 'hidden' : ''}`}
                  id="show-password1"
                  style={{ color: '#827a7a' }}
                  onClick={togglePasswordVisibility1}
                ></i>
                <i
                  className={`fa-regular fa-eye-slash eye ${showPassword1 ? '' : 'hidden'}`}
                  id="hide-password1"
                  style={{ color: '#827a7a' }}
                  onClick={togglePasswordVisibility1}
                ></i>
              </div>
              <div className="repassword">
                <input
                  type={showPassword2 ? 'text' : 'password'}
                  name="password"
                  id="password2"
                  placeholder="Nhập lại mật khẩu"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
                <i
                  className={`fa-regular fa-eye eye ${showPassword2 ? 'hidden' : ''}`}
                  id="show-password2"
                  style={{ color: '#827a7a' }}
                  onClick={togglePasswordVisibility2}
                ></i>
                <i
                  className={`fa-regular fa-eye-slash eye ${showPassword2 ? '' : 'hidden'}`}
                  id="hide-password2"
                  style={{ color: '#827a7a' }}
                  onClick={togglePasswordVisibility2}
                ></i>
              </div>
              <button type="submit">Đăng Ký</button>
            </form>
            <div className="center">
              <p>Đã có tài khoản?</p>
              <a href="">Đăng nhập</a>
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

export default Register  
