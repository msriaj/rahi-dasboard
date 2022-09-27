import React from "react";
import AddCustomer from "../AddCustomer/AddCustomer";
import AddTask from "../AddTask/AddTask";
import CoustomerList from "../CustomerList/CoustomerList";
import InfoCard from "../InfoCard/InfoCard";
import TaskList from "../TaskList/TaskList";
const Sidebar = (props) => {
  const page = props.pageinfo;
  return (
    <div className="flex flex-col    h-screen px-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700 sticky top-0">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
        Menu
      </h2>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <a
            onClick={() => {
              page(<InfoCard />);
            }}
            className="flex items-center pl-2  py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200 my-5"
            href="#dashboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>

            <span className="mx-4 font-medium">Dashboard</span>
          </a>
          <a
            onClick={(e) => {
              page(<AddCustomer />);
            }}
            className="flex items-center pl-2 py-2 my-2 hover:bg-gray-100 text-gray-700   rounded-md   dark:text-gray-200"
            href="#dashboard"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
            <span className="mx-4 font-medium">Add User</span>
          </a>
          <a
            onClick={(e) => {
              page(<AddTask />);
            }}
            className="flex items-center pl-2 py-2 my-2 hover:bg-gray-100 text-gray-700   rounded-md   dark:text-gray-200"
            href="#dashboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>

            <span className="mx-4 font-medium">Add Task</span>
          </a>
          <a
            onClick={(e) => {
              page(<CoustomerList />);
            }}
            className="flex items-center pl-2 py-2 my-2 hover:bg-gray-100 text-gray-700   rounded-md   dark:text-gray-200"
            href="#dashboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>

            <span className="mx-4 font-medium">User List</span>
          </a>
          <a
            onClick={(e) => {
              page(<TaskList />);
            }}
            className="flex items-center pl-2 py-2 my-2 hover:bg-gray-100 text-gray-700   rounded-md   dark:text-gray-200"
            href="#dashboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>

            <span className="mx-4 font-medium">Task List</span>
          </a>
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
