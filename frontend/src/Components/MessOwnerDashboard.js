import React from "react";
import Footer from "./Footer";
import MessHeading from "./MessHeading";
import MessOwnersSubcribers from "../Components/MessOwnersSubcribers";
import MessOwnerDeductTokens from "./MessOwnerDeductTokens";

function MessOwnerDashboard() {
  return (
    <div>
      <MessHeading />
      <MessOwnerDeductTokens/>
      <MessOwnersSubcribers />
      <Footer />
    </div>
  );
}

export default MessOwnerDashboard;
