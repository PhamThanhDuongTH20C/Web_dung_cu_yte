import React from 'react'
import './detail_order.css'
import img1 from '../../img/history.png'
import img2 from '../../img/information.png'
import img3 from '../../img/logout.png'
import product from "../../img/product.png"
function detail_order() {
  return (
    <div className="container-personal-page">
      <div className="menu-bar">
        <a href="">
          <div className="item-menu ">
            <img src={img2} alt="" />
            <p>Tài khoản của bạn</p>
          </div>
        </a>
        <a href="" className="active">
          <div className="item-menu black">
            <img src={img1} alt="" />
            <p>Lịch sử mua hàng</p>
          </div>
        </a>
        <a href="">
          <div className="item-menu">
            <img src={img3} alt="" />
            <p>Đăng xuất</p>
          </div>
        </a>
      </div>
      <div className="column">
        <div className="frame_infor">
          <div className="header">
            <div className="left">
              <p className="title">Chi Tiết Đơn Hàng</p>
              <div className="point"></div>
              <p className="detail">13:11 13/11/2024</p>
              <div className="point"></div>
              <p className="detail">2 sản phẩm</p>
            </div>
            <a href="">Quay lại</a>
          </div>
          <div className="infor_order">
            <div className="infor_customer">
              <div className="header-text">
                <p>THÔNG TIN NHẬN HÀNG</p>
              </div>
              <p className="title">TÊN KHÁCH HÀNG:</p>
              <p className="content">Phạm Ngọc Phong</p>
              <p className="title">ĐỊA CHỈ NHẬN HÀNG:</p>
              <p className="content">99 Đường Nguyễn Cư Trinh, Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh</p>
              <p className="title">EMAIL:</p>
              <p className="content">phongpham131102@gmail.com</p>
              <p className="title">SỐ ĐIỆN THOẠI:</p>
              <p className="content">0941572957</p>
            </div>
            <div className="infor_detail_order">
            <div className="header-row">
                <div className="header-column">
                <p className="text-grey">MÃ ĐƠN HÀNG:</p>
                <p className="text-black">#4152</p>
                </div>
                <div className="vertical"></div>
                <div className="header-column">
                <p className="text-grey">PHƯƠNG THỨC THANH TOÁN:</p>
                <p className="text-black">Tiền Mặt</p>
                </div>
            </div>
            <div className="header-row-2">
                <p className="text-1">Tổng tiền :</p>
                <p className="text-2">1.260.000 đ</p>
            </div>
            </div>
          </div>
          <div className="progess-status">
            <div className="circle active">
              1
              <p className="active">Đơn hàng đã đặt</p>
            </div>
            <div className="bar active"></div>
            <div className="circle active">
              2
              <p className="active">Đã duyệt đơn hàng</p>
            </div>
            <div className="bar active"></div>
            <div className="circle active">
              3
              <p className="active">Đang vận chuyển</p>
            </div>
            <div className="bar"></div>
            <div className="circle">
              4
              <p>Đã nhận được hàng</p>
            </div>
          </div>
          <div className="header-row-product">
            <div className="name">TÊN SẢN PHẨM</div>
            <div className="price">ĐƠN GIÁ</div>
            <div className="quatity">SỐ LƯỢNG</div>
            <div className="total-price">TỔNG TIỀN</div>
          </div>
          <div className="row-product">
            <div className="name">
              <img src={product} alt="" /> Máy đo huyết áp điện tử bắp tay Wellmed AXD-804
            </div>
            <div className="price">630.000đ</div>
            <div className="quatity">x1</div>
            <div className="total-price">630.000đ</div>
          </div>
   

   

        </div>
      </div>
    </div>
  );
}
export default detail_order