import React from "react";

const AddCustomer = () => {
  return (
    <div>
      <h2 className="mx-3 text-2xl font-bold">Add Customer</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col m-2 shadow-lg rounded-2xl">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-slate-500 border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              placeholder="Hero Alom"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Phone
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="number"
              placeholder="017"
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              htmlFor="grid-Address"
            >
              TAKA PER MINUTE
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              type="number"
              placeholder="100"
            />
          </div>
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2"
              htmlFor="grid-Address"
            >
              Facebook Link
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
              Address
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              type="text"
              placeholder="Facebook"
            />
          </div>
        </div>
        <button
          className="focus:ring-2 w-64 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-white font-bold py-5 px-5 bg-green-600 rounded hover:bg-green-700 focus:outline-none"
          disabled
        >
          Create Customer
        </button>
      </div>
    </div>
  );
};

export default AddCustomer;
