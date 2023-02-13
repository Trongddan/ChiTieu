import React, { useState } from "react";
import "./sideBar.scss";
import { AiOutlineLineChart,AiOutlineSetting } from "react-icons/ai";
import { RiBillLine } from "react-icons/ri";
import { GiFruitBowl } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  const handleToview = (e) => {
    navigate(e.path);
    setActive(e.id)
  };
  const [active, setActive] = useState(0);
  const listTheme = [
    {
      name: "Thống kê chi tiêu",
      path: "/home/chart",
      id: 0,
      label:<AiOutlineLineChart/>
    },
    {
      name: "Lập đơn",
      path: "/home/bill",
      id: 1,
      label:<RiBillLine/>
    },
    {
      name: "Thực đơn",
      path: "/home/menu",
      id: 2,
      label:<GiFruitBowl/>
    },
    {
      name: "Cài đặt",
      path: "/home/setting",
      id: 3,
      label:<AiOutlineSetting/>
    },
  ];
  return (
    <div className="sideBar-wrapper">
      <div className="logo-title">
        <p>title</p>
      </div>
      <div className="sideBar-content">
        <ul className="list-theme">
          {listTheme.map((item, index) => (
            <li
              onClick={() => handleToview(item)}
              className={item.id === active?"theme-item active":"theme-item"}
            >
              {item.label} {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
