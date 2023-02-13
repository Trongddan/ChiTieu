import React from "react";
import "./bill.scss";
const Bill = () => {
  return (
    <div className="bill-wrapper">
      <div className="form-bill">
      <div className="input-group">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Tiền điện :</label>
        <input
          className="inputvalue"
          type="number"
          min={0}
          name=""
          id=""
          placeholder="Nhập giá trị"
        />
        <span>vnđ</span>
      </div>
      <div className="input-group">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Tiền nhà :</label>
        <input
          className="inputvalue"
          type="number"
          min={0}
          name=""
          id=""
          placeholder="Nhập giá trị"
        />
        <span>vnđ</span>
      </div>
      <div className="input-group">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Tiền Thực phẩm :</label>
        <input
          className="inputvalue"
          type="number"
          min={0}
          name=""
          id=""
          placeholder="Nhập giá trị"
        />
        <span>vnđ</span>
      </div>
      <div className="button-add-bill">Thêm mới</div>
      </div>
    </div>
  );
};

export default Bill;
