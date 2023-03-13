import React from "react";
import Events from "@/src/pages/Events";
import withSession from "@/src/middlewares/withSession";

const Home = (props) => {
  return <Events events={props.events} />;
};

export default Home;

Home.auth = false;

export const getServerSideProps = withSession(async (ctx) => {
  const { url } = ctx.req;
  const rearrange = (events) => {
    if (!events) return [];
    const set = new Set();
    events.forEach((item) => set.add(item.type.name));
    const setList = Array.from(set);
    const arrangedEvents = setList.map((item) => {
      const obj = { title: item, events: [] };
      obj.events = events.filter((event) => event.type.name === item);
      return obj;
    });
    return arrangedEvents;
  };
  try {
    const req = await fetch(`${url}/api/events`);
    const res = await req.json();
    if (res.length === 0) {
      return { props: { events: [] } };
    }
    const events = rearrange(res);
    return { props: { events } };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
});
