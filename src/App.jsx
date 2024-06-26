
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonShow from "./pages/ButtonShow";
import IconsRef from "./components/Icons/IconsRef";
 
import StatusBar from './components/Navbar/StatusBar'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";

import Land from "./pages/Land";
import Home from "./pages/Home";
import Menu from './pages/Menu'
import Offers from './pages/Offers'
import More from './pages/More'
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import OTP from "./pages/auth/OTP";
import NewPassword from "./pages/auth/NewPassword";
import Intro from "./pages/Intro/Intro";
const App = () => {
  return (
    <div className="container bg-gray-100 min-h-screen">
    <div className="container bg-white min-h-screen">
      <StatusBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/button" element={<ButtonShow />} />
          <Route path="/icon" element={<IconsRef />} />
          <Route path="/" element={<Home />} />
          <Route path="/Land" element={<Land />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/More" element={<More />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/intro" element={<Intro />} />
            {/* <Route path="/auth" element={<Authentication />} />
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update/:id" element={<UpdatePost />} /> */}
          </Routes>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </div>
    </div>
  );
};

export default App;
