import portafolioIMGs from "../assets/portafolioIMGs";
import ImagenFS from "./ImagenFS";
export default function FolioCard() {
  return (
    <>
    <div className="my-2 mx-0.5 rounded-lg overflow-hidden ">
    <video
      src="video-portafolio2.mp4"
      type="video/mp4"
      controls={true}
    ></video>
  </div>
    
    <div className="grid lg:grid-cols-2 lg:grid-rows-2">

      {portafolioIMGs.map((img, index) => {
        return (
          <div className="py-2 px-0.5 cursor-pointer" key={index}>
            {" "}
            <ImagenFS img={img} index={index}></ImagenFS>{" "}
          </div>
        );
      })}
    </div>
    </>
  );
}
