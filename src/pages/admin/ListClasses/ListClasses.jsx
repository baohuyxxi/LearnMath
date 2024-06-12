// ListClasses.jsx
import "./ListClasses.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AdminAPI from "~/services/apis/AdminAPI";
import FramePage from "~/components/FramePage/FramePage";

export default function ListClasses() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    AdminAPI.getListClass().then((res) => {
      setClasses(res.data);
    });
  }, []);

  return (
    <FramePage>
      <div className="list-classes">
        <div className="list-classes__container">
          <h1>Danh sách lớp học</h1>
          <ul>
            {classes.map((classItem) => (
              <li key={classItem._id}>
                <h2>{classItem.name}</h2>
                <p>{classItem.description}</p>
                {/* Edit button */}
                <Link to={`/admin/edit-class/${classItem._id}`} className="edit-button">
                  Chỉnh sửa
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FramePage>
  );
}
