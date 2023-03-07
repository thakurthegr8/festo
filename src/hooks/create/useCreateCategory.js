import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const api = "/api/categories/create";

const useCreateCategory = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (formData) => {
    try {
      formData = { ...formData, name: formData.name.toLowerCase() };
      setLoading(true);
      const req = await axios.post(api, formData);
      const res = await req.data;
      if (res) {
        setData(res);
        toast("success", { type: "success" });
      }
    } catch (error) {
      setError(error);
      toast("error", { type: "error" });
    } finally {
      setLoading(false);
    }
  };
  return { onSubmit, data, loading, error };
};

export default useCreateCategory;
