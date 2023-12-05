import React from "react";
import Navbar from "./Navbar";

function DeliveryHeading() {
  return (
    <section class="bg-center bg-no-repeat bg-[url('https://wallpapercave.com/wp/wp3105346.jpg')] bg-gray-500 bg-blend-multiply">
      <Navbar />
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-20">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-300 md:text-5xl lg:text-7xl">
          Healthy Mealz
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-3xl sm:px-16 lg:px-48">
          A Platform to Connect to Mess As a Delivery Buddy ;)
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"></div>
      </div>
    </section>
  );
}

export default DeliveryHeading;