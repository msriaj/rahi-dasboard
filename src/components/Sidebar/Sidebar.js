import React from "react";
import { AiOutlineUserAdd, AiOutlineDashboard } from "react-icons/ai";
import { MdAddTask } from "react-icons/md";
import { CgUserList } from "react-icons/cg";
import { VscTasklist } from "react-icons/vsc";
import { Link } from "react-router-dom";

const sidebarMenuObj = [
  {
    name: "Dashboard",
    icon: <AiOutlineDashboard size="20px" />,
    path: "/",
  },
  {
    name: "Add User",
    icon: <AiOutlineUserAdd size="20px" />,
    path: "/add-user",
  },
  {
    name: "Add Task",
    icon: <MdAddTask size="20px" />,
    path: "/add-task",
  },
  {
    name: "User List",
    icon: <CgUserList size="20px" />,
    path: "/customer-list",
  },
  {
    name: "Task List",
    icon: <VscTasklist size="20px" />,
    path: "/task-list",
  },
];

const Sidebar = (props) => {
  return (
    <div className="flex flex-col    h-screen px-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700 sticky top-0">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
        Menu
      </h2>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          {sidebarMenuObj.map((menu, idx) => {
            return (
              <Link
                to={menu.path}
                className="flex items-center pl-2  py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200 my-5"
                key={idx}
              >
                {menu.icon}
                <span className="mx-4 font-medium">{menu.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center px-4 -mx-2">
          <img
            className="object-cover mx-2 rounded-full h-9 w-9"
            src="https://avatars.githubusercontent.com/u/88916033?v=4"
            alt="avatar"
          />
          <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
            MD RIAJ
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
