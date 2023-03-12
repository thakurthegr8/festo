import React from "react";
import Col from "@/src/components/Layout/Col";
import Typography from "@/src/components/General/Typography";
import Row from "@/src/components/Layout/Row";
import Link from "next/link";
import Image from "next/image";
import { loader } from "@/utils/image";

const DummyLoader = () => {
  return <Col styles="w-52 h-72 bg-gray-400 rounded-md animate-pulse"></Col>;
};

const EventsByCategories = (props) => {
  console.log(props);
  return (
    <Col>
      <Typography variant="text-subtitle font-bold capitalize px-4 md:px-0">
        {props.title}
      </Typography>
      <Row styles="overflow-x-scroll gap-4 scroll-bar-none px-4 md:px-0">
        {props.events &&
          props.events.map((item, index) => (
            <Link href={`/events/${item._id}`} key={index}>
              <Col styles="h-52 w-36 md:h-72 md:w-44 rounded-md">
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
                <Typography variant="font-bold capitalize">
                  {item.name.length > 16 ? `${item.name.substring(0,16)}...` : item.name}
                </Typography>
              </Col>
            </Link>
          ))}
      </Row>
    </Col>
  );
};

export default EventsByCategories;
