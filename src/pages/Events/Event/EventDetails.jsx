import React, { useContext, useEffect, useRef, useState } from "react";
import Typography from "@/src/components/General/Typography";
import CalendarIcon from "@heroicons/react/20/solid/CalendarIcon";
import ClockIcon from "@heroicons/react/24/outline/ClockIcon";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import Col from "@/src/components/Layout/Col";
import Row from "@/src/components/Layout/Row";
import Button from "@/src/components/General/Button";
import Loader from "@/src/elements/Loader";
import moment from "moment";
import Image from "next/image";
import axios from "axios";
import AuthContext from "@/src/contexts/Auth";
import { toast } from "react-toastify";
import { timeStringNormalization } from "@/utils/date";
import { loader } from "@/utils/image";
import { makePayment } from "@/src/services/payment";
import { useRouter } from "next/router";
import SignInButton from "@/src/elements/SignInButton";

const feeFormat = (number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    number
  );

const EventDetails = (props) => {
  const ctx = useContext(AuthContext);
  const email = ctx?.user.email;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [booked, setBooked] = useState(props.ticket !== null);
  const parentRef = useRef(null);
  console.log(ctx);
  const book = async () => {
    try {
      setLoading(true);
      const req = await axios.post("/api/events/book", {
        ticket_for_user: email,
        ticket_for_event: props.event._id,
      });
      const res = await req.data;
      if (res) {
        console.log(res);
        toast("success", { type: "success" });
        setBooked(true);
        router.push(`/tickets/${res._id}`);
      }
    } catch (error) {
      console.log(error);
      toast("error", { type: "error" });
    } finally {
      setLoading(false);
    }
  };
  const bookEvent = async () => {
    console.log(props.event?.fees);
    if (props.event?.fees !== undefined) {
      const params = {
        amount: props.event.fees,
        merchant: props.event.name,
        image: props.event.media_url,
      };
      try {
        await makePayment(params, (response) => {
          if (response) book();
        });
      } catch (error) {
        console.log(error);
      } finally {
        return;
      }
    } else {
      book();
    }
  };

  return (
    <Col styles="gap-4 md:flex-row">
      <Col
        styles="w-36 h-52 md:w-1/4 md:h-96 relative  justify-center items-center rounded-xl overflow-hidden"
        ref={parentRef}
      >
        <Image
          loader={loader}
          src={props.event.media_url}
          alt={props.event.name}
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL="/brand/loading-state.gif"
          priority
          fill
        />
      </Col>
      <Col styles="gap-4">
        <Typography variant="text-title font-black capitalize">
          {props.event.name}
        </Typography>
        <Typography variant="text-primary uppercase font-bold ">
          {props.event.type.name}
        </Typography>
        <Row styles="gap-8">
          <Row styles="gap-2">
            <CalendarIcon className="w-6 h-6 text-primary" />
            <Typography variant="font-bold">
              {moment(props.event.date).format("LL")}
            </Typography>
          </Row>
          <Row styles="gap-2">
            <ClockIcon className="w-6 h-6 text-primary" />
            <Typography variant="font-bold uppercase">
              {timeStringNormalization(props.event.time)}
            </Typography>
          </Row>
        </Row>
        <Row styles="gap-2">
          <MapPinIcon className="w-6 h-6 text-primary" />
          <Typography variant="font-bold capitalize">
            {props.event.location.name}
          </Typography>
        </Row>
        <Row>
          {ctx ? (
            <Button onClick={bookEvent} loading={loading} disabled={booked}>
              {booked
                ? "Booked"
                : props.event?.fees
                ? `Book now for ${feeFormat(props.event?.fees)}`
                : `Book now for free`}
            </Button>
          ) : (
            <SignInButton callbackUrl={router.asPath} />
          )}
        </Row>
      </Col>
    </Col>
  );
};

export default EventDetails;
