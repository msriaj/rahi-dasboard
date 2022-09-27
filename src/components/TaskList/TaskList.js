import React from "react";

const TaskList = () => {
  return (
    <div className="p-3 mb-5 w-full">
      <div className="bg-white py-4 md:py-7 p-5 rounded-xl shadow-lg">
        <div className="sm:flex items-center justify-between">
          <div className="flex items-center">
            <a
              className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
              href="#oc"
            >
              <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                <p>All</p>
              </div>
            </a>
            <a
              className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              href="#oc"
            >
              <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>Done</p>
              </div>
            </a>
            <a
              className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              href="#oc"
            >
              <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>Pending</p>
              </div>
            </a>
          </div>
          <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
            <p className="text-sm font-medium leading-none text-white">
              Add Task
            </p>
          </button>
        </div>
        <div className="mt-7 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <tbody>
              <tr className="focus:outline-none h-16 border font-bold text-center bg-indigo-100 border-gray-100 rounded">
                <td className="">Task Title</td>
                <td className="pl-5"> Name</td>
                <td className="pl-2">Urgent Status</td>
                <td className="pl-5">Deadline</td>

                <td className="pl-5">Status</td>
                <td className="pl-4"> </td>
                <td className="pl-4"> Actions</td>
              </tr>
              <tr className="h-3"></tr>
              <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                <td className="">
                  <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">
                      Script TitleScript TitleScript{" "}
                    </p>
                  </div>
                </td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      Customer Name
                    </p>
                  </div>
                </td>
                <td className="pl-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                        stroke="#52525B"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <circle
                        cx="7.50004"
                        cy="7.49967"
                        r="1.66667"
                        stroke="#52525B"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <p className="text-sm leading-none text-red-600 ml-2">
                      Urgent
                    </p>
                  </div>
                </td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      04/07/2022
                    </p>
                  </div>
                </td>

                <td className="pl-5 text-center">
                  <button className="py-3 text-center px-3 text-sm focus:outline-none leading-none text-green-700 font-bold rounded">
                    Delivered
                  </button>
                </td>
                <td className="pl-4">
                  <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                    View
                  </button>
                </td>
                <td className="pl-4">
                  <button
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-white font-bold py-3 px-5 bg-gray-600 rounded hover:bg-gray-700 focus:outline-none"
                    disabled
                  >
                    Drive Link
                  </button>
                </td>
              </tr>
              <tr className="h-3"></tr>
              <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                <td className="">
                  <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">
                      Script TitleScript TitleScript{" "}
                    </p>
                  </div>
                </td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      Customer Name
                    </p>
                  </div>
                </td>
                <td className="pl-2"></td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      04/07/2022
                    </p>
                  </div>
                </td>

                <td className="pl-5 text-center">
                  <button className="py-3 text-center px-3 text-sm focus:outline-none leading-none text-green-700 font-bold rounded">
                    Delivered
                  </button>
                </td>
                <td className="pl-4">
                  <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                    View
                  </button>
                </td>
                <td className="pl-4">
                  <button
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-white font-bold py-3 px-5 bg-gray-600 rounded hover:bg-gray-700 focus:outline-none"
                    disabled
                  >
                    Drive Link
                  </button>
                </td>
              </tr>
              <tr className="h-3"></tr>
              <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                <td className="">
                  <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">
                      Script TitleScript TitleScript
                    </p>
                  </div>
                </td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      Customer Name
                    </p>
                  </div>
                </td>
                <td className="pl-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                        stroke="#52525B"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <circle
                        cx="7.50004"
                        cy="7.49967"
                        r="1.66667"
                        stroke="#52525B"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <p className="text-sm leading-none text-red-600 ml-2">
                      Urgent
                    </p>
                  </div>
                </td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      04/07/2022
                    </p>
                  </div>
                </td>

                <td className="pl-5 text-center">
                  <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 font-bold rounded">
                    Pending
                  </button>
                </td>
                <td className="pl-4">
                  <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                    View
                  </button>
                </td>
                <td className="pl-4">
                  <button
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-white font-bold py-3 px-5 bg-green-600 rounded hover:bg-green-700 focus:outline-none"
                    disabled
                  >
                    Complete
                  </button>
                </td>
              </tr>
              <tr className="h-3"></tr>
              <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                <td className="">
                  <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">
                      Script TitleScript TitleScript
                    </p>
                  </div>
                </td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      Customer Name
                    </p>
                  </div>
                </td>
                <td className="pl-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                        stroke="#52525B"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <circle
                        cx="7.50004"
                        cy="7.49967"
                        r="1.66667"
                        stroke="#52525B"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <p className="text-sm leading-none text-red-600 ml-2">
                      Urgent
                    </p>
                  </div>
                </td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      04/07/2022
                    </p>
                  </div>
                </td>

                <td className="pl-5 text-center">
                  <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 font-bold rounded">
                    Deadline Missed
                  </button>
                </td>
                <td className="pl-4">
                  <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                    View
                  </button>
                </td>
                <td className="pl-4">
                  <button
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-white font-bold py-3 px-5 bg-green-600 rounded hover:bg-green-700 focus:outline-none"
                    disabled
                  >
                    Complete
                  </button>
                </td>
              </tr>
              <tr className="h-3"></tr>
              <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                <td className="">
                  <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">
                      Script TitleScript TitleScript{" "}
                    </p>
                  </div>
                </td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      Customer Name
                    </p>
                  </div>
                </td>
                <td className="pl-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                        stroke="#52525B"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <circle
                        cx="7.50004"
                        cy="7.49967"
                        r="1.66667"
                        stroke="#52525B"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <p className="text-sm leading-none text-red-600 ml-2">
                      Urgent
                    </p>
                  </div>
                </td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      04/07/2022
                    </p>
                  </div>
                </td>

                <td className="pl-5 text-center">
                  <button className="py-3 text-center px-3 text-sm focus:outline-none leading-none text-green-700 font-bold rounded">
                    Delivered
                  </button>
                </td>
                <td className="pl-4">
                  <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                    View
                  </button>
                </td>
                <td className="pl-4">
                  <button
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-white font-bold py-3 px-5 bg-gray-600 rounded hover:bg-gray-700 focus:outline-none"
                    disabled
                  >
                    Drive Link
                  </button>
                </td>
              </tr>
              <tr className="h-3"></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
