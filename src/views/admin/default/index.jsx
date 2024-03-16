import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { MdPersonAdd, MdBook, MdMoney, MdAdd, MdAdUnits } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdPersonAdd className="h-7 w-7" />}
          title={"Customers"}
          subtitle={"New Customers"}
          linkTo={"/admin/default/newcustomer"}
        />
        <Widget
          icon={<MdMoney className="h-6 w-6" />}
          title={"Loan Book"}
          subtitle={"Add Loan"}
          linkTo={"/admin/default/loans"}
        />
        <Widget
          icon={<MdAdUnits className="h-7 w-7" />}
          title={"Entry Book"}
          subtitle={"New Entry"}
          linkTo={"/admin/default/newtransaction"}
        />
        <Widget
          icon={<MdBook className="h-6 w-6" />}
          title={"Daily Book"}
          subtitle={"Today's Entries"}
          linkTo={"/admin/default/khata"}
        />
        <Widget
          icon={<MdBook className="h-7 w-7" />}
          title={"Monthly Books"}
          subtitle={"Monthly Entries"}
          linkTo={"/admin/default/khata"}
        />
        <Widget
          icon={<MdAdd className="h-6 w-6" />}
          title={"Bill Book"}
          subtitle={"New Bill"}
          linkTo={""}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
