import React, { useState } from 'react';
import './register.css';
import FB from '../img/icon_social/facebook.png';
import GG from '../img/icon_social/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  // State variables to manage form input values and password visibility
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const navigate = useNavigate();

  // Function to toggle visibility of the first password input
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  // Function to toggle visibility of the second password input
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  // Form submission handler
  const [emailError, setEmailError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [password1Error, setPassword1Error] = useState('');
  const [password2Error, setPassword2Error] = useState('');

  // Form validation function
  const IsValidate = () => {
    let isproceed = true;
  
    if (email === '' || !email) {
      isproceed = false;
      setEmailError('Vui lòng nhập Email');
    } else {
      setEmailError('');
    }
  
    if (fullName === '' || !fullName) {
      isproceed = false;
      setFullNameError('Vui lòng nhập Họ và Tên');
    } else {
      setFullNameError('');
    }
  
    if (password1 === '' || !password1) {
      isproceed = false;
      setPassword1Error('Vui lòng nhập Mật khẩu');
    } else {
      setPassword1Error('');
    }
  
    if (password2 === '' || !password2) {
      isproceed = false;
      setPassword2Error('Vui lòng nhập Mật khẩu');
    } else {
      setPassword2Error('');
    }
  
    if (phoneNumber === '' || !phoneNumber) {
      isproceed = false;
      setPhoneNumberError('Vui lòng nhập Số Điện Thoại');
    } else {
      setPhoneNumberError('');
    }
  
    if (password1 !== password2) {
      isproceed = false;
      setPassword2Error('Mật khẩu không trùng khớp');
    } else {
      setPassword2Error('');
    }
  
    return isproceed;
  };
  
  

  // Form submission function for making the API request
  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { email, phoneNumber, fullName, password: password1 };
    if (IsValidate()) {
      console.log(regobj);
      fetch("http://localhost:5001/api/users/register", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(regobj)
      })
        .then((res) => {
          if (res.ok) {        
            return res.json();
          } else {
            // Registration failed, handle the error
            toast.error('Registration failed.');
            throw new Error('Registration failed.');
          }
        })
        .then((data) => {
          navigate('/login');
          toast.success('Registered successfully.');
        })
        .catch((err) => {
          // Handle errors, e.g., show an error message
          toast.error('Failed: ' + err.message);
        });
    }
  };

  return (
    <div className="frame-login">
      <div className="login">
        <p className="text">Đăng Ký</p>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Họ Và Tên"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <p><span className="error-message">{fullNameError}</span></p>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p><span className="error-message">{emailError}</span></p>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Số Điện Thoại"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
           <p><span className="error-message">{phoneNumberError}</span></p>
          <div className="password">
            <input
              type={showPassword1 ? 'text' : 'password'}
              name="password"
              id="password1"
              placeholder="Mật khẩu"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
           
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
          </div>
          <p><span className="error-message">{password1Error}</span></p>
          <p><span className="error-message">{password2Error}</span></p>
          <button type="submit">Đăng Ký</button>
        </form>
        <div className="center">
          <p>Đã có tài khoản?</p>
          <a href="/login">Đăng nhập</a>
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

export default Register;
