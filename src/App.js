import React from "react";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";
import Meme from "./components/Meme";

export default function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
      <Meme />
    </div>
  );
}
