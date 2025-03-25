import React, { useState, useEffect } from "react";
import { orchidService } from "../api/orchidService";
import OrchidsPresentation from "./OrchidsPresentation";

const OrchidsContainer = () => {
  const [orchids, setOrchids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrchids = async () => {
      try {
        const data = await orchidService.getAllOrchids();
        setOrchids(data);
      } catch (err) {
        setError('Không thể tải danh sách hoa lan');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrchids();
  }, []);

  if (loading) return <div className="loading">Đang tải...</div>;
  if (error) return <div className="error">{error}</div>;

  return <OrchidsPresentation orchids={orchids} />;
};

export default OrchidsContainer;
