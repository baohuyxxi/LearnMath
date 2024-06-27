import axios from "../axios";

const BookAPI = {
  getBook: async (bookId) => {
    const res = await axios.get(`/class/book/${bookId}`);
    return res.data;
  },
  addBook: async (data) => {
    const res = await axios.post(`/class/${data.classId}/book`, data);
    return res.data;
  },
  editBook: async (data) => {
    const res = await axios.put(`/class/${data.classId}/book/${data.bookId}`, data);
    return res.data;
  },
};

export default BookAPI;
