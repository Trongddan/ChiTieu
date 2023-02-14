import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AvatarPop from "../../component/avatarPop/avatarPop";
import SideBar from "../../component/sideBar/sideBar";
import {MdOutlineArrowBackIos} from "react-icons/md"
import "./home.scss";
const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if(location.pathname==="/"){
      navigate("/home/chart");
    }


  }, []);
  return (
    <div className="homePage-wrapper">
      <SideBar />
      <div className="main-content">
        <div className="navigation">
          <div className="hideSideBarIcon">
          <MdOutlineArrowBackIos/>
          </div>
          
          <AvatarPop />
        </div>
        <div className="home-content-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
