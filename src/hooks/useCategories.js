import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getCategories = async () => {
    try {
      const req = await axios.get("/api/categories");
      const res = await req.data;
      setCategories(res);
    } catch (error) {
      console.log(error);
      setError(error);
      toast("error", { type: "error" });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return { categories, loading, error };
};

export default useCategories;
