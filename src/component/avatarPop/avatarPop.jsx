import React, { useState } from "react";
import { Dropdown, Modal } from "antd";
import "./avatarpop.scss";
import { getUser, setCoinLocal } from "../../utils/storage";
import { addCoin } from "../../services/userService";
import { toast } from "react-toastify";
import { setUserCoin } from "../../redux/appSlice";
import { useDispatch } from "react-redux";
const AvatarPop = () => {
  const dispatch = useDispatch();
  const username = getUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isfeeModal, setIsfeeModal] = useState(false);
  const [coin, setCoin] = useState();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showFeeModal = () => {
    setIsfeeModal(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    const params = {
      coin: coin,
    };
    addCoin(
      params,
      (res) => {
        toast(res.data.mess, { type: "success" });
        dispatch(setUserCoin());
      },
      (err) => {
        console.log(err);
        toast(err.response.data.mess, { type: "error" });
      }
    );
  };
  const handleAddFee=()=>{

  }
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCanceladdFee = () => {
    setIsfeeModal(false);
  };
  const items = [
    {
      key: "1",
      label: <span>Thông tin tài khoản</span>,
    },
    {
      key: "2",
      label: <span>Ngân sách chi tiêu</span>,
      onClick: () => {
        showModal();
      },
    },
    {
      key: "3",
      label: <span>Thêm loại tiền</span>,
      onClick: () => {
        showFeeModal();
      },
    },
    {
      key: "3",
      label: <span>Đăng xuất</span>,
    },
  ];
  return (
    <div className="avatarPop">
      <Dropdown menu={{ items }} placement="bottomLeft">
        <span>Xin chào {username}</span>
      </Dropdown>
      <Modal
        getContainer={() => document.getElementById("menu-wrapper")}
        title="Thêm ngân sách"
        cancelText="Hủy"
        okText="Thêm "
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="form">
          <div className="form-group">
            <label htmlFor="name-food" className="form-label">
              Ngân sách
            </label>
            <input
              value={coin}
              onChange={(e) => setCoin(e.target.value)}
              id="name-food"
              type="number"
              className="form-control"
            />
          </div>
        </div>
      </Modal>
      <Modal
        getContainer={() => document.getElementById("menu-wrapper")}
        title="Thêm loại tiền"
        cancelText="Hủy"
        okText="Thêm "
        open={isfeeModal}
        onOk={handleAddFee}
        onCancel={handleCanceladdFee}
      >
        <div className="form">
          <div className="form-group">
            <label htmlFor="name-food" className="form-label">
              Loại tiền
            </label>
            <input
              value={coin}
              onChange={(e) => setCoin(e.target.value)}
              id="name-food"
              type="text"
              className="form-control"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AvatarPop;
