// ClassDetails.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PublicAPI from "~/services/apis/PublicAPI";
import FramePage from "~/components/FramePage/FramePage";
import BookList from "~/components/BookList/BookList";
import TeacherList from "~/components/TeacherList/TeacherList";
import "./ClassDetails.scss"; // Updated SCSS file import

const ClassDetails = () => {
  const { classId } = useParams();
  const [classData, setClassData] = useState({
    name: "",
    description: "",
    books: [],
    teacherIds: [],
    image: "",
  });
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PublicAPI.getOneClass(classId);
        const { name, description, books, teacherIds, image } = response.data;
        const teacherData = await Promise.all(
          teacherIds.flatMap(async (id) => {
            const data = await PublicAPI.getTeacher(id);
            return data.data;
          })
        );
        setTeachers(teacherData);
        setClassData({ name, description, books, teacherIds, image });
      } catch (error) {
        console.error("Error fetching class details:", error);
      }
    };

    fetchData();
  }, [classId]);

  return (
    <FramePage>
      <div className="class-details">
        <div className="class-details__container">
          <h1 className="class-details__title">Thông tin chi tiết lớp học</h1>
          <form className="class-details__form">
            <div className="class-details__form-group">
              <label htmlFor="class-name" className="class-details__label">
                Tên lớp học
              </label>
              <p>{classData.name}</p>
            </div>
            <div className="class-details__form-group">
              <label
                htmlFor="class-description"
                className="class-details__label"
              >
                Mô tả
              </label>
              <p>{classData.description}</p>
            </div>
            <div className="class-details__form-group">
              <label htmlFor="class-image" className="class-details__label">
                Hình ảnh
              </label>
              <img
                src={classData.image}
                alt="Class"
                className="class-details__image-preview"
              />
            </div>
          </form>
          <BookList books={classData.books} />
       
        </div>
      </div>
    </FramePage>
  );
};

export default ClassDetails;
