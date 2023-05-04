export default function Card({ title, text }) {
  return (
    <div className="flex flex-col text-center p-10 lg:h-80 justify-center" style={{ letterSpacing: "8px" }}>
      <h3 className="text-4xl mb-8">{title}</h3>
      <p className="text-xl">{text}</p>
    </div>
  );
}
