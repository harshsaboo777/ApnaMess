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
      .post("http://localhost:5000/Customer/View_mess/")
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
      {tiffin.map((ele, index) => (
        <ItemCard
          mess_id={ele.mess_id}
          name={ele.mess_name}
          description={ele.tiffin_details}
          image={"https://pluspng.com/img-png/veg-thali-png-exotic-tastes-of-india-from-thali-to-tandoori-484.png"}
          price={ele.subscription_price}
          rating={ele.rating}
        />
      ))}
      <Footer />
    </div>
  );
}

export default MessTiffins;
