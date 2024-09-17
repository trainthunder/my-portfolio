import React from "react";
import HomePageHeader from "../components/home-page/home-page-header";
import HomePageMain from "../components/home-page/home-page-main";
import { BurgerMenuProvider } from "../context/burger-menu-context";
import HomePageBurgerMenu from "../components/home-page/home-page-burger-menu";

function HomePage() {
  return (
    <BurgerMenuProvider>
      <div className="w-screen h-screen bg-white overflow-clip">
        <HomePageHeader />
        <HomePageMain />
        <HomePageBurgerMenu />
      </div>
    </BurgerMenuProvider>
  );
}

export default HomePage;
