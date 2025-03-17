import React from "react";
import Header from "./Header/Header";
import { PAGES } from "./pages";

function Home() {
  return (
    <div>
      <Header />
      <PAGES.About />
      <PAGES.ConstructionChaos />
      <PAGES.Delivery />
      <PAGES.Advertising />
      <PAGES.Faqs />
      <PAGES.Achievements />
    </div>
  );
}

export default Home;
