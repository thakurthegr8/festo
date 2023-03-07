import React, { useEffect, useState } from "react";
import axios from "axios";

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getEvents = async () => {
    try {
      const req = await axios.get("/api/events");
      const res = await req.data;
      setEvents(res);
    } catch (error) {
      setError(error);
      alert("error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);
  return { events, loading, error };
};

export default useEvents;
