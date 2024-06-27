// EditClass.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminAPI from "~/services/apis/AdminAPI";
import PublicAPI from "~/services/apis/PublicAPI";
import FramePage from "~/components/FramePage/FramePage";
import ClassForm from "~/components/ClassForm/ClassForm";
import BookList from "~/components/BookList/BookList";
import TeacherList from "~/components/TeacherList/TeacherList";
import "./EditClass.scss";

const EditClass = () => {
  const { classId } = useParams();
  const [classData, setClassData] = useState({
    name: "",
    description: "",
    books: [],
    teacherIds: [],
    image: "",
  });
  const [listTeachers, setListTeachers] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AdminAPI.getOneClass(classId);
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
        console.error(error);
      }
      try {
        const listTeachers = await PublicAPI.getListTeacher();
        setListTeachers(listTeachers.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [classId]);

  const handleAddTeacher = async (teacherId) => {
    try {
      await AdminAPI.addTeacher({ classId, teacherId });
      const teacherData = await PublicAPI.getTeacher(teacherId);
      setTeachers([...teachers, teacherData.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveTeacher = async (teacherId) => {
    try {
      await AdminAPI.removeTeacher({ classId, teacherId });
      setClassData((prevClassData) => ({
        ...prevClassData,
        teacherIds: prevClassData.teacherIds.filter((id) => id !== teacherId),
      }));
      setTeachers((prevTeachers) =>
        prevTeachers.filter((teacher) => teacher._id !== teacherId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditCellChange = ({ id, field, value }) => {
    navigate(`/edit-book/${classId}/${classData.books[id]._id}`);
  };

  return (
    <FramePage>
      <div className="edit-class">
        <div className="edit-class__container">
          <h1 className="edit-class__title">Chỉnh sửa lớp học</h1>
          <ClassForm
            classId={classId}
            classData={classData}
            setClassData={setClassData}
          />
          <BookList
            books={classData.books}
            handleEditCellChange={handleEditCellChange}
          />
          <TeacherList
            teachers={teachers}
            listTeachers={listTeachers}
            handleRemoveTeacher={handleRemoveTeacher}
            handleAddTeacher={handleAddTeacher}
          />
        </div>
      </div>
    </FramePage>
  );
};

export default EditClass;
