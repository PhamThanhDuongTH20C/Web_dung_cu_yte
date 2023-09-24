import React from 'react';
import './header.css'; // Importing a CSS file to style the component.
import logo from './img/logo.png'; // Importing the 'logo.png' image.
import phoneCallImage from './img/phone-call.png'; // Importing the 'phone-call.png' image.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the specific Font Awesome icons you want to use
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from 'react-router-dom';
const HeaderUS = () => {

  const accessTokenCookie = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
  let name = ""; 
  if (accessTokenCookie) {
    const payload = JSON.parse(atob(accessTokenCookie.split('.')[1]));
    if (payload && payload.user && payload.user.username) {
      const username = payload.user.username;
      name = decodeURIComponent(escape(username));
      console.log("Corrected Text:", name);
    } else {
      console.log("Invalid or incomplete payload in accessToken.");
    }
  } else {
    console.log("accessToken cookie is null or empty.");
  }


  const handleLogout = () => {
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
  };
const Getname=()=>{
  if(accessTokenCookie===null || accessTokenCookie ==="")
     {
      return(
        <div className="sign-in-up">
        <a href="/Login" className="sign-in">Đăng Nhập</a>
        <p>/</p>
        <a href="/Register" className="sign-up">Đăng ký</a>
      </div>
      )
     }
     else{
      return(
        <div className="sign-in-up">
        <a href="" className="sign-in">{name}</a>
        <p>/</p>
        <a href="" className="sign-up" onClick={handleLogout}>Đăng Xuất</a>

      </div>
      )
     }
}


  return (
    <header>
         <div className="header-infor">
        <div className="address">
          {/* Use the correct Font Awesome icon name */}
         <FontAwesomeIcon icon={faLocationDot} />
          <p className="address-text">
            198 Đ. Tô Hiến Thành Phường 15 Quận 10 Thành phố Hồ Chí Minh
          </p>
        </div>
         <>{Getname()}</>
      </div>
      {/* Main Header Section */}
      <div className="header-main">
        <div className="taskbar">
          {/* Logo */}
          <a href=""><img src={logo} alt="Lưu Gia Logo" className="logo" /></a>
          <div className="search-space">
            {/* Search Bar */}
            <div className="main-search">
              <input className="search-bar" type="text" name="" id="" placeholder="Tìm tên sản phẩm, dụng cụ y khoa..." />
              <div className="box-icon">
                {/* Search Icon */}
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#1351dc' }} />
              </div>
            </div>
            {/* List of Keyword Suggestions */}
            <div className="list-keywords-suggest">
              <a href="" className="keyword-suggest">máy đo huyết áp</a>
              <a href="" className="keyword-suggest">vớ y khoa</a>
              <a href="" className="keyword-suggest">giường bệnh nhân</a>
              <a href="" className="keyword-suggest">máy đo đường huyết</a>
            </div>
          </div>
          <div className="box-call">
            <div className="icon-call">
              {/* Phone Call Icon */}
              <img src={phoneCallImage} alt="" className="phonecall" style={{
                width: '40px',
                height: '40px',
                animation: 'shake 0.5s ease-in-out infinite',
              }} />
            </div>
            <div className="callnow">
              <div className="text">Tư vấn ngay</div>
              <div className="phone">0939 479 932</div>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="nav-main">
          <div className="nav">
            <a className="redirect" href="">
              <div className="guide">Trang chủ</div>
            </a>
            <a className="redirect" href="">
              <div className="guide">Giới thiệu</div>
            </a>
            <a className="redirect" href="">
              <div className="guide">Sản phẩm</div>
            </a>
            <a className="redirect" href="">
              <div className="guide">Bản tin y tế</div>
            </a>
            <a className="redirect" href="">
              <div className="guide">Liên hệ giá sỉ</div>
            </a>
          </div>

          {/* Shopping Cart */}
          <div className="cart">
            <div className="icon-cart">
              <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#ffffff' }} />
              <span className="cart-items">2</span>
            </div>
            <div className="text-cart">Giỏ hàng</div>
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default HeaderUS;
