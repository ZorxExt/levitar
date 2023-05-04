export default function TecCard() {
  return (
    <>
      <img src="dji.png" alt="" className=" m-auto h-20 relative -top-12" />
      <img src="dron.png" className="m-auto h-56 relative -top-28" alt="" />
      <span className="flex relative -top-40 text-cuteBlack  justify-center gap-10 items-center">
        <p>
          4k - 30fps <br /> 2.7k - 60fps
        </p>
        <a href="" className="text-xl bg-cuteBlack text-cuteWhite p-2 rounded-xl shadow shadow-sky-600">Conoce mas</a>
      </span>
    </>
  );
}
