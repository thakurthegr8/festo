import React, { useEffect, useState } from "react";
import axios from "axios";

const useLocations = () => {
  const [locations, setLocations] = useState([]);
  const getLocations = async () => {
    try {
      const req = await axios.get("/api/locations");
      const res = await req.data;
      setLocations(res);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };
  useEffect(() => {
    getLocations();
  }, []);
  return locations;
};

export default useLocations;
