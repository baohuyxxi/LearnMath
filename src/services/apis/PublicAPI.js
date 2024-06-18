import axios from '../axios';

const PublicAPI = {
    getListTeacher: async () => {
        const res = await axios.get(`/auth/list-teacher`);
        return res.data;
    },
    //get-list-exam /exam/list/exams?type=EXAM
    getListExam: async () => {
        const res = await axios.get(`/exam/list/exams?type=EXAM`);
        return res.data;
    },
    //get-exam /exam/6669d35e2766e2ffef63acbd
    getExam: async (id) => {
        const res = await axios.get(`/exam/${id}`);
        return res.data;
    },

}

export default PublicAPI;
