import React from 'react';

const InfoCardSingel = () => {
    return (
        <div className="w-full max-w-full px-3 mb-5 sm:w-1/2 sm:flex-none   xl:w-1/4 text-gray-700 ">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-lg rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                    <div className="flex flex-row -mx-3">
                        <div className="flex-none w-2/3 max-w-full px-3">
                            <div>
                                <p className="mb-0 font-sans font-semibold leading-normal text-sm">Today's Money</p>
                                <h5 className="mb-0 font-bold">
                                    $53,000
                                    <span className="leading-normal text-sm font-weight-bolder text-lime-500">+55%</span>
                                </h5>
                            </div>
                        </div>
                        <div className="px-3 text-right basis-1/3">
                            <div className="inline-block w-12 h-12 text-center text-white flex items-center justify-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCardSingel;