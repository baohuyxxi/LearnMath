import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminAPI from "~/services/apis/AdminAPI";
import FramePage from "~/components/FramePage/FramePage";
import "./EditClass.scss";

const EditClass = () => {
  const { classId } = useParams();
  const [classData, setClassData] = useState({
    name: "",
    description: "",
    books: [{ name: "", description: "", type: "" }],
    teacherIds: [],
    studentIds: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AdminAPI.getOneClass(classId);
        const { name, description, books, teacherIds, studentIds } = response.data;
        setClassData({ name, description, books, teacherIds, studentIds });
      } catch (error) {
        console.error("Error fetching class data:", error);
      }
    };
    fetchData();
  }, [classId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AdminAPI.editClass({ classId, ...classData });
      console.log("Class updated successfully:", response);
    } catch (error) {
      console.error("Error updating class:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassData({ ...classData, [name]: value });
  };

  const handleAddTeacher = async (teacherId) => {
    try {
      const response = await AdminAPI.addTeacher({ classId, teacherId });
      console.log("Teacher added successfully:", response);
      // Optionally update the UI or state after adding a teacher
    } catch (error) {
      console.error("Error adding teacher:", error);
    }
  };

  const handleRemoveTeacher = async (teacherId) => {
    try {
      const response = await AdminAPI.removeTeacher({ classId, teacherId });
      console.log("Teacher removed successfully:", response);
      // Optionally update the UI or state after removing a teacher
    } catch (error) {
      console.error("Error removing teacher:", error);
    }
  };

  const handleAddStudent = async (studentId) => {
    try {
      const response = await AdminAPI.addStudent({ classId, studentId });
      console.log("Student added successfully:", response);
      // Optionally update the UI or state after adding a student
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleRemoveStudent = async (studentId) => {
    try {
      const response = await AdminAPI.removeStudent({ classId, studentId });
      console.log("Student removed successfully:", response);
      // Optionally update the UI or state after removing a student
    } catch (error) {
      console.error("Error removing student:", error);
    }
  };

  return (
    <FramePage>
      <div className="edit-class">
        <div className="edit-class__container">
          <h1 className="edit-class__title">Chỉnh sửa lớp học</h1>
          <form onSubmit={handleSubmit} className="edit-class__form">
            <div className="edit-class__form-group">
              <label htmlFor="class-name" className="edit-class__label">Tên lớp học</label>
              <input
                type="text"
                id="class-name"
                name="name"
                value={classData.name}
                onChange={handleChange}
                className="edit-class__input"
              />
            </div>
            <div className="edit-class__form-group">
              <label htmlFor="class-description" className="edit-class__label">Mô tả</label>
              <textarea
                id="class-description"
                name="description"
                value={classData.description}
                onChange={handleChange}
                className="edit-class__textarea"
              />
            </div>
            {classData.books.map((book, index) => (
              <div key={index} className="edit-class__book-group">
                <label htmlFor={`book-name-${index}`} className="edit-class__label">Tên sách</label>
                <input
                  type="text"
                  id={`book-name-${index}`}
                  name={`books[${index}].name`}
                  value={book.name}
                  onChange={handleChange}
                  className="edit-class__input"
                />
                <label htmlFor={`book-description-${index}`} className="edit-class__label">Mô tả sách</label>
                <textarea
                  id={`book-description-${index}`}
                  name={`books[${index}].description`}
                  value={book.description}
                  onChange={handleChange}
                  className="edit-class__textarea"
                />
                <label htmlFor={`book-type-${index}`} className="edit-class__label">Loại sách</label>
                <input
                  type="text"
                  id={`book-type-${index}`}
                  name={`books[${index}].type`}
                  value={book.type}
                  onChange={handleChange}
                  className="edit-class__input"
                />
              </div>
            ))}
            <button type="submit" className="edit-class__button">Cập nhật lớp học</button>
          </form>

          <div className="edit-class__teachers">
            <h2 className="edit-class__subtitle">Danh sách giáo viên</h2>
            <ul className="edit-class__list">
              {classData.teacherIds.map((teacherId) => (
                <li key={teacherId} className="edit-class__list-item">
                  Giáo viên ID: {teacherId}{" "}
                  <button onClick={() => handleRemoveTeacher(teacherId)} className="edit-class__button">Xóa</button>
                </li>
              ))}
            </ul>
            {/* Add Teacher Form */}
            <form onSubmit={(e) => { e.preventDefault(); addTeacher(e.target.value) }} className="edit-class__form">
              <input type="text" placeholder="Teacher ID" value={classData.teacherId}
                onChange={handleChange} className="edit-class__input" />
              <button type="submit" className="edit-class__button">Add Teacher</button>
            </form>
          </div>

          <div className="edit-class__students">
            <h2 className="edit-class__subtitle">Danh sách học sinh</h2>
            <ul className="edit-class__list">
              {classData.studentIds.map((studentId) => (
                <li key={studentId} className="edit-class__list-item">
                  Học sinh ID: {studentId}{" "}
                  <button onClick={() => handleRemoveStudent(studentId)} className="edit-class__button">Xóa</button>
                </li>
              ))}
            </ul>
            {/* Add Student Form */}
            <form onSubmit={(e) => { e.preventDefault(); addStudent(e.target.value) }} className="edit-class__form">
              <input type="text" placeholder="Student ID" value={classData.studentId}
                onChange={handleChange} className="edit-class__input" />
              <button type="submit" className="edit-class__button">Add Student</button>
            </form>
          </div>
        </div>
      </div>
    </FramePage>
  );
};

export default EditClass;
