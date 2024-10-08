import { useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import Results from "./components/Results";
import "./App.css";

function App() {
  const [city, setCity] = useState(""); // State to store the city name

  return (
    <>
      <Header />
      <Search setCity={setCity} />
      <Results city={city} />
    </>
  );
}

export default App;
