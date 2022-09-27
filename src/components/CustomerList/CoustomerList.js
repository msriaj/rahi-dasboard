import React from "react";

const CoustomerList = () => {
  return (
    <div className="p-3 mb-5 w-full">
      <h2 className="ml-2 mb-3 text-2xl text-slate-500  font-semibold">
        Customer List
      </h2>
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
                <p>Due </p>
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
                <td className="">Name</td>
                <td className="pl-5">Phone</td>
                <td className="pl-2">Taka Per Min</td>
                <td className="pl-5"> Total Min</td>

                <td className="pl-5">Task(Due Task)</td>
                <td className="pl-4"> Balance </td>
                <td className="pl-4"> Actions</td>
              </tr>
              <tr className="h-3"></tr>
              <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                <td className="">
                  <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">
                      Oga moga Public
                    </p>
                  </div>
                </td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      0177777777
                    </p>
                  </div>
                </td>
                <td className="pl-2">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-red-600 ml-2">
                      25 100min 30 sec
                    </p>
                  </div>
                </td>
                <td className="pl-5">
                  <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2">
                      100min 30 sec
                    </p>
                  </div>
                </td>

                <td className="pl-5 text-center">
                  <button className="py-3 text-center px-3 text-sm focus:outline-none leading-none   rounded">
                    100(<span className="text-red-900">5</span>)
                  </button>
                </td>
                <td className="pl-4">
                  <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                    1000 tk
                  </button>
                </td>
                <td className="pl-4">
                  <button
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-white font-bold py-3 px-5 bg-gray-600 rounded hover:bg-gray-700 focus:outline-none"
                    disabled
                  >
                    View
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

export default CoustomerList;
