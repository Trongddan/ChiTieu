import React, { memo, useEffect } from "react";
import AvatarPop from "../../../../component/avatarPop/avatarPop";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { RiCoinsLine } from "react-icons/ri";
import "./navi.scss";
import useUserHook from "../../../../hook/useUserHook";
import { useSelector } from "react-redux";

const Navigate = () => {
  const { user, loadingUser, getUserId } = useUserHook();
  const { isAddcoin } = useSelector((state) => state.appSlice);
  useEffect(() => {
    
    getUserId();
  }, [isAddcoin]);
  console.log(user);
  return (
    <div className="navigation">
      <div className="hideSideBarIcon">
        <MdOutlineArrowBackIos />
      </div>
      <span className="total-coin-title">Tổng tiền còn lại: </span>
      <strong>{user?.coin} đ</strong>
      <RiCoinsLine size={20} color="#FFD700" />

      <AvatarPop />
    </div>
  );
};

export default  memo(Navigate);
