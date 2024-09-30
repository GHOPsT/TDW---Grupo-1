import React, { useState } from "react";
import './Faq8.css'

const Faq8 = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    return (
        <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ's</h1>

            <div className=" lg:mt-12 bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto ">
                <div className=" flex justify-between md:flex-row flex-col ">
                    <div className=" md:mb-0 mb-8 md:text-left text-center">
                        <h2 className=" font-medium text-xl leading-5 text-gray-800 lg:mb-2 mb-4">Questions</h2>
                        <p className=" font-normal text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">If you don’t find your answer, Please contact us or Leave a Message, we’ll be more than happy to assist you.</p>
                    </div>

                    <div className=" flex justify-center items-center">
                        <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
                            <input className="focus:outline-none bg-white" type="text" placeholder="Search" />
                            <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 21L15 15" stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-8/12 w-full mx-auto">
                {/* <!-- Question 1 --> */}
                <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

                <div className="w-full md:px-6  ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className=" ">
                            <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> How do i know if a product is available in boutiques?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen(!open)}>
                            <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>

                {/* <!-- Question 2 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q2.</span> How can i find the prices or get other information about chanel products?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen2(!open2)}>
                            <svg className={"transform " + (open2 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open2 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>

                {/* <!-- Question 3 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q3.</span>
                                How many collections come out every year?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen3(!open3)}>
                            <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open3 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>

                {/* <!-- Question 4 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6  ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q4.</span>
                                Are all of the fashion collections features on the website?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen4(!open4)}>
                            <svg className={"transform " + (open4 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open4 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>

                {/* <!-- Question 5 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q5.</span>
                                Where do i find products that i have seen in magazines or Social Media?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen5(!open5)}>
                            <svg className={"transform " + (open5 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open5 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>

                <hr className=" w-full lg:mt-10 my-8" />
            </div>
        </div>
    );
};

export default Faq8;
