/* eslint-disable no-unused-vars */
import React from 'react';
import Logo2 from '../../assets/Logo2.png'

const LogoHeader = () => {
    return (
        <div className="flex items-center">
            <img
                src={Logo2} 
                alt="Batdongsan.com.vn"
                className="w-24 h-auto mr-4"
            />
            <div className="text">
                <h1 className="font-medium text-2xl text-red-600">Batdongsan</h1>
                <span className="font-medium text-red-600">.com.vn</span>
                <p className="font-medium text-black">by TranTheCong</p>
            </div>
        </div>
    );
};

export default LogoHeader
