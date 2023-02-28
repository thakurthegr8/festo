import axios from "axios";
import React, { useEffect, useState } from "react";

const useGroups = () => {
  const [groups, setGroups] = useState([]);
  const getGroups = async () => {
    try {
      const req = await axios.get("/api/groups");
      const res = await req.data;
      setGroups(res);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };
  useEffect(() => {
    getGroups();
  }, []);
  return groups;
};

export default useGroups;
