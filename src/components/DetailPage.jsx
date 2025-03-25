import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { orchidService } from '../api/orchidService';
import { useAuth } from '../context/AuthContext';
import { motion } from "framer-motion";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [orchid, setOrchid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    isSpecial: false,
    isNatural: false,
    image: '',
    color: '',
    numberOfLike: '',
    origin: '',
    category: '',
    clip: ''
  });

  useEffect(() => {
    const fetchOrchid = async () => {
      try {
        const data = await orchidService.getOrchidById(id);
        setOrchid(data);
        setFormData(data);
      } catch (err) {
        setError('Không thể tải thông tin hoa lan');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrchid();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await orchidService.updateOrchid(id, formData);
      setIsEditing(false);
      const updatedData = await orchidService.getOrchidById(id);
      setOrchid(updatedData);
    } catch (err) {
      setError('Không thể cập nhật thông tin hoa lan');
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa hoa lan này?')) {
      try {
        await orchidService.deleteOrchid(id);
        navigate('/shop');
      } catch (err) {
        setError('Không thể xóa hoa lan');
        console.error(err);
      }
    }
  };

  if (loading) return <div className="loading">Đang tải...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!orchid) return <div>Không tìm thấy hoa lan</div>;

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isEditing ? (
              <form onSubmit={handleSubmit} className="p-6">
                <h2 className="text-2xl font-bold mb-6">Chỉnh sửa thông tin hoa lan</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label>Tên:</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="form-group">
                    <label>Đánh giá:</label>
                    <input
                      type="number"
                      name="rating"
                      value={formData.rating}
                      onChange={handleInputChange}
                      step="0.1"
                      min="0"
                      max="5"
                      required
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="form-group">
                    <label>Màu sắc:</label>
                    <input
                      type="text"
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="form-group">
                    <label>Xuất xứ:</label>
                    <input
                      type="text"
                      name="origin"
                      value={formData.origin}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="form-group">
                    <label>Loại:</label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="form-group">
                    <label>URL hình ảnh:</label>
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="form-group">
                    <label>Video clip:</label>
                    <input
                      type="url"
                      name="clip"
                      value={formData.clip}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="form-group col-span-2">
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="isSpecial"
                          checked={formData.isSpecial}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        Đặc biệt
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="isNatural"
                          checked={formData.isNatural}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        Tự nhiên
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Lưu
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Hủy
                  </button>
                </div>
              </form>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6">
                  <img
                    src={orchid.image}
                    alt={orchid.name}
                    className="w-full h-96 object-cover rounded-lg shadow-md"
                  />
                  {orchid.clip && (
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold mb-4">Video giới thiệu</h3>
                      <div className="aspect-w-16 aspect-h-9">
                        <iframe
                          src={orchid.clip}
                          title={orchid.name}
                          className="w-full h-64 rounded-lg"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 bg-gray-50">
                  <h1 className="text-3xl font-bold mb-4">{orchid.name}</h1>
                  <div className="space-y-4">
                    <p className="flex items-center">
                      <span className="font-semibold mr-2">Đánh giá:</span>
                      {orchid.rating} ⭐
                    </p>
                    <p className="flex items-center">
                      <span className="font-semibold mr-2">Lượt thích:</span>
                      {orchid.numberOfLike} ❤️
                    </p>
                    <p>
                      <span className="font-semibold">Màu sắc:</span> {orchid.color}
                    </p>
                    <p>
                      <span className="font-semibold">Xuất xứ:</span> {orchid.origin}
                    </p>
                    <p>
                      <span className="font-semibold">Loại:</span> {orchid.category}
                    </p>
                    <div className="flex gap-2">
                      {orchid.isSpecial && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                          Đặc biệt
                        </span>
                      )}
                      {orchid.isNatural && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          Tự nhiên
                        </span>
                      )}
                    </div>
                    {user && (
                      <div className="flex gap-4 mt-6">
                        <button
                          onClick={() => setIsEditing(true)}
                          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Chỉnh sửa
                        </button>
                        <button
                          onClick={handleDelete}
                          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Xóa
                        </button>
                      </div>
                    )}
                    <Link
                      to="/shop"
                      className="inline-block mt-6 px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                      ← Quay lại
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
