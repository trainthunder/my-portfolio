import React, { createContext, useContext, useState } from "react";

const userBurgerMenuContext = createContext();

function BurgerMenuProvider({ children }) {
  const [isHomeMenu, setIsHomeMenu] = useState(false);

  return (
    <userBurgerMenuContext.Provider value={{ isHomeMenu, setIsHomeMenu }}>
      {children}
    </userBurgerMenuContext.Provider>
  );
}

const useBurgerMenu = () => useContext(userBurgerMenuContext);

export { BurgerMenuProvider, useBurgerMenu };
