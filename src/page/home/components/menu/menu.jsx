import React, { useEffect, useState } from "react";
import ListFood from "../../../../component/listFood/listFood";
import { Button, Modal } from "antd";
import "./menu.scss";

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageFood, setImageFood] = useState();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    file.url = URL.createObjectURL(file);
    setImageFood(file);
  };
  useEffect(() => {
    return () => {
      imageFood && URL.revokeObjectURL(imageFood.url);
    };
  }, [imageFood]);
  return (
    <div id="menu-wrapper" className="menu-wrapper">
      <div className="button-operator">
        <button onClick={showModal} className="create-meal btn btn-danger mr-3">
          Thêm món ăn
        </button>
        <Modal
          getContainer={()=>document.getElementById("menu-wrapper")}
          title="Thêm món ăn"
          cancelText="Hủy"
          okText="Thêm mới"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="form">
            <div className="form-group">
              <label htmlFor="name-food" className="form-label">
                Tên món ăn
              </label>
              <input id="name-food" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="description-food" className="form-label">
                Nguyên liệu món ăn
              </label>
              <input
                id="description-food"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description-food" className="form-label">
                Ảnh đại diện
              </label>
              <input
                onChange={(e) => handleSelectImage(e)}
                id="description-food"
                type="file"
                className="form-control"
              />
            </div>
            {imageFood  ? <img className="image-avt" src={imageFood.url} alt="" /> : ""}
          </div>
        </Modal>
        <button className="create-meal text-white btn btn-warning">
          Tạo bữa ăn{" "}
        </button>
      </div>
      <div className="list-mon-chinh">
        <ListFood title={"Danh sách món chính"} />
      </div>
      <div className="list-mon-phu">
        <ListFood title={"Danh sách món phụ"} />
      </div>
    </div>
  );
};

export default Menu;
