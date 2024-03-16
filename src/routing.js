import React from "react";
import NewCustomer from "views/admin/accounts/components/newcustomer";
import NewTransaction from "views/admin/accounts/components/newtransaction";
import Khata from "views/admin/default/components/khata";
import Loans from "views/admin/details/components/loans";

const routing = [
{
    name: "New Customer",
    layout: "/admin",
    path: "default/newcustomer",
    component: <NewCustomer />,
},
{
    name:  "Add Transaction",
    layout: "/admin",
    path: "default/newtransaction",
    component: <NewTransaction />,
},
{
    name:  "Loans",
    layout: "/admin",
    path: "default/loans",
    component: <Loans />,
},
{
    name:  "Khata",
    layout: "/admin",
    path: "default/khata",
    component: <Khata />,
},


];

export default routing;