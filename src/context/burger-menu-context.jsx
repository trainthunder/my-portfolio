import React, { createContext, useContext, useState } from "react";

const userBurgerMenuContext = createContext();

function BurgerMenuProvider({ children }) {
  const [isHomeMenu, setIsHomeMenu] = useState(false);
  const [isAboutMenu, setIsAboutMenu] = useState(false);

  return (
    <userBurgerMenuContext.Provider
      value={{ isHomeMenu, setIsHomeMenu, isAboutMenu, setIsAboutMenu }}
    >
      {children}
    </userBurgerMenuContext.Provider>
  );
}

const useBurgerMenu = () => useContext(userBurgerMenuContext);

export { BurgerMenuProvider, useBurgerMenu };
