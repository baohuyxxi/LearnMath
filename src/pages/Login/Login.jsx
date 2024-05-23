import "./Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import FramePage from "~/components/FramePage/FramePage";
import Button from "~/components/Button/Button";
import Radio from "~/components/Radio/Radio";
import { roleLogin } from "~/models/roleLogin";
import AuthAPI from "~/services/apis/AuthAPI";

export default function Login() {
  const [dataLogin, setDataLogin] = useState({account: '', password: ''})
  const [selectRole, setSelectRole] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    AuthAPI.login(dataLogin).then((res) => {
      if (res.status === 200) {
        console.log("Đăng nhập thành công");
      } else {
        console.log("Đăng nhập thất bại");
      }
    });
  };

  const handleChange = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value
    })
  }
  return (
    <FramePage>
      <div id="login-form">
        <h1>Đăng nhập</h1>
        <div className="radios">
          {roleLogin.map((role) => (
            <div class="radio">
              <input
                id= {role.role}
                className="radio"
                type="radio"
                checked={role.role === selectRole}
                onClick={(e) => {
                  setSelectRole(role.role);
                }}
              />
              <label for={role.role} class="radio-label">
                {role.label}
              </label>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="account">Email/Username/SĐT:</label>
          <input type="text" id="account" name="account" value={dataLogin.account} onChange={e => handleChange(e)}/>
          <label htmlFor="password">Mật khẩu :</label>
          <input type="password" id="password" name="password"  value={dataLogin.password} onChange={e => handleChange(e)}/>
          <input type="submit" value="Đăng nhập" />
        </form>
      </div>
    </FramePage>
  );
}
