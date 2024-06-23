import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminAPI from "~/services/apis/AdminAPI";
import PublicAPI from "~/services/apis/PublicAPI";
import FramePage from "~/components/FramePage/FramePage";
import { DataGrid } from "@mui/x-data-grid";
import "./EditClass.scss";

const EditClass = () => {
  const { classId } = useParams();
  const [classData, setClassData] = useState({
    name: "",
    description: "",
    books: [],
    teacherIds: [],
  });
  const [listTeachers, setListTeachers] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AdminAPI.getOneClass(classId);
        const { name, description, books, teacherIds } = response.data;
        const teacherData = await Promise.all(
          teacherIds.flatMap(async (id) => {
            const data = await PublicAPI.getTeacher(id);
            return data.data;
          })
        );
        setTeachers(teacherData);
        setClassData({ name, description, books, teacherIds });
      } catch (error) {}
      try {
        const listTeachers = await PublicAPI.getListTeacher();

        setListTeachers(listTeachers.data);
      } catch (error) {}
    };
    fetchData();
  }, [classId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AdminAPI.editClass({ classId, ...classData });
    } catch (error) {}
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassData({ ...classData, [name]: value });
  };

  const handleAddTeacher = async (teacherId) => {
    try {
      const response = await AdminAPI.addTeacher({ classId, teacherId }).then((res) => {
        console.log(res);
      })
    
    } catch (error) {}
  };

  const handleRemoveTeacher = async (teacherId) => {
    try {
      const response = await AdminAPI.removeTeacher({ classId, teacherId });

      setClassData((prevClassData) => ({
        ...prevClassData,
        teacherIds: prevClassData.teacherIds.filter((id) => id !== teacherId),
      }));
      setTeachers((prevTeachers) =>
        prevTeachers.filter((teacher) => teacher._id !== teacherId)
      );
      AdminAPI.removeTeacher({ classId, teacherId }).then((res) => {});
    } catch (error) {}
  };

  const handleEditCellChange = ({ id, field, value }) => {
    setClassData((prevClassData) => ({
      ...prevClassData,
      books: prevClassData.books.map((book, index) =>
        index === id ? { ...book, [field]: value } : book
      ),
    }));
  };

  const bookColumns = [
    { field: "name", headerName: "Tên sách", width: 200, editable: true },
    {
      field: "description",
      headerName: "Mô tả sách",
      width: 300,
      editable: true,
    },
    { field: "type", headerName: "Loại sách", width: 150, editable: true },
  ];

  const teacherColumns = [
    { field: "firstName", headerName: "Họ", width: 150 },
    { field: "lastName", headerName: "Tên", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Số điện thoại", width: 150 },
    {
      field: "actions",
      headerName: "Hành động",
      width: 150,
      renderCell: (params) => (
        <button
          onClick={() => handleRemoveTeacher(params.row._id)}
          className="edit-class__button"
        >
          Xóa
        </button>
      ),
    },
  ];

  return (
    <FramePage>
      <div className="edit-class">
        <div className="edit-class__container">
          <h1 className="edit-class__title">Chỉnh sửa lớp học</h1>
          <form onSubmit={handleSubmit} className="edit-class__form">
            <div className="edit-class__form-group">
              <label htmlFor="class-name" className="edit-class__label">
                Tên lớp học
              </label>
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
              <label htmlFor="class-description" className="edit-class__label">
                Mô tả
              </label>
              <textarea
                id="class-description"
                name="description"
                value={classData.description}
                onChange={handleChange}
                className="edit-class__textarea"
              />
            </div>

            <div className="edit-class__books">
              <h2 className="edit-class__subtitle">Danh sách sách</h2>
              <DataGrid
                rows={classData.books.map((book, index) => ({
                  id: index,
                  ...book,
                }))}
                columns={bookColumns}
                autoHeight
                disableSelectionOnClick
                onCellEditCommit={handleEditCellChange}
              />
            </div>

            <button type="submit" className="edit-class__button">
              Cập nhật lớp học
            </button>
          </form>

          <div className="edit-class__teachers">
            <h2 className="edit-class__subtitle">Danh sách giáo viên</h2>
            <DataGrid
              rows={teachers.map((teacher) => ({
                id: teacher._id,
                ...teacher,
              }))}
              columns={teacherColumns}
              autoHeight
              disableSelectionOnClick
            />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddTeacher(e.target.elements.teacherId.value);
              }}
              className="edit-class__form"
            >
              <select name="teacherId" className="edit-class__input">
                <option value="">Chọn giáo viên</option>
                {listTeachers.map((teacher) => (
                  <option key={teacher._id} value={teacher._id}>
                    {teacher.firstName} {teacher.lastName}
                  </option>
                ))}
              </select>
              <button type="submit" className="edit-class__button">
                Add Teacher
              </button>
            </form>
          </div>
        </div>
      </div>
    </FramePage>
  );
};

export default EditClass;
