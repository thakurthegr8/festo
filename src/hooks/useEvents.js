import React, { useEffect, useState } from "react";
import axios from "axios";

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const getEvents = async () => {
    try {
      const req = await axios.get("/api/events");
      const res = await req.data;
      setEvents(res);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };
  useEffect(() => {
    getEvents();
  }, []);
  return events;
};

export default useEvents;
