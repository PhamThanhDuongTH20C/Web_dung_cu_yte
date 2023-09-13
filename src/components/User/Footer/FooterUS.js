import React from 'react';
import YT from './img/icon_social/youtube.png';
import ZL from './img/icon_social/zalo.png';
import FB from './img/icon_social/facebook.png';
import LG from './img/logo-footer.png'
import './footer.css'
const FooterUS = () => {
    return (
      <footer className="footer">
      <div className="col-1">
        <img src={LG} alt="" />
        <p className="text-1">Hệ thống phân phối dụng cụ y khoa chính hãng</p>
        <div className="branch">
          <p className="address">
            CN1: Số 164 Thành Thái, P.12, Quận 10, TP.Hồ Chí Minh
          </p>
          <p className="hint">(Gần viện tim TP.Hồ Chí Minh)</p>
          <p className="hotline">Hotline: 0933.875.008</p>
        </div>
        <div className="branch">
          <p className="address">
            CN2: 198 Tô Hiến Thành, P.15, Quận 10, TP.Hồ Chí Minh
          </p>
          <p className="hint">(Đầu chợ sỉ thuốc Sài Gòn)</p>
          <p className="hotline">Hotline: 0933.533.058</p>
        </div>
        <div className="branch">
          <p className="address">CN3: Số 1 Đoàn Hoàn Minh, P.6, TP.Bến Tre</p>
          <p className="hint">(Cạnh bệnh viện Minh Đức)</p>
          <p className="hotline">Hotline: 0933.363.531</p>
        </div>
      </div>
      <div className="col-1">
        <p className="text-2">Về chúng tôi</p>
        <div className="link">
          <a href="">Giới thiệu</a>
          <a href="">Hệ thống cửa hàng</a>
          <a href="">Giấy phép kinh doanh</a>
          <a href="">Chính sách bảo mật</a>
          <a href="">Chính sách đổi trả hàng</a>
        </div>
      </div>
      <div className="col-1">
        <p className="text-2">Danh mục</p>
        <div className="link">
          <a href="">Trang chủ</a>
          <a href="">Giới thiệu</a>
          <a href="">Sản phẩm</a>
          <a href="">Bản tin y tế</a>
          <a href="">Liên hệ giá sỉ</a>
        </div>
      </div>
      <div className="col-1">
        <p className="text-2">PKD</p>
        <div className="hotline">
          <p style={{ marginRight: '10px' }}>0907.533.288</p>
          <p>0938.478.918</p>
        </div>
        <div className="hotline">
          <p style={{ marginRight: '10px' }}>0933.206.198</p>
          <p>0903.603.198</p>
        </div>
        <p className="text-2">Kết nối với chúng tôi</p>
        <div className="icon-social">
          <a href="https://www.facebook.com/your-facebook-page-url">
            <img src={FB} alt="Facebook" />
          </a>
          <a href="https://zalo.me/your-zalo-id">
            <img src={ZL} alt="Zalo" />
          </a>
          <a href="https://www.youtube.com/your-youtube-channel">
            <img src={YT} alt="YouTube" />
          </a>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.9631609884674!2d106.66783294070213!3d10.779832768754062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eda79056eab%3A0xf051ed1857c6e1bd!2zcDE1LCAxOTggVMO0IEhp4bq_biBUaMOgbmgsIFBoxrDhu51uZyAxNSwgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1663819427374!5m2!1svi!2s"
        width="300"
        height="250"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </footer>
    )
}

export default FooterUS