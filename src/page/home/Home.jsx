import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AvatarPop from "../../component/avatarPop/avatarPop";
import SideBar from "../../component/sideBar/sideBar";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { RiCoinsLine } from "react-icons/ri";
import "./home.scss";
import { getCoin } from "../../utils/storage";
const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const coin = getCoin();
  // useEffect(() => {
  //   if(location.pathname==="/"){
  //     navigate("/home/chart");
  //   }

  // }, []);
  return (
    <div className="homePage-wrapper">
      <SideBar />
      <div className="main-content">
        <div className="navigation">
          <div className="hideSideBarIcon">
            <MdOutlineArrowBackIos />
          </div>
          <span className="total-coin-title">Tổng tiền còn lại: </span>
          <strong>{coin} đ</strong>
          <RiCoinsLine size={20} color="#FFD700" />

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
