import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getGroups = async () => {
    try {
      const req = await axios.get("/api/groups");
      const res = await req.data;
      setGroups(res);
    } catch (error) {
      console.log(error);
      setError(error);
      toast("error", { type: "error" });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getGroups();
  }, []);
  return { groups, loading, error };
};

export default useGroups;
