import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main className='mainContainer'>
        <HomeScreen />
      </main>

      <Footer />
    </>
  );
};

export default App;
