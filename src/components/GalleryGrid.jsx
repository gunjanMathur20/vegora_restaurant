import ImageCard from "./ImageCard";

export default function GalleryGrid({ images }) {
  return (
    <div className="w-full p-4 mt-4 mb-6 cursor-pointer">
      {/* Heading on top */}
      <h1 className="text-4xl font-semibold text-center mb-10">Instagram</h1>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {images.map((src, i) => (
          <ImageCard key={i} src={src} />
        ))}
      </div>
    </div>
  );
}
