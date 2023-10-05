import React from "react";
import "../ComponentStyles/itemCard.css";
import Ratings from "./Ratings"
import UpdateDailyTokens from "./UpdateDailyTokens";
// import { Rating } from "@material-tailwind/react";

function ItemCard2(props) {
  const { name, rating, daily_items} = props;

  return (
    <div className="bg-white dark:bg-gray-800 my-8 card_margin">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-cyan-500">
            {name}
          </h1>
          <div className="flex">
          <p className=" lg:text-2xl inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Daily tokens : {daily_items}
          </p>
          
          <UpdateDailyTokens/>
          <a
            href="#"
            class="ml-3 text-xl inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray rounded-lg bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-cyan-900"
          >
            Contact
          </a>
          </div>

        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">

        <div>
        <p className=" lg:text-2xl inline-flex items-center justify-center m-auto py-3 text-base font-medium text-center text-cyan-500 focus:ring-4 focus:ring-gray-100 dark:text-cyan-500 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Remaining tokens : {daily_items}
          </p>
          <p className=" lg:text-2xl inline-flex items-center justify-center m-auto py-3 text-base font-medium text-center text-cyan-500 focus:ring-4 focus:ring-gray-100 dark:text-cyan-500 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Validity : {daily_items}
          </p>
        </div>
        <Ratings rats={rating}/>
        </div>
        
      </div>
    </div>
  );
}

export default ItemCard2;
