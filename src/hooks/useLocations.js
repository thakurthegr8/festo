import { useEffect, useState } from "react";
import axios from "axios";

const useLocations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getLocations = async () => {
    try {
      const req = await axios.get("/api/locations");
      const res = await req.data;
      setLocations(res);
    } catch (error) {
      console.log(error);
      setError(errorF);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getLocations();
  }, []);
  return { locations, loading, error };
};

export default useLocations;
