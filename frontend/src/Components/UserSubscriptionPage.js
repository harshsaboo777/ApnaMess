import React from 'react'
import MessHeading from './MessHeading'
import ItemCard2 from "./ItemCard2";
import Footer from "./Footer";

function UserSubscriptionPage() {

    const tiffin = [
        {
          name: "Pradeep Bhojnalaya",
          description:
            "Meal includes rice, dal, vegetables, roti, papad, dahi (yogurt), small amounts of chutney or pickle, and a sweet dish.",
          price: 3500,
          daily_items: 2,
          rating: 3,
        },
        {
          name: "Swaad Maharaja",
          description:
            "Meal includes chicken biryani, boiled eggs, vegetables, roti, papad, dahi (yogurt), small amounts of chutney or pickle, and a sweet dish.",
          daily_items: 1,
          price: 4200,
          rating: 5,
        },
        {
          name: "Healthy Plate",
          description:
            "Meal includes Khichdi, kadi, papad, raaita along with some potato chips",
          daily_items: 3,
          price: 3150,
          rating: 4,
        },
      ];

  return (
    <div className="bg-cyan-800">
      <MessHeading />
      {tiffin.map((ele, index) => (
        <ItemCard2
          name={ele.name}
          rating={ele.rating}
          daily_items={ele.daily_items}
        />
      ))}
      <Footer />
    </div>
  )
}

export default UserSubscriptionPage
