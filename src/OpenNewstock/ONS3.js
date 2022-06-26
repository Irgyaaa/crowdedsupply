import React from "react";
import Navbarnewstock from '../Navbarnewstock'
import Footer from '../Footer'

export default function Index() {
    return (
       <>
      <Navbarnewstock/>
        <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 bg-blue-600">
            <div className=" text-center">
                <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-yellow-500 md:w-full w-9/12 mx-auto">Catalog Details</h2>
                <p className=" font-normal text-base leading-6 text-gray-600 mt-4 lg:w-5/12 md:w-9/12 mx-auto">
                    
                </p>
            </div>
            <div className=" grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
                <div className="relative group">
                    <img src="https://drive.google.com/uc?export=view&id=1LPJSZ2Lt61qjTZNFoT0B_XIcrzKdryTl" alt="A picture of a sitting dog" className=" lg:block hidden w-full " />
                    <img src="https://drive.google.com/uc?export=view&id=1LPJSZ2Lt61qjTZNFoT0B_XIcrzKdryTl" alt="A picture of a sitting dog" className="lg:hidden block w-full " />
                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    </div>
                </div>
                <div className="relative group">
                    <img src="https://drive.google.com/uc?export=view&id=1Ypf8fiYf5_PQcwc_xBFhxwra0mBLMB0K" alt="Smiling Girl" className=" lg:block hidden w-full " />
                    <img src="https://drive.google.com/uc?export=view&id=1Ypf8fiYf5_PQcwc_xBFhxwra0mBLMB0K" alt="Smiling Girl" className="lg:hidden block w-full " />
                    <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    </div>
                </div>
                <div className="relative group">
                    <img src="https://drive.google.com/uc?export=view&id=1dWd7r3BdYlkpAcMzdDX0yHBXG1eAG9K2" alt="Men Posing" className=" lg:block hidden w-full " />
                    <img src="https://drive.google.com/uc?export=view&id=1dWd7r3BdYlkpAcMzdDX0yHBXG1eAG9K2" alt="Men Posing" className="lg:hidden block w-full " />
                    <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    </div>
                </div>
                <div className="relative group">
                    <img src="https://drive.google.com/uc?export=view&id=1OuLvMMFV6hJhc_3Izd4op44WeSbWkXpN" alt="2 puppies" className=" lg:block hidden w-full " />
                    <img src="https://drive.google.com/uc?export=view&id=1OuLvMMFV6hJhc_3Izd4op44WeSbWkXpN" alt="2 puppies" className="lg:hidden block w-full " />
                    <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    </div>
                </div>
                <div className="relative group">
                    <img src="https://drive.google.com/uc?export=view&id=1yRnlkRhRKXVasrvJcjBBUHqB0fk5FwX2" alt="2 puppies" className=" lg:block hidden w-full " />
                    <img src="https://drive.google.com/uc?export=view&id=1yRnlkRhRKXVasrvJcjBBUHqB0fk5FwX2" alt="2 puppies" className="lg:hidden block w-full " />
                    <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
       </>
    );
}
