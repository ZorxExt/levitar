import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

export default function CardLinkXL({ title, linkImg, cardComponent }) {
  const [clicked, setClicked] = useState(false);


  return (
    <div>
      <div
        className={`${
          clicked ? "h-28 lg:h-40" : "h-64 lg:h-80"
        } relative z-10 flex m-5 rounded-md overflow-hidden shadow-cuteWhite shadow-sm ease-out duration-300`}
      >
        <div
          className="h-full bg-fixed bg-center bg-cover w-full absolute opacity-50 -z-10 bg-gradient-to-r from-sky-950 to-sky-600"
          style={{
            background: "",
          }}
        ></div>
        <div
          className="w-full h-full bg-cover bg-center bg-fixed absolute -z-20"
          style={{ backgroundImage: `url(${linkImg})`, filter: "blur(2px)" }}
        ></div>
        <h2
          className="m-auto text-4xl text-center text-white font-medium active:text-gray-400 lg:hover:text-gray-400 active:scal110 lg:hover:scale-110 ease-out duration-300 cursor-pointer  "
          style={{ letterSpacing: "8px" }}
        >
          <a
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            {title}
          </a>
        </h2>
      </div>

      <div
        className={`mx-5 bg-cuteWhite relative left-0 -top-6 overflow-hidden ease-linear rounded-b-lg`}
        style={{
          maxHeight: clicked ? "2400px" : "0",
          transition: clicked ? "1000ms" : "500ms"
        }}
      >
        {cardComponent}
      </div>
    </div>
  );
}
