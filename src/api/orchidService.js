import axios from 'axios';

const API_URL = 'https://67e21fb397fc65f53534ad0b.mockapi.io/OrchidsManagement';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const orchidService = {
    // Lấy tất cả hoa lan
    getAllOrchids: async () => {
        try {
            const response = await api.get('/');
            return response.data;
        } catch (error) {
            console.error('Error fetching orchids:', error);
            throw error;
        }
    },

    // Lấy chi tiết một hoa lan
    getOrchidById: async (id) => {
        try {
            const response = await api.get(`/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching orchid:', error);
            throw error;
        }
    },

    // Thêm hoa lan mới
    createOrchid: async (orchidData) => {
        try {
            const response = await api.post('/', orchidData);
            return response.data;
        } catch (error) {
            console.error('Error creating orchid:', error);
            throw error;
        }
    },

    // Cập nhật hoa lan
    updateOrchid: async (id, orchidData) => {
        try {
            const response = await api.put(`/${id}`, orchidData);
            return response.data;
        } catch (error) {
            console.error('Error updating orchid:', error);
            throw error;
        }
    },

    // Xóa hoa lan
    deleteOrchid: async (id) => {
        try {
            const response = await api.delete(`/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting orchid:', error);
            throw error;
        }
    }
}; 