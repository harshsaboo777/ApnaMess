import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import MessHeading from "./MessHeading";
import Footer from "./Footer";
import "../ComponentStyles/messTiffins.css";

function MessTiffins() {

  const [tiffin, set_tiffin] = useState([]);

  const fetchMess = async (e) => {
    await axios
      .post("https://apna-mess-server.onrender.com/Customer/View_mess/")
      .then((res) => {
        set_tiffin(res.data);
      });
  };

  useEffect(() => {
		fetchMess();
	}, []);

  // console.log(tiffin);

  return (
    <div className="bg-cyan-600">
      <MessHeading />
      <section className="my-3 max-w-screen-xl mx-auto px-6">
            {/* food Menu tab  */}
            <div className="flex items-center justify-center space-x-6">
            </div>

            {/* all foods  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {tiffin.map(ele => (
                    <ItemCard
                    
          mess_id={ele.mess_id}
          name={ele.mess_name}
          description={ele.tiffin_details}
          image={"https://pluspng.com/img-png/veg-thali-png-exotic-tastes-of-india-from-thali-to-tandoori-484.png"}
          price={ele.subscription_price}
          rating={ele.rating}
                    />
                ))}
            </div>
        </section>
      <Footer />
      
    </div>
  );
}

export default MessTiffins;
