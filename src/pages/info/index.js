import React from 'react';
import phoneIcon from '../../assets/icons/phone.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';
import { branch } from '../../mockData/product';
import './info.css';

const Info = () => {
  return (
    <div className='info'>
      <div className='container'>
        <h2 className='info__title'>Tiện ích - giải trí - kết nối</h2>
        <div className='info__text'>
          <p>
            Nhà sách Tiến Thọ là tổ hợp mua sắm - giải trí rộng hơn 2500m2, vừa là nơi để mọi người thỏa mãn nhu cầu của
            bản thân, vừa là không gian giúp giải phóng cảm xúc cá nhân.
          </p>
          <p>
            Dù bạn là ai, bất kể độ tuổi, bất kể mức thu nhập như thế nào, khi đến với nhà sách Tiến Thọ bạn đều có thể
            tìm thấy thứ mình cần; và đều có một nơi chốn để thư giãn, nghỉ ngơi, chia sẻ.
          </p>
          <p>
            Nhà sách Tiến Thọ dành ra một không gian đặc biệt cho trẻ em, với ước mong giúp các em được sống hồn nhiên,
            sinh động đúng với lứa tuổi, được khai mở tiềm năng sáng tạo, và trên hết, được kết nối với thế giới quanh
            mình.
          </p>
        </div>
        <div className='info__branch'>
          <span className='info__branch-title'>
            Tiến Thọ Books - Hệ thống nhà sách lớn nhất tại Miền Bắc với 6 cơ sở:
          </span>
          <div className='info__branch-box'>
            {branch.map((item, idx) => (
              <div className='info__branch-item' key={idx}>
                <span className='info__branch-address'>
                  <img src={rightArrow} alt='' className='w-5 h-5' />
                  <p>
                    Cơ sở {idx + 1}: {item.address}
                  </p>
                </span>
                <span className='info__branch-hotline'>
                  <img src={phoneIcon} alt='' className='w-5 h-5' />
                  <p>Hotline: {item.hotline}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
