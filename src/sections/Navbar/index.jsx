import React from "react";
import Button from "../../components/General/Button";
import Row from "../../components/Layout/Row";
import Image from "next/image";
import PlusIcon from "@heroicons/react/20/solid/PlusIcon";
import UserIcon from "@heroicons/react/20/solid/UserIcon";
import AccountAvatar from "@/src/elements/AccountAvatar";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <Row
      styles={`w-full py-2 z-10 items-center ${
        props.withoutLogo ? "justify-end" : "justify-between"
      }`}
    >
      {!props.withoutLogo && (
        <Link href="/events">
          <Image src="/brand/Festo.svg" width={74} height={39} />
        </Link>
      )}
      <Row styles="gap-4">
        <Link href="/dashboard/create-event">
          <Button variant="btn-icon">
            <PlusIcon className="w-5 h-5" />
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="btn-icon">
            <UserIcon className="w-5 h-5" />
          </Button>
        </Link>
        <AccountAvatar />
      </Row>
    </Row>
  );
};

export default Navbar;
