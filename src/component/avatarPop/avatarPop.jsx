import React from 'react'
import {Dropdown} from "antd"
import "./avatarpop.scss"
const AvatarPop = () => {
  const items = [
    {
      key: '1',
      label: (
        <span>Thông tin tài khoản</span>
      ),
    },    {
      key: '2',
      label: (
        <span>Ngân sách chi tiêu</span>
      ),
    },    {
      key: '3',
      label: (
        <span>Đăng xuất</span>
      ),
    },    

  
  ];
  return (
    <div className="avatarPop">
    <Dropdown  menu={{ items }} placement="bottomLeft">
    <span>Xin chào Danken</span>
  </Dropdown>
  </div>
  )
}

export default AvatarPop