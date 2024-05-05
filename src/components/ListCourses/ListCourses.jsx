import "./ListCourses.scss";
import CardCourse from "../CardCourse/CardCourse";

export default function ListCourses() {
  return (
    <div className="list-courses row">
      <CardCourse />
      <CardCourse />
      <CardCourse />
      <CardCourse />
      <CardCourse />
      <CardCourse />
    </div>
  );
}
