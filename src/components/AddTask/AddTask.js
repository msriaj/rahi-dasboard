import React from "react";

const AddTask = () => {
  return (
    <div>
      <h2 className="mx-3 text-2xl font-bold">Add Task</h2>
      <div class="bg-white   px-8 pt-6 pb-8 mb-4 flex flex-col m-2 shadow-lg rounded-2xl">
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Customer Name
            </label>
            <input
              class="appearance-none block w-full bg-grey-lighter text-slate-500 border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div class="md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Deadline
            </label>
            <input
              class="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="date"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-full px-3">
            <label
              class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              for="grid-Address"
            >
              Script Title
            </label>
            <input
              class="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              type="text"
              placeholder="Facebook"
            />
          </div>
        </div>

        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-full px-3">
            <label
              class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              for="grid-Address"
            >
              Script
            </label>
            <textarea
              class="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              placeholder="Script Details"
            />
          </div>
        </div>

        <div class="-mx-3 md:flex mb-6 font-bold">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Dureation
            </label>
            <input
              class="appearance-none block w-full bg-grey-lighter text-slate-500 border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="time"
              placeholder="Minitue"
            />
          </div>
          <div class="md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Unit Price
            </label>
            <input
              class="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="number"
              placeholder="50"
              disabled
            />
          </div>
          <div class="md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Total Price
            </label>
            <input
              class="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="number"
              placeholder="500"
              disabled
            />
          </div>
          <div class="md:w-1/2 px-3 flex items-center gap-2">
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3" className="text-slate-500">
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
