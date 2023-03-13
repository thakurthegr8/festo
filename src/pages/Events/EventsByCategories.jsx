import React from "react";
import Col from "@/src/components/Layout/Col";
import Typography from "@/src/components/General/Typography";
import Row from "@/src/components/Layout/Row";
import Link from "next/link";
import Image from "next/image";
import { loader } from "@/utils/image";


const EventsByCategories = (props) => {
  console.log(props);
  return (
    <Col>
      <Typography variant="text-heading font-bold capitalize px-4 md:px-0">
        {props.title}
      </Typography>
      <Row styles="overflow-x-scroll gap-4 scroll-bar-none px-4 md:px-0">
        {props.events &&
          props.events.map((item, index) => (
            <Link href={`/events/${item._id}`} key={index}>
              <Col styles="h-52 w-36 md:h-72 md:w-44 ">
                <Col styles="w-full h-full rounded-md overflow-hidden relative">
                  <Image
                    loader={loader}
                    src={item.media_url}
                    alt={item.name}
                    style={{objectFit:"cover"}}
                    placeholder="blur"
                    sizes="25vw"
                    responsive
                    blurDataURL={"/brand/Festo.svg"}
                    loading="eager"
                    fill
                  />
                </Col>
                <Typography variant="font-bold capitalize">
                  {item.name.length > 16
                    ? `${item.name.substring(0, 16)}...`
                    : item.name}
                </Typography>
              </Col>
            </Link>
          ))}
      </Row>
    </Col>
  );
};

export default EventsByCategories;
