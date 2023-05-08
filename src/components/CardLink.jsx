import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

export default function CardLink({ title, linkImg, cardComponent, cardBG, isWhite }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="h-64 lg:h-80 relative flex m-5 rounded-md overflow-hidden shadow-cuteWhite shadow-sm">
      <div className="h-full bg-fixed bg-center bg-cover w-full absolute opacity-50 -z-10 bg-gradient-to-r from-sky-950 to-sky-600"></div>
      <div
        className="w-full h-full bg-cover bg-center bg-fixed absolute -z-20"
        style={{ backgroundImage: `url(${linkImg})`, filter: "blur(2px)" }}
      ></div>
      <h2
        className="m-auto text-4xl text-center text-white font-medium hover:text-gray-400 hover:scale-110 ease-out duration-300 cursor-pointer  "
        style={{ letterSpacing: "8px" }}
      >
        <a
          onClick={() => {
            setClicked(true);
          }}
        >
          {title}
        </a>
      </h2>

      <div
        className={`w-full h-full absolute top-0 ${
          clicked ? "left-0" : "left-full"
        } transition-all ease-out duration-700 backdrop-filter backdrop-blur-lg`}
      >
        <div
          className={`w-full h-full absolute -z-10 bg-cuteWhite`}
          style={{
            backgroundImage: `url(${cardBG})`,
            filter: "blur(2px)",
          }}
        ></div>
        <button
          className="text-4xl m-2 text-cuteBlack"
          onClick={() => {
            setClicked(false);
          }}
        >
          <BsArrowRightCircle style={{color : isWhite ? "white" : "black"}} />
        </button>
        {cardComponent}
      </div>
    </div>
  );
}
