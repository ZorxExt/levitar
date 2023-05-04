export default function DivVideo() {
  return (
    <div className="relative min-h-screen flex">
      <video
        src="video-principal.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
        className="absolute top-0 left-0 w-screen h-screen object-cover"
      />
      <div className="absolute top-0 left-0 w-screen h-screen object-cover bg-blue-950 opacity-30 bg-blend-overlay"></div>
      <span className="relative m-auto w-90">
        <img src="public/levit-logo.png" alt="Levit.ar" className="px-8" />
        <h2
          className="text-4xl text-gray-50 text-center mt-12"
          style={{ letterSpacing: "8px" }}
        >
          Vision de altura
        </h2>
      </span>
    </div>
  );
}
