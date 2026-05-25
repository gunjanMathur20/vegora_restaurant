export default function ImageCard({ src }) {
  return (
    <div className="w-full h-70 overflow-hidden shadow-sm bg-white ">
      <img
        src={src}
        alt="post"
        className="w-full h-full object-cover hover:scale-110 transition duration-300"
      />
    </div>
  );
}