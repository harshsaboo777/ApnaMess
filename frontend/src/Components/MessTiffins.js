import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import MessHeading from "./MessHeading";
import Footer from "./Footer";
import "../ComponentStyles/messTiffins.css";

const tiffin = [
  {
    name: "Pradeep Bhojnalaya",
    description:
      "Meal includes rice, dal, vegetables, roti, papad, dahi (yogurt), small amounts of chutney or pickle, and a sweet dish.",
    image:
      "https://pluspng.com/img-png/veg-thali-png-exotic-tastes-of-india-from-thali-to-tandoori-484.png",
    price: 3500,
    rating: 3,
  },
  {
    name: "Swaad Maharaja",
    description:
      "Meal includes chicken biryani, boiled eggs, vegetables, roti, papad, dahi (yogurt), small amounts of chutney or pickle, and a sweet dish.",
    image:
      "https://i.pinimg.com/originals/62/32/5f/62325f4a491170ba5d45fa7822733b06.png",
    price: 4200,
    rating: 5,
  },
  {
    name: "Healthy Plate",
    description:
      "Meal includes Khichdi, kadi, papad, raaita along with some potato chips",
    image:
      "https://pluspng.com/img-png/veg-thali-png-exotic-tastes-of-india-from-thali-to-tandoori-484.png",
    price: 3150,
    rating: 4,
  },
];

function MessTiffins() {

  // // const Mem_Id = cookies.get("Member").mem_id;
  // const User_id = 1;

  // const [member, set_Member] = useState({});
  // // User_id Fname Lname  User_type

  // const [tiffin, set_tiffin] = useState([]);

  // const fetchMess = async (e) => {
  //   await axios
  //     .post("http://localhost:5000/Customer/View_mess/")
  //     .then((res) => {
  //       set_tiffin(res.data);
  //     });
  // };

  // const fetchUser = async (e) => {
  //   await axios
  //     .post("http://localhost:5000/auth//")
  //     .then((res) => {
  //       set_tiffin(res.data);
  //     });
  // };

  // useEffect(() => {
	// 	fetchMess();
	// }, []);

  // console.log(tiffin);

  return (
    <div className="bg-gray-500">
      <MessHeading />
      {tiffin.map((ele, index) => (
        <ItemCard
          name={ele.name}
          description={ele.description}
          image={ele.image}
          price={ele.price}
          rating={ele.rating}
        />
      ))}
      <Footer />
    </div>
  );
}

export default MessTiffins;
