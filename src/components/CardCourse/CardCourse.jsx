import "./CardCourse.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function CardCourse({  }) {
let course = {
    id: 1,
    title: "React",
    description: "React is a JavaScript library for building user interfaces.",
    image: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" />
}
  return (
    <div className="card-course col l-4 m-6 c-12">
      <div className="card-course__image">{course.image}</div>
      <div className="card-course__content">
        <h2 className="card-course__title">{course.title}</h2>
        <p className="card-course__description">{course.description}</p>
        <Button to={`/courses/${course.id}`}>
          View Course
        </Button>
      </div>
    </div>
  );
}
