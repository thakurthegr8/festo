import React, { Fragment, useContext, useEffect } from "react";
import { Menu } from "@headlessui/react";
import AuthContext from "@/src/contexts/Auth";
import LogOutIcon from "@heroicons/react/20/solid/ArrowLeftOnRectangleIcon";
import TicketIcon from "@heroicons/react/24/outline/TicketIcon";
import { signOut } from "next-auth/react";
import Row from "@/src/components/Layout/Row";
import Avatar from "@/src/components/General/Avatar";
import Typography from "@/src/components/General/Typography";
import Link from "next/link";

const AccountAvatar = () => {
  const ctx = useContext(AuthContext);
  const name = ctx.user.name;
  console.log(ctx);
  return (
    <>
      <Menu className="relative z-10" as="div">
        <Menu.Button>
          <Avatar name={name} />
        </Menu.Button>
        <Menu.Items className="absolute w-72 right-0 bg-white border rounded-xl shadow-md flex-col overflow-hidden">
          <Menu.Item>
            <Row styles="p-2 gap-2 items-center border-b">
              <Avatar name={name} />
              <Typography variant="text-heading font-bold">{name}</Typography>
            </Row>
          </Menu.Item>
          <Menu.Item as="div" className="p-2 w-full hover:bg-gray-100 ">
            <Link
              href="/tickets"
              className="gap-2 text-left flex flex-row items-center"
            >
              <TicketIcon className="w-6 h-6" />
              <Typography variant="text-caption text-sm">Tickets</Typography>
            </Link>
          </Menu.Item>
          <Menu.Item
            as="div"
            onClick={() => {
              signOut({ callbackUrl: "/" });
            }}
            className="p-2 w-full gap-2 text-left flex flex-row cursor-pointer items-center hover:bg-gray-100 "
          >
            <LogOutIcon className="w-6 h-6" />
            <Typography variant="text-caption text-sm">Sign Out</Typography>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
};

export default AccountAvatar;
