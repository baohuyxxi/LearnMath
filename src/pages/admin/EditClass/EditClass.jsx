// EditClass.jsx
import "./EditClass.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminAPI from "~/services/apis/AdminAPI";
import FramePage from "~/components/FramePage/FramePage";

export default function EditClass() {
  const { classId } = useParams();
  const [classData, setClassData] = useState({
    name: "",
    description: "",
    books: [{ name: "", description: "", type: "" }],
  });

  useEffect(() => {
    AdminAPI.getOneClass(classId).then((res) => {
      const { name, description, books } = res.data;
      setClassData({ name, description, books });
    });
  }, [classId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await AdminAPI.editClass({ classId, ...classData });
      console.log(res);
    } catch (error) {
      console.error("Error editing class:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassData({ ...classData, [name]: value });
  };

  const addTeacher = async (teacherId) => {
    try {
      const res = await AdminAPI.addTeacher({ classId, teacherId });
      console.log("Teacher added successfully:", res);
    } catch (error) {
      console.error("Error adding teacher:", error);
    }
  };

  const removeTeacher = async (teacherId) => {
    try {
      const res = await AdminAPI.removeTeacher({ classId, teacherId });
      console.log("Teacher removed successfully:", res);
    } catch (error) {
      console.error("Error removing teacher:", error);
    }
  };

  const addStudent = async (studentId) => {
    try {
      const res = await AdminAPI.addStudent({ classId, studentId });
      console.log("Student added successfully:", res);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const removeStudent = async (studentId) => {
    try {
      const res = await AdminAPI.removeStudent({ classId, studentId });
      console.log("Student removed successfully:", res);
    } catch (error) {
      console.error("Error removing student:", error);
    }
  };

  return (
    <FramePage>
      <div className="edit-class">
        <div className="edit-class__container">
          <h1>Chỉnh sửa lớp học</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="class-name">Tên lớp học</label>
              <input
                type="text"
                id="class-name"
                name="name"
                value={classData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="class-description">Mô tả</label>
              <textarea
                id="class-description"
                name="description"
                value={classData.description}
                onChange={handleChange}
              />
            </div>
            {classData.books.map((book, index) => (
              <div key={index} className="form-group">
                <label htmlFor={`book-name-${index}`}>Tên sách</label>
                <input
                  type="text"
                  id={`book-name-${index}`}
                  name={`books[${index}].name`}
                  value={book.name}
                  onChange={handleChange}
                />
                <label htmlFor={`book-description-${index}`}>Mô tả sách</label>
                <textarea
                  id={`book-description-${index}`}
                  name={`books[${index}].description`}
                  value={book.description}
                  onChange={handleChange}
                />
                <label htmlFor={`book-type-${index}`}>Loại sách</label>
                <input
                  type="text"
                  id={`book-type-${index}`}
                  name={`books[${index}].type`}
                  value={book.type}
                  onChange={handleChange}
                />
              </div>
            ))}
            <button type="submit">Cập nhật lớp học</button>
          </form>
          {/* <div className="edit-class__actions">
            <button onClick={() => addTeacher("teacherId")}>Thêm giáo viên</button>
            <button onClick={() => removeTeacher("teacherId")}>Xóa giáo viên</button>
            <button onClick={() => addStudent("studentId")}>Thêm sinh viên</button>
            <button onClick={() => removeStudent("studentId")}>Xóa sinh viên</button>
          </div> */}
        </div>
      </div>
    </FramePage>
  );
}
