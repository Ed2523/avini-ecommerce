import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main className='mainContainer'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
