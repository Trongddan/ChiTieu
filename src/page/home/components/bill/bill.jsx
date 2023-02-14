import React from "react";
import "./bill.scss";
const Bill = () => {
  return (
    <div className="bill-wrapper">
      <div className="form-bill">
        <div className="bill-title">Thêm mới đơn</div>
        <div className="form-bill-container">
          <div className="input-group">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Tiền điện :</label><br/>
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
        {/* <div className="type-money">
          <label htmlFor="">Thêm loại chi tiêu</label>
        <input type="text" placeholder="nhập loại chi tiêu" name="" id="" />
      </div> */}
      </div>
      <div className="list-history-bill">
        <div className="table-scroll">
          <table className="table text-center table-dark table-hover table-scroll">
            <thead>
              <th>STT</th>
              <th>Tên Hóa đơn</th>
              <th>Ngày in</th>
              <th>Thao tác</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hóa đơn 1</td>
                <td>03/01/2000</td>
                <td>xem chi tiết</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bill;
