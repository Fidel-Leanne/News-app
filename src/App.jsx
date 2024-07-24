import { useState } from "react";
import Navbar from "./Components/navbar";
import Country from "./Components/Country";
import NewsBoard from "./Components/newsBoard";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Header from "./Components/Header";

const App = () => {
  const [category, setCategory]= useState('general');
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Header/>
      <Country/>
      <Hero/>
      <NewsBoard category={category} />
      <Footer/>
    </div>
  );
};

export default App;
