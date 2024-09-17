import React from "react";
import { BurgerMenuProvider } from "../context/burger-menu-context";
import ContactPageHeader from "../components/contact-page/contact-page-header";
import ContactPageBurgerMenu from "../components/contact-page/contact-page-burger-menu";
import ContactPageMain from "../components/contact-page/contact-page-main";

function ContactPage() {
  return (
    <BurgerMenuProvider>
      <div className="w-full h-full overflow-clip">
        <ContactPageHeader />
        <ContactPageBurgerMenu />
        <ContactPageMain />
      </div>
    </BurgerMenuProvider>
  );
}

export default ContactPage;
