import React from "react";
import Header from "./Components/Headerpage/Header";
import Main from "./Components/Mainpage/Main";
import Product from "./Components/Productpage/Product";
import Contact from "./Components/Footerpage/Contact";
import Footer from "./Components/Footerpage/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Product/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
