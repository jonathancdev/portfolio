import React from "react";
import { navigate } from "gatsby-link";

export default function thanks() {
  const navigateHome = () => {
    setTimeout(() => navigate("/"), 5000);
  };
  navigateHome();
  return (
    <section className="thanks">
      <h1 className="thanks__heading-primary">THANK YOU!</h1>

      <p className="thanks__text">Your message has been received.</p>
    </section>
  );
}
