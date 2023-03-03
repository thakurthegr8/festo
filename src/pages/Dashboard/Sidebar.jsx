import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ChartIcon from "@heroicons/react/24/solid/ChartBarSquareIcon";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import Col from "@/src/components/Layout/Col";
import Row from "@/src/components/Layout/Row";
import Typography from "@/src/components/General/Typography";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import MenuIcon from "@heroicons/react/24/outline/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import Button from "@/src/components/General/Button";

const sidebarLinks = [
  { name: "Dashboard", link: "/dashboard", Icon: ChartIcon },
  { name: "Events", link: "/dashboard/events", Icon: CalendarIcon },
  { name: "Groups", link: "/dashboard/groups", Icon: UserGroupIcon },
  { name: "Categories", link: "/dashboard/categories", Icon: UserGroupIcon },
  { name: "Locations", link: "/dashboard/locations", Icon: MapPinIcon },
];

const SidebarLink = (props) => {
  const { name, link, Icon, collapsed } = props;
  const router = useRouter();
  return (
    <Link href={link}>
      <Row
        styles={`items-center gap-2 hover:bg-gray-200 py-2 px-1 active:bg-gray-300 rounded-md transition ${
          router.pathname === link ? "text-primary" : ""
        } ${collapsed ? "justify-center" : ""}`}
      >
        <Icon className="w-6 h-6" />
        {!collapsed && <Typography>{name}</Typography>}
      </Row>
    </Link>
  );
};

const Sidebar = () => {
  const [open, toggle] = useState(false);

  return (
    <Row
      styles={`fixed md:relative z-10 top-0 md:bottom-0 transition items-start ${
        open ? "w-1/2 md:w-1/4 bottom-0" : "w-auto"
      }`}
    >
      {open && (
        <Col styles="bg-gray-100 p-4 gap-4 border-r border-gray-300 flex-1 h-full">
          <Row styles="justify-between">
            <Image src="/brand/Festo.svg" width={74} height={39} />
            <Button variant="btn-icon" onClick={() => toggle(false)}>
              <XMarkIcon className="w-6 h-6" />
            </Button>
          </Row>
          <Col styles="gap-2">
            {sidebarLinks.map((item, index) => (
              <SidebarLink key={index} {...item} collapsed={false} />
            ))}
          </Col>
        </Col>
      )}
      {!open && (
        <Col styles="md:bg-gray-100 md:h-full md:p-1 md:border-r">
          <Button variant="btn-icon m-2" onClick={() => toggle(true)}>
            <MenuIcon className="w-6 h-6" />
          </Button>
          <Col styles="hidden md:flex">
            {sidebarLinks.map((item, index) => (
              <SidebarLink key={index} {...item} collapsed={true} />
            ))}
          </Col>
        </Col>
      )}
    </Row>
  );
};

export default Sidebar;
