import React from "react";
import Button from "../../components/General/Button";
import Row from "../../components/Layout/Row";
import Image from "next/image";
import PlusIcon from "@heroicons/react/20/solid/PlusIcon";
import UserIcon from "@heroicons/react/20/solid/UserIcon";

const Navbar = (props) => {
  return (
    <Row styles={`w-full py-2 ${props.withoutLogo ? "justify-end":"justify-between"}`}>
      {!props.withoutLogo && (
        <Image src="/brand/Festo.svg" width={74} height={39} />
      )}
      <Row styles="gap-4">
        <Button variant="btn-icon">
          <PlusIcon className="w-6 h-6" />
        </Button>
        <Button variant="btn-icon">
          <UserIcon className="w-6 h-6" />
        </Button>
        <Button variant="rounded-full bg-gray-200">RT</Button>
      </Row>
    </Row>
  );
};

export default Navbar;
