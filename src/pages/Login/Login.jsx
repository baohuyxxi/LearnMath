import "./Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import FramePage from "~/components/FramePage/FramePage";
import Button from "~/components/Button/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FramePage>
      <div id="login-form">
        <h1>Đăng nhập</h1>
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

