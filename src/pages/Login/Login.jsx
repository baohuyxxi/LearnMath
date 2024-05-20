import "./Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import FramePage from "~/components/FramePage/FramePage";
import Button from "~/components/Button/Button";
import Radio from "~/components/Radio/Radio";
import { roleLogin } from "~/models/roleLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectRole, setSelectRole] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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

        <form>
          <label htmlFor="username">Email/Username/SĐT:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Mật khẩu :</label>
          <input type="password" id="password" name="password" />
          <input type="submit" value="Đăng nhập" />
        </form>
      </div>
    </FramePage>
  );
}
