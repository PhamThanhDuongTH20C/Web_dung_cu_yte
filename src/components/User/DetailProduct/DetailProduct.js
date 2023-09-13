import 'font-awesome/css/font-awesome.min.css';
import './detail-product.css'
import img1 from '../../img/chevron.png'
import img2 from '../../img/home.png'
import img3 from '../../img/3.png'
import img4 from '../../img/2.png'
import img5 from '../../img/1.png'
import img51 from '../../img/5.png'
import img52 from '../../img/4.png'
import img6 from '../../img/down.png'
import img7 from '../../img/omron.png'
import avatar from '../../img/avatar.jpg'
import React, { useState } from 'react';

function DetailProduct() {
    const [activeTab, setActiveTab] = useState('productInfo'); 
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
  return (
  <>
    <div className="classify">
      <img src={img2} alt="" className="home" />
      <img src={img1} alt="" className="left-arrow" />
      <a href="" className="category">
        Y tế gia đình
      </a>
      <img src={img1} alt="" className="left-arrow" />
      <a href="" className="category">
        Máy Đo Huyết Áp
      </a>
      <img src={img1} alt="" className="left-arrow" />
      <a href="" className="category active">
        Máy đo huyết áp điện tử bắp tay Omron Hem-8712
      </a>
    </div>
    <div className="main-product">
      <div className="column-gallery">
        <img src="./img/up.png" alt="" className="top-arrow" />
        <div className="column-images">
          <div className="frame-image">
            <img src={img5} alt="" />
          </div>
          <div className="frame-image">
            <img src={img4} alt="" />
          </div>
          <div className="frame-image">
            <img src={img3} alt="" />
          </div>
          {/* Add more frame-image elements as needed */}
        </div>
        <img src={img6} alt="" className="bottom-arrow" />
      </div>
      <img src={img5} alt="" className="main-image" />
      <div className="infor-product">
        <h1 className="name">Máy đo huyết áp điện tử bắp tay Omron Hem-8712</h1>
        <div className="row-rate">
          <div className="star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <p className="text-rate">4 đánh giá</p>
          <span className="dot"></span>
          <div className="row-text">
            <p className="bold">SKU:</p>
            <p className="sku">2,51,594</p>
          </div>
        </div>
        <div className="row-price">
          <p className="stroke-price">1.100.000đ</p>
          <p className="price">940.000đ</p>
          <div className="frame-discount">Giảm 14%</div>
        </div>
        <div className="row-brand">
          <p>Thương hiệu:</p>
          <img src={img7} alt="" />
        </div>
        <div className="column-policy">
          <div className="row-policy">
            <p className="title">Bảo hành :</p>
            <p className="content">5 năm</p>
          </div>
          <div className="row-policy">
            <p className="title">Xuất xứ thương hiệu :</p>
            <p className="content">Nhật Bản</p>
          </div>
          <div className="row-policy">
            <p className="title">Trạng Thái :</p>
            <p className="content red-bold">Còn Hàng</p>
          </div>
        </div>
        <div className="row-type">
          <p className="title-type">Loại:</p>
          <a href="">Máy Đo Huyết Áp</a>
        </div>
        <div className="row-quatity-add-to-cart">
          <div className="frame-quatity">
            <div className="sign">
              <div className="minus"></div>
            </div>
            <div className="quatity">1</div>
            <div className="sign">
              <div className="plus-1"></div>
              <div className="plus-2"></div>
            </div>
          </div>
          <button className="add-to-cart">
            <p>Thêm giỏ hàng</p>
            <i className="fa-solid fa-cart-shopping small" style={{ color: '#ffffff' }}></i>
          </button>
        </div>
      </div>
    </div>
    <div className="center-infor">
        <div
          className={`header ${activeTab === 'productInfo' ? 'active' : ''}`}
          data-tab="productInfo"
          onClick={() => handleTabClick('productInfo')}
        >
          Thông Tin Sản Phẩm
        </div>
        <div
          className={`header ${activeTab === 'technicalInfo' ? 'active' : ''}`}
          data-tab="technicalInfo"
          onClick={() => handleTabClick('technicalInfo')}
        >
          Thông Số Kỹ Thuật
        </div>
        <div
          className={`header ${activeTab === 'productReviews' ? 'active' : ''}`}
          data-tab="productReviews"
          onClick={() => handleTabClick('productReviews')}
        >
          Đánh Giá Sản Phẩm
        </div>
      </div>
      <div>
        {activeTab === 'technicalInfo' && (
            <div className="'specifications'" id='technicalInfo'>
            <div className="title-1">
                <p>Thông Số Kỹ Thuật</p>
            </div>
            <div className="row">
                <div className="title">Giới hạn đo</div>
                <div className="stroke"></div>
                <div className="title">Huyết áp: 0 tới 299 mm Hg; Nhịp tim: 40 tới 180 nhịp/phút</div>
            </div>
            <div className="row1">
                <div className="title">Độ Chính Xác</div>
                <div className="stroke"></div>
                <div className="title">Huyết áp: ±3 mm Hg; Nhịp tim: ±5%</div>
            </div>
            <div className="row">
                <div className="title">Phụ Kiện Kèm Theo</div>
                <div className="stroke"></div>
                <div className="title">Vòng bít cỡ trung bình; Hướng dẫn sử dụng; Bộ pin</div>
            </div>
            <div className="row1">
                <div className="title">Pin</div>
                <div className="stroke"></div>
                <div className="title">4 pin AA hoặc bộ đổi điện OMRON</div>
            </div>
            <div className="row">
                <div className="title">Trọng Lượng</div>
                <div className="stroke"></div>
                <div className="title">250g (không gồm pin)</div>
            </div>
            <div className="row1">
                <div className="title">Kích Thước Máy</div>
                <div className="stroke"></div>
                <div className="title">Khoảng 103 (rộng) x 80 (cao) x 129 (dài)</div>
            </div>
            </div>

         )}
        {activeTab === 'productInfo' && (
            <div className="information-product" id="productInfo">
                <p className="name-product">Máy đo huyết áp điện tử Omron Hem-8712</p>
                <div className="title">Giới thiệu sản phẩm</div>
                <span className="content">Với <strong>máy đo huyết áp điện tử omron hem-8712</strong> sẽ cho kết quả đo chính xác, có nhiều tiện ích thông mình, dễ dàng sử dụng với những thao tác thật đơn giản, HEM 8712 của Omron là sản phẩm máy đo tại nhà được nhiều người quan tâm và tin tưởng sử dụng hiện nay.</span>
                <div className="frame-image">
                <img src={img52} alt="" />
                <p className="title">Máy đo huyết áp điện tử bắp tay Omron Hem-8712 thương hiệu Nhật Bản.</p>
                </div>
                <div className="title">Ưu điểm và tính năng sản phẩm</div>
                <span className="content">HEM-8712 được sản xuất bằng công nghệ Intellisense hiện đại hàng đầu hiện nay, đồng thời tuân thủ theo những quy định khắt khe trong sản xuất, máy HEM 8712 cho kết quả đo chính xác, độ tin cậy cao hơn so với nhiều dòng sản phẩm cùng loại.</span>
                <div className="frame-image">
                <img src={img5} alt="" />
                </div>
                <span className="content">Máy đo huyết áp bắp tay omron hem 8712 được trang bị nhiều tính năng thông tinh, giúp người dùng dễ dàng theo dõi tình trạng huyết áp ở nhà. Máy có biểu tượng cảnh bảo quấn vòng bít có đúng hay không, biểu tượng báo cảnh báo tăng huyết áp, giúp người dùng biết được tình trạng huyết áp của mình và điều chỉnh vòng bít cho thích hợp. Đặc biệt máy có chức năng báo cử động người khi đo, nhắc người dùng đo lại khi phát hiện lỗi cử động. Ngoài ra, bộ nhớ máy lưu lại lần đo cuối, thích hợp cho việc xem lại kết quả đo cuối, tiện cho việc theo dõi tình trạng huyết áp.</span>
                <div className="title">Bảng đo huyết áp Tổ chức Y tế thế giới WHO và Hiệp hội cao huyết áp thế giới (ISH)</div>
                <div className="frame-image">
                <img src={img51} alt="" />
                </div>
            </div>
            )}

        {activeTab === 'productReviews' && (
    <div className="productReviews">
    <div className="review">
      <div className="client">
        <div className="left">
          <img src={avatar} alt="" className="frame-avatar" />
          <div className="name-rate">
            <p>Phong Phạm Ngọc</p>
            <div className="star">
              <span style={{ fontSize: '14px' }} className="fa fa-star checked"></span>
              <span style={{ fontSize: '14px' }} className="fa fa-star checked"></span>
              <span style={{ fontSize: '14px' }} className="fa fa-star checked"></span>
              <span style={{ fontSize: '14px' }} className="fa fa-star"></span>
              <span style={{ fontSize: '14px' }} className="fa fa-star"></span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="time">18:58 18/11/2023</div>
        </div>
      </div>
      <div className="comment">
        <p>Shop đóng gói cẩn thận, giao hàng nhanh. Sản phẩm đúng hình mô tả và kiểm tra hàng chính hãng. Hãng bảo hành 5 năm nên khá yên tâm sử dụng.</p>
      </div>
    </div>
            </div>
        )}
        </div>
        <div class="same-product">
        <div class="title">Sản Phẩm Tương Tự</div>
        <div class="row-product">
            <a href="" id="redirect-product">
                <div class="product">
                    <img src={img5} alt="" />
                    <h5 class="name-product">Máy Đo Đường Huyết OGCare</h5>
                    <div class="price">
                        <p class="origin-price">110.000đ</p>
                        <p class="offcial-price">99.000đ</p>
                    </div>
                    <div class="star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </a>
            <a href="" id="redirect-product">
                <div class="product">
                    <img src={img5} alt="" />
                    <h5 class="name-product">Máy Đo Đường Huyết OGCare</h5>
                    <div class="price">
                        <p class="origin-price">110.000đ</p>
                        <p class="offcial-price">99.000đ</p>
                    </div>
                    <div class="star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </a>
            <a href="" id="redirect-product">
                <div class="product">
                    <img src={img5} alt="" />
                    <h5 class="name-product">Máy Đo Đường Huyết OGCare</h5>
                    <div class="price">
                        <p class="origin-price">110.000đ</p>
                        <p class="offcial-price">99.000đ</p>
                    </div>
                    <div class="star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </a>
        </div>
    </div>
  </>
    
  )
}

export default DetailProduct