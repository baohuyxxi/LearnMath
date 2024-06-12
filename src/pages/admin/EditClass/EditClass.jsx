// EditClass.jsx
import "./EditClass.scss";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AdminAPI from "~/services/apis/AdminAPI";
import FramePage from "~/components/FramePage/FramePage";

export default function EditClass() {
  const { classId } = useParams();
  const [classData, setClassData] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    AdminAPI.editClass({ classId, ...classData }).then((res) => {
      console.log(res);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassData({ ...classData, [name]: value });
  };

  return (
    <FramePage>
      <div className="edit-class">
        <div className="edit-class__container">
          <h1>Chỉnh sửa lớp học</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="class-name">Tên lớp học</label>
              <input type="text" id="class-name" name="name" value={classData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="class-description">Mô tả</label>
              <textarea id="class-description" name="description" value={classData.description} onChange={handleChange} />
            </div>
            <button type="submit">Cập nhật lớp học</button>
          </form>
        </div>
      </div>
    </FramePage>
  );
}
