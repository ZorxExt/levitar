import { FiArrowRight } from "react-icons/fi";

import {
  BsCameraReelsFill,
  BsHammer,
  BsHouseDoorFill,
  BsFillPinAngleFill,
  BsBuildingsFill,
} from "react-icons/bs";

export default function ServiceCard() {
  return (
    <div className="text-cuteBlack text-center pointer-events-none">
      <h2 className="text-2xl font-bold mx-5 lg:mx-20 mt-2 lg:mt-4 border-b-2 border-black">VISIÓN Y DATOS AÉREOS</h2>
      <ul className="mt-3 grid grid-cols-2 lg:grid-cols-3 gap-1 lg:pt-14 lg:pb-14 lg:gap-10">
        <li className="items-center text-lg w-full justify-center p-2 shadow  lg:w-52 m-auto lg:bg-cuteBlack lg:text-cuteWhite lg:rounded-lg">
          {" "}
          <BsCameraReelsFill className="m-auto" />
          CINE & MEDIOS
        </li>
        <li className="items-center text-lg w-full justify-center p-2 shadow  lg:w-52 m-auto lg:bg-cuteBlack lg:text-cuteWhite lg:rounded-lg">
          {" "}
          <BsFillPinAngleFill className="m-auto" />
          TURISMO
        </li>
        <li className="items-center text-lg w-full justify-center col-span-2 lg:col-auto p-2 lg:shadow  lg:w-64 m-auto lg:bg-cuteBlack lg:text-cuteWhite lg:rounded-lg">

          <BsBuildingsFill className="m-auto" />
          OBRAS & PROYECTOS
        </li>
      </ul>
    </div>
  );
}
