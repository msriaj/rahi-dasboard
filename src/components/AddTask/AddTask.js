import React from "react";

const AddTask = () => {
  return (
    <div>
      <h2 className="mx-3 text-2xl font-bold">Add Task</h2>
      <div className="bg-white   px-8 pt-6 pb-8 mb-4 flex flex-col m-2 shadow-lg rounded-2xl">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Customer Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-slate-500 border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Deadline
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="date"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              htmlFor="grid-Address"
            >
              Script Title
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              type="text"
              placeholder="Facebook"
            />
          </div>
        </div>

        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              htmlFor="grid-Address"
            >
              Script
            </label>
            <textarea
              className="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              placeholder="Script Details"
            />
          </div>
        </div>

        <div className="-mx-3 md:flex mb-6 font-bold">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Dureation
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-slate-500 border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="time"
              placeholder="Minitue"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Unit Price
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="number"
              placeholder="50"
              disabled
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Total Price
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="number"
              placeholder="500"
              disabled
            />
          </div>
          <div className="md:w-1/2 px-3 flex items-center gap-2">
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label htmlFor="vehicle3" className="text-slate-500">
              {" "}
              Urgent Delivery?
            </label>
          </div>
        </div>
        <button
          className="focus:ring-2 w-64 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-white font-bold py-5 px-5 bg-green-600 rounded hover:bg-green-700 focus:outline-none"
          disabled
        >
          Create Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
