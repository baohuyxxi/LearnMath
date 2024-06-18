import { data } from "jquery";
import axios from "../axios";

export const LessonAPI = {
  // create-lesson /chapter/663cac528cac1f4202cc04f4/lesson
  createLesson: async (data) => {
    const res = await axios.post(`/chapter/${data.chapterId}/lesson`, data);
    return res.data;
  },
  ///edit-lesson chapter/663c9bbac5e40783c04faa80/lesson/663c9fab66889e22651d51b8
  editLesson: async (data) => {
    const res = await axios.put(
      `/chapter/${data.chapterId}/lesson/${data.lessonId}`
    );
  },
  //delete-lesson /chapter/663c9bbac5e40783c04faa80/lesson/663c9fab66889e22651d51b8

  deleteLesson: async (chapterId) => {
    const res = await axios.delete(
      `/chapter/${data.chapterId}/lesson/${data.lessonId}`
    );
    return res.data;
  },
};

export default LessonAPI;
