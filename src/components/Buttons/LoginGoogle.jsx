import google from '/assets/img/auth/google-plus-logo.png'

const LoginGoogle = (props) => {
    // eslint-disable-next-line react/prop-types
    const { onClick } = props
  return (
    <div>
      <button className="text-xs text-white bg-[#dd4b3d] w-[100%] rounded-[999px] h-[56px] py-[16px] items-center text-center" onClick={() => onClick}>
        <img className="mr-8 w-2 inline" src={google}/>Login with Google
      </button>
    </div>
  );
};

export default LoginGoogle;
