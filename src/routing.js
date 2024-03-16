import React from "react";
import NewCustomer from "views/admin/accounts/components/newcustomer";
import NewTransaction from "views/admin/accounts/components/newtransaction";
import Loans from "views/admin/details/components/loans";

const routing = [
{
    name: "New Customer",
    layout: "/admin",
    path: "accounts/newcustomer",
    component: <NewCustomer />,
},
{
    name:  "Add Transaction",
    layout: "/admin",
    path: "accounts/newtransactions",
    component: <NewTransaction />,
},
{
    name:  "Loans",
    layout: "/admin",
    path: "details/loans",
    component: <Loans />,
},


];

export default routing;