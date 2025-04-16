export function BlogCard({ image, title, category, description }) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow h-87 overflow-hidden font-Noto Serif">
      <img src={image} className="h-[50%] w-full object-cover" />

      <div className="flex-1 p-3">
        <h3 className="text-red-600 tesxt-sm">{title}</h3>
        <h1 className="font-bold text-2xl">{category}</h1>
        <p className="line-clamp-3">{description}</p>
      </div>
    </div>
  );
}
