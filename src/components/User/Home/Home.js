
import './home.css'
import demo from './img/medical-icon.png'
import { Link } from 'react-router-dom'
import img1 from'./img/slides/1.jpg';
import img2 from'./img/slides/2.jpg';
import img3 from'./img/slides/3.jpg';
import img4 from'./img/slides/4.jpg';
import img5 from'./img/slides/5.jpg';
import img6 from'./img/slides/6.jpg';
import brand1 from "./img/brand_icon/omron.png" 
import brand2 from "./img/brand_icon/microlife.png"
import brand3 from"./img/brand_icon/beurer.png"
import nextImage from './img/next.png';
import previous from './img/previous.png';
import React, { useState } from 'react';
import ship1 from "./img/phone.png"
import ship2 from "./img/like.png"
import ship3 from "./img/box.png"
import ship4 from "./img/new-arrivals.png"
import cansuckhoeImage from './img/cansuckhoe.png';
import denhongngoaiImage from './img/denhongngoai.png';
import ytechuyendungImage from './img/ytechuyendung.png';
import ytegiadinhImage from './img/ytegiadinh.png';
import voykhoaImage from './img/voykhoa.png';
import dungucuvatlytrilieuImage from './img/dungucuvatlytrilieu.png';
import dodungmevabeImage from './img/dodungmevabe.png';
import dungcusatkhuanImage from './img/dungcusatkhuan.png';
import maytrothinhImage from './img/maytrothinh.png';
import maytaohutoxiImage from './img/maytaohutoxi.png';
import nhietkeImage from './img/nhietke.png';
import muihong from './img/mayxongmuihong.png';
import product from './img/product.png'
import xemthem from "./img/right-arrows.png"
import xelan from './img/product1.png'  
const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array of slide image URLs
    const slideImages = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
    ];

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slideImages.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1));
    }
  return (
<>
<div class="nav-guiders">
        <div class="nav-ul">
           <a href="" className="nav-li">
            <img
              src={demo}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
              alt=""
              className="icon-li"
            />
            <p className="nav-li-text">Y tế chuyên dụng</p>
          </a>
          <a href="" className="nav-li">
            <img
              src={demo}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
              alt=""
              className="icon-li"
            />
            <p className="nav-li-text">Y tế gia đình</p>
          </a>
          <a href="" className="nav-li">
            <img
              src={demo}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
              alt=""
              className="icon-li"
            />
            <p className="nav-li-text">Vớ y khoa - giãn tĩnh mạch</p>
          </a>
          <a href="" className="nav-li">
            <img
              src={demo}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
              alt=""
              className="icon-li"
            />
            <p className="nav-li-text">Dụng cụ vật lý trị liệu</p>
          </a>
          <a href="" className="nav-li">
            <img
              src={demo}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
              alt=""
              className="icon-li"
            />
            <p className="nav-li-text">Đồ dùng mẹ và bé</p>
          </a>
          <a href="" className="nav-li">
            <img
              src={demo}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
              alt=""
              className="icon-li"
            />
            <p className="nav-li-text">Dụng cụ sát khuẩn</p>
          </a>
          <a href="" className="nav-li">
            <img
              src={demo}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
              alt=""
              className="icon-li"
            />
            <p className="nav-li-text">Máy tạo oxi - hút đàm</p>
          </a>
          <a href="" className="nav-li">
            <img
              src={demo}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
              alt=""
              className="icon-li"
            />
            <p className="nav-li-text">Máy trợ thính</p>
          </a>
          <a href="" className="nav-li">
            <img
              src={demo}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
              alt=""
              className="icon-li"
            />
            <p className="nav-li-text">Xem tất cả</p>
          </a>
        </div>
           <div className="slides-image">
                {slideImages.map((image, index) => (
                    <a href="#" className={`redirect-image ${index === currentSlide ? 'active' : ''}`} key={index}>
                        <img src={image} alt="" className="image-slide" />
                    </a>
                ))}
                <div className="pre-image" id="pre-image" onClick={handlePreviousSlide}>
                    <img src={previous} alt="" style={{ width: '20px', height: '20px' }} />
                </div>
                <div className="next-image" id="next-image" onClick={handleNextSlide}>
                    <img src={nextImage} alt="" style={{ width: '20px', height: '20px' }} />
                </div>
                <div className="count-dot-images">
                    {slideImages.map((_, index) => (
                        <div className={`dot ${index === currentSlide ? 'active' : ''}`} key={index}></div>
                    ))}
                </div>
            </div>
            </div> 
            <div className="policies">
    <div className="policy">
        <div className="icon">
            <img src={ship4} alt="" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="text">
            <h4 className="header-text">Sản Phẩm Chính Hãng</h4>
            <p className="text-script">Đa dạng và chuyên sâu</p>
        </div>
    </div>
    <div className="policy">
        <div className="icon">
            <img src={ship3} alt="" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="text">
            <h4 className="header-text">Đổi Trả Trong 30 Ngày</h4>
            <p className="text-script">Kể từ ngày mua hàng</p>
        </div>
    </div>
    <div className="policy">
        <div className="icon">
            <img src={ship2} alt="" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="text">
            <h4 className="header-text">Cam Kết 100%</h4>
            <p className="text-script">Chất lượng sản phẩm</p>
        </div>
    </div>
    <div className="policy">
        <div className="icon">
            <img src={ship1} alt="" style={{ width: '50px', height: '50px' }} />
        </div>
        <div className="text">
            <h4 className="header-text">Tư Vấn Nhanh Chóng</h4>
            <p className="text-script">Tận tình chuyên nghiệp</p>
        </div>
    </div>

</div>
<div className="header-text-category">
    <p>Danh mục</p>
</div>
<div className="header-text-category">
    <h1>Danh mục nổi bật</h1>
</div>
<div className="grid-category">
<a href="">
        <div className="category">
          <img src={ytechuyendungImage} alt="" />
          <p className="text">Y tế chuyên dụng</p>
        </div>
      </a>
      <a href="">
        <div className="category">
          <img src={ytegiadinhImage} alt="" />
          <p className="text">Y tế gia đình</p>
        </div>
      </a>
      <a href="">
        <div className="category">
          <img src={voykhoaImage} alt="" />
          <p className="text">Vớ y khoa</p>
        </div>
      </a>
      <a href="">
        <div className="category">
          <img src={dungucuvatlytrilieuImage} alt="" />
          <p className="text">Dụng cụ vật lý trị liệu</p>
        </div>
      </a>
      <a href="">
        <div className="category">
          <img src={dodungmevabeImage} alt="" />
          <p className="text">Đồ dùng mẹ và bé</p>
        </div>
      </a>
      <a href="">
        <div className="category">
          <img src={dungcusatkhuanImage} alt="" />
          <p className="text">Dung dịch sát khuẩn</p>
        </div>
      </a>
      <a href="">
        <div className="category">
          <img src={maytrothinhImage} alt="" />
          <p className="text">Máy trợ thính</p>
        </div>
      </a>
      <a href="">
        <div className="category">
          <img src={maytaohutoxiImage} alt="" />
          <p className="text">Máy tạo oxi - hút đàm</p>
        </div>
      </a>
      <a href="">
        <div className="category">
          <img src={nhietkeImage} alt="" />
          <p className="text">Nhiệt kế</p>
        </div>
      </a>
      <a href="">
        <div className="category">
          <img src={muihong} alt="" />
          <p className="text">Máy xông mũi họng</p>
        </div>
      </a>
    <a href="">
        <div className="category">
          <img src={cansuckhoeImage} alt="" />
          <p className="text">Cân sức khỏe</p>
        </div>
      </a>
      <a href="">
        <div className="category">
          <img src={denhongngoaiImage} alt="" />
          <p className="text">Đèn hồng ngoại</p>
        </div>
      </a>
</div>

<div className="product-head-bar">
      <h3 className="header">SẢN PHẨM BÁN CHẠY | SẢN PHẨM MỚI | KHUYẾN MÃI</h3>
      <a href="" className="redirect">
        Xem tất cả
        <img
          src={xemthem}
          alt=""
          style={{ width: '30px', height: '30px' }}
        />
      </a>
    </div>
    <div className="row-product">
      {/* Product 1 */}
      <a href="#" id="redirect-product">
        <div className="product">
          <img src={product} alt="" />
          <h5 className="name-product">Máy Đo Đường Huyết OGCare</h5>
          <div className="price">
            <p className="origin-price">110.000đ</p>
            <p className="offcial-price">99.000đ</p>
          </div>
          <div className="star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
      </a>
{/* Product 1 */}
<a href="#" id="redirect-product">
        <div className="product">
          <img src={product} alt="" />
          <h5 className="name-product">Máy Đo Đường Huyết OGCare</h5>
          <div className="price">
            <p className="origin-price">110.000đ</p>
            <p className="offcial-price">99.000đ</p>
          </div>
          <div className="star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
      </a>{/* Product 1 */}
      <a href="#" id="redirect-product">
        <div className="product">
          <img src={product} alt="" />
          <h5 className="name-product">Máy Đo Đường Huyết OGCare</h5>
          <div className="price">
            <p className="origin-price">110.000đ</p>
            <p className="offcial-price">99.000đ</p>
          </div>
          <div className="star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
      </a>{/* Product 1 */}
      <a href="#" id="redirect-product">
        <div className="product">
          <img src={product} alt="" />
          <h5 className="name-product">Máy Đo Đường Huyết OGCare</h5>
          <div className="price">
            <p className="origin-price">110.000đ</p>
            <p className="offcial-price">99.000đ</p>
          </div>
          <div className="star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
      </a>{/* Product 1 */}
      <a href="#" id="redirect-product">
        <div className="product">
          <img src={product} alt="" />
          <h5 className="name-product">Máy Đo Đường Huyết OGCare</h5>
          <div className="price">
            <p className="origin-price">110.000đ</p>
            <p className="offcial-price">99.000đ</p>
          </div>
          <div className="star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
      </a>
      

      {/* Continue adding more products here */}
    </div>
    <div className="header-text-category" style={{ color: '#1351dc', marginTop: '50px' }}>
        <p>SẢN PHẨM</p>
      </div>

      {/* Header Text - Gợi ý hôm nay */}
      <div className="header-text-category">
        <h1 style={{ color: 'black' }}>Gợi ý hôm nay</h1>
      </div>

      {/* Product Head Bar */}
      <div className="product-head-bar" style={{ justifyContent: 'end' }}>
        <a href="" className="redirect">
          Xem tất cả
          <img
            src={xemthem}
            alt=""
            style={{ width: '30px', height: '30px' }}
          />
        </a>
      </div>

      {/* Product Row */}
      <div className="row-product">
      {/* Product 1 */}
      <a href="#" id="redirect-product">
        <div className="product">
          <img src={product} alt="" />
          <h5 className="name-product">Máy Đo Đường Huyết OGCare</h5>
          <div className="price">
            <p className="origin-price">110.000đ</p>
            <p className="offcial-price">99.000đ</p>
          </div>
          <div className="star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
      </a>
{/* Product 1 */}
  <a href="#" id="redirect-product">
        <div className="product">
          <img src={product} alt="" />
          <h5 className="name-product">Máy Đo Đường Huyết OGCare</h5>
          <div className="price">
            <p className="origin-price">110.000đ</p>
            <p className="offcial-price">99.000đ</p>
          </div>
          <div className="star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
      </a>{/* Product 1 */}
      <a href="#" id="redirect-product">
        <div className="product">
          <img src={product} alt="" />
          <h5 className="name-product">Máy Đo Đường Huyết OGCare</h5>
          <div className="price">
            <p className="origin-price">110.000đ</p>
            <p className="offcial-price">99.000đ</p>
          </div>
          <div className="star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
      </a>{/* Product 1 */}
      <a href="#" id="redirect-product">
        <div className="product">
          <img src={product} alt="" />
          <h5 className="name-product">Máy Đo Đường Huyết OGCare</h5>
          <div className="price">
            <p className="origin-price">110.000đ</p>
            <p className="offcial-price">99.000đ</p>
          </div>
          <div className="star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
      </a>{/* Product 1 */}
      <a href="#" id="redirect-product">
        <div className="product">
          <img src={product} alt="" />
          <h5 className="name-product">Máy Đo Đường Huyết OGCare</h5>
          <div className="price">
            <p className="origin-price">110.000đ</p>
            <p className="offcial-price">99.000đ</p>
          </div>
          <div className="star">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
      </a>
      

      {/* Continue adding more products here */}
    </div>

    <div className="row-for-sale">
      <div className="best-product">
        <p className="header">Giảm giá sốc</p>
        <div className="column-product">
          <a href="">
            <div className="product1">
              <img src={xelan} alt="" />
              <div className="column-infor">
                <p className="name-product">Giường Y Tế Điện Tách Xe Lăn</p>
                <div className="price">
                  <p className="origin-price">110.000đ</p>
                  <p className="offcial-price">99.000đ</p>
                </div>
                <div className="star">
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs"></span>
                  <span className="fa fa-star fa-2xs"></span>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="product1">
              <img src={xelan} alt="" />
              <div className="column-infor">
                <p className="name-product">Giường Y Tế Điện Tách Xe Lăn</p>
                <div className="price">
                  <p className="origin-price">110.000đ</p>
                  <p className="offcial-price">99.000đ</p>
                </div>
                <div className="star">
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs"></span>
                  <span className="fa fa-star fa-2xs"></span>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="product1">
              <img src={xelan} alt="" />
              <div className="column-infor">
                <p className="name-product">Giường Y Tế Điện Tách Xe Lăn</p>
                <div className="price">
                  <p className="origin-price">110.000đ</p>
                  <p className="offcial-price">99.000đ</p>
                </div>
                <div className="star">
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs"></span>
                  <span className="fa fa-star fa-2xs"></span>
                </div>
              </div>
            </div>
          </a>
          {/* Repeat similar product entries */}
        </div>
      </div>

      <div className="best-product">
        <p className="header">Top bán chạy</p>
        <div className="column-product">
          <a href="">
            <div className="product1">
              <img src={xelan} alt="" />
              <div className="column-infor">
                <p className="name-product">Giường Y Tế Điện Tách Xe Lăn</p>
                <div className="price">
                  <p className="origin-price">110.000đ</p>
                  <p className="offcial-price">99.000đ</p>
                </div>
                <div className="star">
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs"></span>
                  <span className="fa fa-star fa-2xs"></span>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="product1">
              <img src={xelan} alt="" />
              <div className="column-infor">
                <p className="name-product">Giường Y Tế Điện Tách Xe Lăn</p>
                <div className="price">
                  <p className="origin-price">110.000đ</p>
                  <p className="offcial-price">99.000đ</p>
                </div>
                <div className="star">
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs"></span>
                  <span className="fa fa-star fa-2xs"></span>
                </div>
              </div>
            </div>
          </a><a href="">
            <div className="product1">
              <img src={xelan} alt="" />
              <div className="column-infor">
                <p className="name-product">Giường Y Tế Điện Tách Xe Lăn</p>
                <div className="price">
                  <p className="origin-price">110.000đ</p>
                  <p className="offcial-price">99.000đ</p>
                </div>
                <div className="star">
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs"></span>
                  <span className="fa fa-star fa-2xs"></span>
                </div>
              </div>
            </div>
          </a>
          {/* Repeat similar product entries */}
        </div>
      </div>

      <div className="best-product">
        <p className="header">Sản phẩm được yêu thích nhất</p>
        <div className="column-product">
          <a href="">
            <div className="product1">
              <img src={xelan} alt="" />
              <div className="column-infor">
                <p className="name-product">Giường Y Tế Điện Tách Xe Lăn</p>
                <div className="price">
                  <p className="origin-price">110.000đ</p>
                  <p className="offcial-price">99.000đ</p>
                </div>
                <div className="star">
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs"></span>
                  <span className="fa fa-star fa-2xs"></span>
                </div>
              </div>
            </div>
          </a><a href="">
            <div className="product1">
              <img src={xelan} alt="" />
              <div className="column-infor">
                <p className="name-product">Giường Y Tế Điện Tách Xe Lăn</p>
                <div className="price">
                  <p className="origin-price">110.000đ</p>
                  <p className="offcial-price">99.000đ</p>
                </div>
                <div className="star">
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs"></span>
                  <span className="fa fa-star fa-2xs"></span>
                </div>
              </div>
            </div>
          </a><a href="">
            <div className="product1">
              <img src={xelan} alt="" />
              <div className="column-infor">
                <p className="name-product">Giường Y Tế Điện Tách Xe Lăn</p>
                <div className="price">
                  <p className="origin-price">110.000đ</p>
                  <p className="offcial-price">99.000đ</p>
                </div>
                <div className="star">
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs checked"></span>
                  <span className="fa fa-star fa-2xs"></span>
                  <span className="fa fa-star fa-2xs"></span>
                </div>
              </div>
            </div>
          </a>
          {/* Repeat similar product entries */}
        </div>
      </div>
    </div>


    <div class="trailer">
        <h1>HỆ THỐNG PHÂN PHỐI DỤNG CỤ Y TẾ CHÍNH HÃNG</h1>
        <h1>LƯU GIA</h1>
    </div>
    <div class="header-brain">Thương hiệu nổi bật</div>
    <div class="brain-icon">
        <img src={brand1} alt="" class="img-brand-icon" />
        <img src={brand2} alt="" class="img-brand-icon" />
        <img src={brand3} alt="" class="img-brand-icon" />
        <img src={brand1} alt="" class="img-brand-icon" />
    </div>
</>

  )
}


export default Home 