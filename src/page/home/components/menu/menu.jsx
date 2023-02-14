import React from "react";
import ListFood from "../../../../component/listFood/listFood";
import "./menu.scss"
const Menu = () => {
  return (
    <div className="menu-wrapper">
     <div className="button-operator">
       <button className="create-meal btn btn-danger mr-3">Thêm món ăn</button>
       <button className="create-meal text-white btn btn-warning">Tạo bữa ăn </button>
     </div>
      <div className="list-mon-chinh">
        <ListFood title={"Danh sách món chính"}/>
      </div>
      <div className="list-mon-phu">
      <ListFood title={"Danh sách món phụ"}/>
      </div>
    </div>
  );
};

export default Menu;
