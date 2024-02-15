import React from "react";

import { Outlet } from "react-router-dom";
import { useState } from "react";

import Footer from "./modules/Footer";
import Nav from "./modules/Nav";

import BackToTop from "./components/small components/BackToTop";
import { useEffect } from "react";
import { ProductProvider } from "./context/ProductContext";

function App() {

  const [showBTT, setShowBTT] = useState(false);

  function handleVisibleBTT () {
    setShowBTT(window.pageYOffset > 100);
  };

  function handleScrollUp () {
    window.scrollTo(
      {
        left: 0,
        top: 0,
        behavior: "smooth"
      }
    )
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleBTT);
  }, []);

  return (
    <>
      <ProductProvider>
        <Nav />
        <Outlet />
        {/*
        {showBTT && <BackToTop handleClick={handleScrollUp} />}
        <Footer /> */}
      </ProductProvider>
    </>
  );
}

export default App;
