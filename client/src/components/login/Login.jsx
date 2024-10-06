/* eslint-disable no-unused-vars */
import React from 'react'
import BannerLogin from '../../assets/jpg/jpg/banner-login.jpg'

const Login = () => {
  return (
    <div className='grid grid-cols-10'>
        <div className='col-span-4'>
            <img src={BannerLogin} alt='Banner-Login' className='w-full object-contain'/>
        </div>
        <div className='col-span-6 p-8'>
            <p className='text-base font-bold'>
              Welcome to Batdongsan.com.vn
            </p>
            <p className='text-2xl font-bold'>
              Đăng nhập để tiếp tục
            </p>
        </div>
    </div>
  )
}

export default Login