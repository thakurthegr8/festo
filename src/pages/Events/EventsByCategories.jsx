import React from "react";
import Col from "@/src/components/Layout/Col";
import Typography from "@/src/components/General/Typography";
import Row from "@/src/components/Layout/Row";
import Link from "next/link";
import Image from "next/image";

const DummyLoader = () => {
  return <Col styles="w-52 h-72 bg-gray-400 rounded-md animate-pulse"></Col>;
};
const loader = ({ src }) => src;

const EventsByCategories = (props) => {
  console.log(props);
  return (
    <Col>
      <Typography variant="text-subtitle font-bold capitalize">
        {props.title}
      </Typography>
      <Row styles="overflow-x-scroll gap-4 scroll-bar-none">
        {props.events &&
          props.events.map((item, index) => (
            <Link href={`/events/${item._id}`} key={index}>
              <Col styles="h-72 w-52 rounded-md overflow-hidden">
                  <Image
                    loader={loader}
                    src={item.media_url}
                    height={750}
                    width={450}
                    className="rounded-md aspect-2/3 h-[calc(100%-40px)]"
                    style={{ objectFit: "cover" }}
                    alt={item.name}
                    loading="lazy"
                  />
                <Typography variant="font-bold flex-1">{item.name}</Typography>
              </Col>
            </Link>
          ))}
      </Row>
    </Col>
  );
};

export default EventsByCategories;
