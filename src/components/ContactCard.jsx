import { BsWhatsapp } from "react-icons/bs";

export default function ContactCard() {
  return (
    <div className="text-cuteBlack text-center h-full">
      <h3
        className="text-xl font-bold inline-block text-cuteWhite px-5 lg:mt-5"
        style={{ fontFamily: "'Rubik', sans-serif", letterSpacing: "10px" }}
      >
        ESPERAMOS TU MENSAJE
      </h3>
      <div className="h-2/3 lg:h-3/4 flex flex-col items-center justify-center">
        <a href="https://wa.me/543513400100" target="_blank" className=" w-32 text-2xl bg-green-500 py-5 px-10 rounded-full border-cuteBlack hover:bg-cuteWhite hover:text-black ease-out duration-300 hover:scale-110">
          <BsWhatsapp style={{ fontSize: "40px", margin: "auto" }} />
        </a>
      </div>
    </div>
  );
}
