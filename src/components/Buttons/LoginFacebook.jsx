import React from "react";
import facebook from '../../../public/assets/img/facebook-letter-logo.png'

const LoginFacebook = (props) => {
    const { children } = props
  return (
    <div>
      <button className="text-xs text-white bg-facebook w-[315px] rounded-full h-14 py-[16px] items-center px-[76px]">
        <img className="mr-8 w-2 inline" src={facebook}/>Login with Facebook
      </button>
    </div>
  );
};

export default LoginFacebook;
