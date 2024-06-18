import axios from "../axios";

export const TeacherAPI = {
  // create-class
  createExam: async (data) => {
    const res = await axios.post('/exam', data);
    return res.data;
  },

};

export default TeacherAPI;
