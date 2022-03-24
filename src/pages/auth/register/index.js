import React, { useState } from 'react';
import './register.css';

const Register = () => {
  const [registerData, setRegiterData] = useState({
    name: '',
    birthday: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleRegisterData = (e) => {
    setRegiterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='register'>
      <div className='container'>
        <div className='register__box'>
          <div className='register__title'>
            <h3>Đăng ký</h3>
          </div>
          <div className='register__line'></div>
          <div className='register__main'>
            <div className='register__group'>
              <div className='register__input'>
                <span>Họ và tên:</span>
                <input type='text' name='name' value={registerData.name} onChange={handleRegisterData} />
              </div>
              <div className='register__input'>
                <span>Ngày sinh:</span>
                <input type='text' name='birthday' value={registerData.birthday} onChange={handleRegisterData} />
              </div>
              <div className='register__input'>
                <span>Giới tính:</span>
                <div className='register__radio'>
                  <input type='radio' name='gender' id='male' value='male' onChange={handleRegisterData} />
                  <label for='male'>Nam</label>
                  <input type='radio' name='gender' id='female' value='female' onChange={handleRegisterData} />
                  <label for='female'>Nữ</label>
                </div>
              </div>
              <div className='register__input'>
                <span>Email:</span>
                <input type='text' name='email' value={registerData.email} onChange={handleRegisterData} />
              </div>
              <div className='register__input'>
                <span>Mật khẩu:</span>
                <input type='password' name='password' value={registerData.password} onChange={handleRegisterData} />
              </div>
              <div className='register__input'>
                <span>Nhập lại mật khẩu:</span>
                <input
                  type='password'
                  name='confirmPassword'
                  value={registerData.confirmPassword}
                  onChange={handleRegisterData}
                />
              </div>
            </div>
          </div>
          <div className='register__line'></div>
          <div className='register__btn'>
            <button onClick={onSubmit}>Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
