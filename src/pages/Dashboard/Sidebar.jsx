import React from "react";
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

const sidebarLinks = [
  { name: "Dashboard", link: "/dashboard", Icon: ChartIcon },
  { name: "Events", link: "/dashboard/events", Icon: CalendarIcon },
  { name: "Groups", link: "/dashboard/groups", Icon: UserGroupIcon },
  { name: "Categories", link: "/dashboard/categories", Icon: UserGroupIcon },
  { name: "Locations", link: "/dashboard/locations", Icon: MapPinIcon },
];

const SidebarLink = (props) => {
  const { name, link, Icon } = props;
  const router = useRouter();
  return (
    <Link href={link}>
      <Row
        styles={`items-center gap-2 hover:bg-gray-200 py-2 px-1 active:bg-gray-300 rounded-md transition ${
          router.pathname === link ? "text-primary" : ""
        }`}
      >
        <Icon className="w-6 h-6" />
        <Typography>{name}</Typography>
      </Row>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <Col styles="bg-gray-100 p-4 gap-4 border-r border-gray-300">
      <Image src="/brand/Festo.svg" width={74} height={39} />
      <Col styles="gap-2">
        {sidebarLinks.map((item, index) => (
          <SidebarLink key={index} {...item} />
        ))}
      </Col>
    </Col>
  );
};

export default Sidebar;
