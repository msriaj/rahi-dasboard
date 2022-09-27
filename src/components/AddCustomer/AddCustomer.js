import React from 'react';

const AddCustomer = () => {
    return (
        <div>
            <h2 className='mx-3 text-2xl font-bold'>Add Customer</h2>
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col m-2 shadow-lg rounded-2xl">
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2" for="grid-first-name">
                            Name
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-slate-500 border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Hero Alom" />

                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2" for="grid-last-name">
                            Phone
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="number" placeholder="017" />
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2" for="grid-Address">
                            TAKA PER MINUTE
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="number" placeholder="100" />

                    </div>
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2" for="grid-Address">
                            Facebook Link
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="text" placeholder="Facebook" />
                    </div>

                </div>
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2" for="grid-Address">
                            Address
                        </label>
                        <input class="appearance-none block w-full bg-grey-lighter text-slate-500 border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="text" placeholder="Facebook" />

                    </div>

                </div>

            </div>
        </div>
    );
};

export default AddCustomer;