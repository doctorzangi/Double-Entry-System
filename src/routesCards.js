import React from "react";

// cards Imports


// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Cards",
    layout: "/details",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
];
export default routes;