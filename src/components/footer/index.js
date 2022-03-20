import React from 'react';
import logo from '../../assets/logo.webp';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__logo'>
          <img src={logo} alt='' />
        </div>
        <div className='footer__container'>
          <div className='footer__box1'>
            <p>
              TIENTHOBOOK<b>Hộ Kinh Doanh nhà sách Tiến Thọ </b>GPKD số 01G8019354 do UBND Quận Cầu Giấy Cấp ngày
              04/12/2019
            </p>
            <p>Địa chỉ: CS5: Cơ sở 5 : 50 Nguyễn Thị Lưu - T.P Bắc Giang - Hotline: 0948.555.050</p>
            <p>Địa chỉ: CS6 : 282a Lương Ngọc Quyến - Thái Nguyên - 0906.233.282</p>
          </div>
          <div className='footer__box2'>
            <h3 className='footer__title'>Thông tin liên hệ</h3>
            <ul className='footer__list'>
              <li>
                <span>Địa chỉ:</span> CS1: 828 Đường Láng – Láng Thượng – Hà Nội - 094.1234.828
              </li>
              <li>
                <span>Địa chỉ:</span> CS2: 36 Xuân Thủy – Cầu Giấy – Hà Nội - 0934.173.636
              </li>
              <li>
                <span>Địa chỉ:</span> CS3: 424 Nguyễn Trãi - Thanh Xuân - Hà Nội - 0966.688.424
              </li>
              <li>
                <span>Địa chỉ:</span> CS4: 697 Giải Phóng - Hoàng Mai - Hà Nội - 0933.695.697
              </li>
              <li>
                <span>Email:</span> tienthobook@gmail.com
              </li>
              <li>
                <span>Điện thoại:</span> 094.1234.828
              </li>
              <li>
                <span>Zalo:</span> 0934.173.636
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
