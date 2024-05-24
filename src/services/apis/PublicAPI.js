import axios from '../axios';

const PublicAPI = {
    getListTeacher: async () => {
        const res = await axios.get(`/auth/list-teacher`);
        return res.data;
    }

}

export default PublicAPI;
