import React, { useState } from "react";
import "./login.scss";
import { BsEyeSlashFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
const Login = () => {
  const [isFlag, setIsFlag] = useState(false);
  const [hidePass, setIsHidePass] = useState(false);
  const handleToRegister = () => {
    const loginForm = document.querySelector(".login-form");
    const navigate = document.querySelector(".navigate-title")
    const register = document.querySelector(".form");
    loginForm.style.transform =  "rotateY(180deg)";
    register.style.transform = "rotateY(-180deg)";
     navigate.style.transform = "rotateY(-180deg)";
    setIsFlag(true);
  };
  const handleToLogin = async () => {
    const navigate = document.querySelector(".navigate-title")
    const loginForm = document.querySelector(".login-form");
    const register = document.querySelector(".form");
    loginForm.style.transform = await "rotateY(0deg)";
    register.style.transform = await "rotateY(0deg)";
    navigate.style.transform = "rotateY(0deg)";
    setIsFlag(false);
  };
  const handleHidePassword = () => {
    const passInput = document.getElementById("password");
    const passInput2 = document.getElementById("password2");
    if (!hidePass) {
      passInput.type = "text";
      setIsHidePass(true);
      if (passInput2) {
        passInput2.type = "text";
      }
    } else {
      passInput.type = "password";
      if (passInput2) {
        passInput2.type = "password";
      }
      setIsHidePass(false);
    }
  };
  const LoginForm = (
    <>
      <div className="form">
        <div className="text-center text-white title">Đăng nhập</div>
        <div className="form-group">
          <label className="form-label text-white" htmlFor="">
            Tài khoản:
          </label>
          <input
            placeholder="Nhập tài khoản"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="form-label text-white" htmlFor="">
            Mật khẩu:
          </label>
          <input
            placeholder="Nhập mật khẩu"
            id="password"
            type="password"
            className="form-control"
          />

          <span onClick={handleHidePassword} className="hidePassword">
            {hidePass ? <BsEyeSlashFill /> : <AiFillEye />}
          </span>
        </div>
        <div className="text-center m-5">
          <button className="btn btn-danger">Đăng nhập</button>
        </div>
      </div>
      <div className="navigate-title text-white m-5">
        <span>Quên mật khẩu ?</span>
        <span onClick={handleToRegister}>Đăng ký</span>
      </div>
    </>
  );
  const regiterForm = (
    <>
      <div className="form">
        <div className="text-center text-white title">Đăng Ký</div>
        <div className="form-group">
          <label className="form-label text-white" htmlFor="">
            Tài khoản:
          </label>
          <input
            placeholder="Nhập tài khoản"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="form-label text-white" htmlFor="">
            Mật khẩu:
          </label>
          <input
            id="password"
            placeholder="Nhập mật khẩu"
            type="password"
            className="form-control"
          />
          <span onClick={handleHidePassword} className="hidePassword">
            {hidePass ? <BsEyeSlashFill /> : <AiFillEye />}
          </span>
        </div>
        <div className="form-group">
          <label className="form-label text-white" htmlFor="">
            Nhập lại mật khẩu:
          </label>
          <input
            id="password2"
            placeholder="Nhập lại mật khẩu"
            type="password"
            className="form-control"
          />
          <span onClick={handleHidePassword} className="hidePassword">
            {hidePass ? <BsEyeSlashFill /> : <AiFillEye />}
          </span>
        </div>
        <div className="text-center m-5">
          <button className="btn btn-danger">Đăng nhập</button>
        </div>
      </div>
      <div className="navigate-title text-white m-5">
        <span onClick={handleToLogin}>Đã có tài khoản ?</span>
        <span>Quên mật khẩu ?</span>
      </div>
    </>
  );
  return (
    <div className="login-wrapper">
      <div className="login-form ">{isFlag ? regiterForm : LoginForm}</div>
    </div>
  );
};

export default Login;
