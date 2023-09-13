import React from 'react';
import './category.css';
import img1 from '../../img/chevron.png'
import img2 from '../../img/home.png'
import product from '../../img/product.png'
import toi from '../../img/next.png'
import lui from '../../img/previous.png'
function Category() {
  return (
    <>
      <div className="classify">
        <img src={img2} alt="" className="home" />
        <img src={img1} alt="" className="left-arrow" />
        <a href="" className="category">Y tế gia đình</a>
        <img src={img1} alt="" className="left-arrow" />
        <a href="" className="category active">Máy Đo Huyết Áp</a>
      </div>
      <div className="header-filter">
        <div className="left">
          <div className="sort-by">
            <select name="địa chỉ" className="dropdown">
              <option>Ormon</option>
            </select>
          </div>
          <div className="sort-by">
            <select name="địa chỉ" className="dropdown">
              <option>2 triệu - Dưới 4 triệu</option>
            </select>
          </div>
        </div>
        <div className="right">
          <p>52 kết quả được tìm thấy</p>
        </div>
      </div>
      <div className="row-filter-product">
      <div className="right-product">
        <div className="row-product">
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
          </a>      <a href="#" id="redirect-product">
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
          </a>      <a href="#" id="redirect-product">
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
          </a>      <a href="#" id="redirect-product">
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
        </div>
        <div className="header-row">
          <a className="slide-page last-page">
            <img src={lui} alt="" />
          </a>
          <a href="#" className="slide-number active">1</a>
          <a href="#" className="slide-number">2</a>
          <a href="#" className="slide-number">3</a>
          <a href="#" className="slide-number">4</a>
          <a href="#" className="slide-number">5</a>
          <p className="three-dot">...</p>
          <a href="#" className="slide-number">21</a>
          <a href="#" className="slide-page">
            <img src={toi} alt="" />
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Category;
