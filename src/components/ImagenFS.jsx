import { useState } from "react";

export default function ImagenFS({ img, index }) {
  const [clicked, setClicked] = useState(false);
  
  return (
    <div className= {`min-h-60 rounded-lg overflow-hidden ${clicked? "fixed top-0 left-0 h-screen w-screen z-30 flex flex-col justify-center bg-black bg-opacity-50" : ""} `}
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      <img className= {` self-start ${clicked? "self-center" : ""} ease-out duration-300 `} src={img} alt=""/>
    </div>
  );
}
