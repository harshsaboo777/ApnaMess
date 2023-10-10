import React from "react";
import Footer from "./Footer";
import MessHeading from "./MessHeading";
import MessOwnersSubcribers from "../Components/MessOwnersSubcribers";

function MessOwnerDashboard() {
  return (
    <div className="bg-cyan-600">
      <MessHeading />
      <MessOwnersSubcribers />
      <Footer />
    </div>
  );
}

export default MessOwnerDashboard;
