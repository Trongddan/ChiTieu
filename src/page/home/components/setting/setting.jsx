import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setThemePageFlag } from "../../../../redux/appSlice";
import { getThemePage, setThemePage } from "../../../../utils/storage";

import "./setting.scss";
const Setting = () => {
  const [theme, setTheme] = useState("");
  const dispatch = useDispatch();
  const dataTheme = [
    { name: "Noel", value: "noel" },
    { name: "Mặc định", value: "default" },
  ];
  const handleSetThemePage = (item) => {
    setThemePage(item.value);
    dispatch(setThemePageFlag());
    setTheme(item.value);
  };
  const themepage = getThemePage();
  return (
    <div className="setting-wrapper">
      <div className="title-setting">Chọn chủ đề</div>
      <ul className="list-setting">
        {dataTheme.map((item, index) => (
          <li key={index} className="list-setting-item">
            <input
              checked={themepage === item.value}
              onChange={() => handleSetThemePage(item)}
              type="radio"
              name="theme"
              id=""
              value={theme}
            />
            <label htmlFor="">{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Setting;
