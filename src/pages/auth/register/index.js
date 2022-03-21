import React, { useState } from 'react';

const Register = () => {
  const [data, setData] = useState({ email: '', password: '' });

  const handleChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='auth'>
      <div className='container'>
        <div className='auth__box'>
          <div className='auth__title'>
            <h3>Đăng ký</h3>
          </div>
          <div className='auth__line'></div>
          <div className='auth__group'>
            <div className='auth__input'>
              <span>Email:</span>
              <input type='text' name='email' value={data.email} onChange={handleChangeData} />
            </div>
            <div className='auth__input'>
              <span>Nhập lại mật khẩu:</span>
              <input type='password' name='password' value={data.password} onChange={handleChangeData} />
            </div>
            <div className='auth__input'>
              <span>Mật khẩu:</span>
              <input type='password' name='password' value={data.password} onChange={handleChangeData} />
            </div>
          </div>
          <div className='auth__line'></div>
          <div className='auth__btn'>
            <button onClick={onSubmit}>Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
