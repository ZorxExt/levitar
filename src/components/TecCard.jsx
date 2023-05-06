import {BsFillCameraVideoFill} from "react-icons/bs";
export default function TecCard() {
  return (
    <div className=" relative -top-2 lg:flex lg:top-3  lg:items-center lg:justify-around">
      <img src="dji.png" alt="" className=" m-auto h-16 relative -top-7 lg:static lg:h-40 lg:m-0" />
      <img src="dron2.png" className="m-auto w-auto h-20 relative -top-3 lg:static lg:h-52 lg:m-0" alt="" />
      <span className="flex relative  text-cuteBlack  justify-center gap-6 items-center"><BsFillCameraVideoFill className=" h-6 lg:h-14 w-auto"/>
        <p className="lg:text-3xl lg:font-bold center">
          4k - 30fps <br /> 2.7k - 60fps
        </p>
        <a href="https://www.dji.com/mini-2" target="_blank" className="text-xl bg-cuteBlack text-cuteWhite p-2 rounded-xl shadow shadow-sky-600 text-center hover:scale-110 ease-out duration-300">Conoce mas</a>
      </span>
    </div>
  );
}
