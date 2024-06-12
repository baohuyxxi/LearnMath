import "./CreateClass.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminAPI from "~/services/apis/AdminAPI";
import FramePage from "~/components/FramePage/FramePage";
export default function CreateClass() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("class-name").value;
    const description = document.getElementById("class-description").value;
    AdminAPI.createClass({ name, description }).then((res) => {
      console.log(res);
    });
  };
  return (
    <FramePage>
      <div className="create-class">
        <div className="create-class__container">
          <h1>Tạo lớp học</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="class-name">Tên lớp học</label>
              <input type="text" id="class-name" />
            </div>
            <div className="form-group">
              <label htmlFor="class-code">Mã lớp học</label>
              <input type="text" id="class-code" />
            </div>
            <div className="form-group">
              <label htmlFor="class-description">Mô tả</label>
              <textarea id="class-description" />
            </div>
            <button type="submit">Tạo lớp học</button>
          </form>
        </div>
      </div>
    </FramePage>
  );
}

