import React, { useState, useEffect } from "react";
import MessHeading from './MessHeading'
import ItemCard2 from "./ItemCard2";
import Footer from "./Footer";
import axios from "axios";
import Cookies from "universal-cookie";

function UserSubscriptionPage() {

    // const tiffin = [
    //     {
    //       name: "Pradeep Bhojnalaya",
    //       description:
    //         "Meal includes rice, dal, vegetables, roti, papad, dahi (yogurt), small amounts of chutney or pickle, and a sweet dish.",
    //       price: 3500,
    //       daily_items: 2,
    //       rating: 3,
    //     },
    //     {
    //       name: "Swaad Maharaja",
    //       description:
    //         "Meal includes chicken biryani, boiled eggs, vegetables, roti, papad, dahi (yogurt), small amounts of chutney or pickle, and a sweet dish.",
    //       daily_items: 1,
    //       price: 4200,
    //       rating: 5,
    //     },
    //     {
    //       name: "Healthy Plate",
    //       description:
    //         "Meal includes Khichdi, kadi, papad, raaita along with some potato chips",
    //       daily_items: 3,
    //       price: 3150,
    //       rating: 4,
    //     },
    //   ];

      const cookies = new Cookies();
      const [subscribed_mess, set_subscribed_mess] = useState([]);

        const fetch = async (e) => {

          const User_id = cookies.get("User").User_id;
          await axios
            .post("http://localhost:5000/Customer/View_subscribed_mess/",
            {
              "customer_id": User_id
            })
            .then((res) => {
              set_subscribed_mess(res.data);
            });
            console.log(subscribed_mess);
        };
      
        useEffect(() => {
          fetch();
          console.log("call")
        },[]);

  return (
    <div className="bg-cyan-700">
      <MessHeading />
      {subscribed_mess.map((ele, index) => (
        <ItemCard2
          name={ele.mess_name}
          rating={5}
          daily_tokens={ele.daily_tokens}
          remaining_token={ele.remaining_token}
          mess_id={ele.mess_id}
          validity={ele.subscription_validity}
        />
      ))}
      <Footer />
    </div>
  )
}

export default UserSubscriptionPage
