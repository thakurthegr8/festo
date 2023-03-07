import React, { useState } from "react";

const useCreateEvent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const onSubmit = async (formData) => {
    try {
      formData = { ...formData, created_by: userId };
      setLoading(true);
      const req = await axios.post("/api/groups/create", formData);
      const res = await req.data;
      if (res) {
        setData(res);
        toast("success", { type: "success" });
      }
    } catch (error) {
      setError(error);
      toast("Error", { type: "error" });
    } finally {
      setLoading(false);
    }
  };
  return { data, onSubmit, loading, error };
};

export default useCreateEvent;
