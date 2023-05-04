export default function CardLink({ title, link, linkImg }) {
  return (
    <div className="h-56 lg:h-80 relative flex text-center m-5 rounded-md overflow-hidden shadow-cuteWhite shadow-sm">
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
        className="m-auto text-4xl text-white font-medium hover:text-gray-400 hover:scale-110 ease-out duration-300  "
        style={{ letterSpacing: "8px" }}
      >
        <a href={link}>{title}</a>
      </h2>
    </div>
  );
}
