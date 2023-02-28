import React, { useEffect, useState } from "react";
import axios from "axios";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const req = await axios.get("/api/categories");
      const res = await req.data;
      setCategories(res);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return categories;
};

export default useCategories;
