import React, { useContext } from "react";
import { Menu } from "@headlessui/react";
import AuthContext from "@/src/contexts/Auth";
import Col from "@/src/components/Layout/Col";
import { signOut } from "next-auth/react";

const AccountAvatar = () => {
  const ctx = useContext(AuthContext);
    const initial = ctx?.user?.user?.name
      .split(" ")
      .reduce((prev, curr) => prev + curr[0], "");
  console.log(ctx);
  return (
    <>
      <Menu className="relative" as="div">
        <Menu.Button>
          <Col styles="justify-center items-center bg-primary text-white font-bold aspect-square rounded-full px-3 cursor-pointer">
            {initial}
          </Col>
        </Menu.Button>
        <Menu.Items className="absolute w-72 right-0 border shadow-md">
          <Menu.Item as="button" onClick={()=>signOut("okta")}>Sign Out</Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
};

export default AccountAvatar;
