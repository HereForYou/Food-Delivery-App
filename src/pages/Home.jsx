import { Link, useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Line from '../components/Line'

import Logo from '../components/Logo'
import Login from '../components/Buttons/FilledButton'
import SignUP from '../components/Buttons/BorderButton'
import up from '../../public/assets/img/up.png'


const Home = () => {
  const navigate = useNavigate()
  const handleLoginClick = () => {
    navigate("/login")
  }

  const handleSignUpClick = () => {
    navigate("/signup")
  }

  return (
    <>

      <div className="flex relative w-[100%] h-[auto]     ">
        <img className="w-[100%] h-[auto]" src={up} />
      </div>
      <div className=" h-[406px]   ">
        <div className=" " style={{ position: 'relative', bottom: '60px' }}>
          <Logo />
        </div>

        <div className="text-primary text-center">
          Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep
        </div>
        <div className="px-[34px] pt-[40px]">
          <Login onClick={handleLoginClick}> Login</Login>
        </div>
        <div className="px-[34px] pt-[40px]">
          <SignUP onClick={handleSignUpClick}> Create an Account </SignUP>
        </div>
        <div className="px-[34px] pt-[40px]">
          <Line />
        </div>
      </div>
    </>
  );
};

export default Home;
