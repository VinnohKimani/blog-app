export function FeaturedBlogCard({ image, title, category, description }) {
  return (
    <div className="flex bg-white rounded-xl shadow h-57 overflow-hidden font-Noto Serif">
      <img src={image} className="h-full w-[30%] object-cover" />
      <div className="flex-1 p-3">
        <h3 className="text-purple-600 tesxt-sm">{title}</h3>
        <h1 className="font-bold text-2xl">{category}</h1>
        <p className="line-clamp-3">{description}</p>
        <div className="flex justify-between pt-16">
          <span>1.6K Reads</span>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}
