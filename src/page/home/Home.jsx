import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AvatarPop from "../../component/avatarPop/avatarPop";
import SideBar from "../../component/sideBar/sideBar";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { RiCoinsLine } from "react-icons/ri";
import "./home.scss";
import Navigate from "./components/navigation/navigate";
const Home = () => {

  return (
    <div className="homePage-wrapper">
      <SideBar />
      <div className="main-content">
<Navigate/>
        <div className="home-content-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
