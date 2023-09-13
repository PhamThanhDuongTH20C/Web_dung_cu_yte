import React from 'react'
import './change_address.css'
import imf from '../../img/information.png'
import LS from '../../img/history.png'
import LY from '../../img/logout.png'
function Address() {
  return (
    <div>
    
      <div className="container-personal-page">
        <div className="menu-bar">
          <a href="" className="active">
            <div className="item-menu black">
              <img src={imf} alt="" />
              <p>Tài khoản của bạn</p>
            </div>
          </a>
          <a href="">
            <div className="item-menu">
              <img src={LS} alt="" />
              <p>Lịch sử mua hàng</p>
            </div>
          </a>
          <a href="">
            <div className="item-menu">
              <img src={LY} alt="" />
              <p>Đăng xuất</p>
            </div>
          </a>
        </div>
        <div className="column">
          <div className="frame_infor">
            <div className="header">
              <p>Địa Chỉ Nhận Hàng</p>
            </div>
            <div className="frame-address">
              <div className="frame-input">
                <p>Địa chỉ cụ thể</p>
                <input type="text" placeholder="Nhập địa chỉ cụ thể của bạn" />
              </div>
            </div>
            <div className="center">
              <div className="component">
                <p>Tỉnh / Thành Phố</p>
                <select name="địa chỉ" className="dropdown">
                  <option>Tỉnh / Thành Phố</option>
                  <option>TP.HCM</option>
                </select>
              </div>
              <div className="component">
                <p>Quận / Huyện</p>
                <select name="địa chỉ" className="dropdown">
                  <option>Quận / Huyện</option>
                  <option>TP.HCM</option>
                </select>
              </div>
              <div className="component">
                <p>Phường / Xã</p>
                <select name="địa chỉ" className="dropdown">
                  <option>Phường / Xã</option>
                  <option>TP.HCM</option>
                </select>
              </div>
            </div>
            <div className="frame-address">
              <button>Lưu Thay Đổi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address