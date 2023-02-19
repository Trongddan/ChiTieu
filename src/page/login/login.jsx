import React, { useState } from "react";
import "./login.scss";
import { BsEyeSlashFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { loginUser, registerUser } from "../../services/userService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../../utils/storage";
const Login = () => {
  const [isFlag, setIsFlag] = useState(false);
  const [hidePass, setIsHidePass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const handleToRegister = () => {
    const loginForm = document.querySelector(".login-form");
    const navigate = document.querySelector(".navigate-title");
    const register = document.querySelector(".form");
    loginForm.style.transform = "rotateY(180deg)";
    register.style.transform = "rotateY(-180deg)";
    navigate.style.transform = "rotateY(-180deg)";
    setIsFlag(true);
    setUsername("");
    setPassword("");
    setConfirmPass("");
  };
  const handleToLogin = async () => {
    const navigate = document.querySelector(".navigate-title");
    const loginForm = document.querySelector(".login-form");
    const register = document.querySelector(".form");
    loginForm.style.transform = await "rotateY(0deg)";
    register.style.transform = await "rotateY(0deg)";
    navigate.style.transform = "rotateY(0deg)";
    setIsFlag(false);
    setUsername("");
    setPassword("");
    setConfirmPass("");
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
  const handleRegister = () => {
    const param = {
      username: username,
      password: password,
    };
    registerUser(
      param,
      (res) => {
        toast(res.data.mess, { type: "success" });
      },
      (err) => {
        toast("đăng ký thất bại", { type: "error" });
      }
    );
  };
  const handleLogin = () => {
    const param = {
      username: username,
      password: password,
    };
    loginUser(
      param,
      async (res) => {
        await toast(res.data.mess, { type: "success" });
        setUserInfo(res.data);
        navigate("/home/chart");
      },
      (err) => {
        console.log(err);
        toast(err.response.data.mess, { type: "error" });
      }
    );
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <button
            onClick={handleLogin}
            disabled={!username || !password}
            className="btn btn-danger"
          >
            Đăng nhập
          </button>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            id="password2"
            placeholder="Nhập lại mật khẩu"
            type="password"
            className="form-control"
          />
          <p className="warning-text text-danger">
            {password !== confirmPass && confirmPass
              ? "Mật khẩu không đồng bộ"
              : ""}
          </p>
          <span onClick={handleHidePassword} className="hidePassword">
            {hidePass ? <BsEyeSlashFill /> : <AiFillEye />}
          </span>
        </div>
        <div className="text-center m-5">
          <button
            onClick={handleRegister}
            disabled={
              password !== confirmPass || !password || !username || !confirmPass
                ? "disabled"
                : ""
            }
            className="btn btn-danger"
          >
            Đăng ký
          </button>
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
