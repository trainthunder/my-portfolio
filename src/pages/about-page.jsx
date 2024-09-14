import React from "react";
import AboutPageHeader from "../components/about-page/about-page-header";
import { BurgerMenuProvider } from "../context/burger-menu-context";
import AboutPageBurgerMenu from "../components/about-page/about-page-burger-menu";
import AboutPageMain from "../components/about-page/about-page-main";

function AboutPage() {
  return (
    <BurgerMenuProvider>
      <div className="w-screen h-screen bg-black overflow-clip">
        <AboutPageHeader />
        <AboutPageBurgerMenu />
        <AboutPageMain />
      </div>
    </BurgerMenuProvider>
  );
}

export default AboutPage;
