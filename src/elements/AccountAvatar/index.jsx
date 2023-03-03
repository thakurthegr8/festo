import React, { Fragment, useContext, useEffect } from "react";
import { Menu } from "@headlessui/react";
import AuthContext from "@/src/contexts/Auth";
import Col from "@/src/components/Layout/Col";
import { signOut } from "next-auth/react";
import Row from "@/src/components/Layout/Row";
import Avatar from "@/src/components/General/Avatar";
import Typography from "@/src/components/General/Typography";

const AccountAvatar = () => {
  const ctx = useContext(AuthContext);
  const name = ctx.user.name;

  return (
    <>
      <Menu className="relative" as="div">
        <Menu.Button>
          <Avatar name={name} />
        </Menu.Button>
        <Menu.Items className="absolute w-72 right-0 bg-white border rounded-xl shadow-md flex-col">
          <Menu.Item>
            <Row styles="p-2 gap-2 items-center border-b">
              <Avatar name={name} />
              <Typography variant="text-heading font-bold">{name}</Typography>
            </Row>
          </Menu.Item>
          <Menu.Item
            as="button"
            onClick={() => {
              signOut({ callbackUrl: "/" });
            }}
            className="p-2 w-full text-left"
          >
            Sign Out
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
};

export default AccountAvatar;
