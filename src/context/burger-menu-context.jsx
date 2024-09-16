import React, { createContext, useContext, useState } from "react";

const userBurgerMenuContext = createContext();

function BurgerMenuProvider({ children }) {
  const [isHomeMenu, setIsHomeMenu] = useState(false);
  const [isAboutMenu, setIsAboutMenu] = useState(false);
  const [isProjectMenu, setIsProjectMenu] = useState(false);

  return (
    <userBurgerMenuContext.Provider
      value={{
        isHomeMenu,
        setIsHomeMenu,
        isAboutMenu,
        setIsAboutMenu,
        isProjectMenu,
        setIsProjectMenu,
      }}
    >
      {children}
    </userBurgerMenuContext.Provider>
  );
}

const useBurgerMenu = () => useContext(userBurgerMenuContext);

export { BurgerMenuProvider, useBurgerMenu };
