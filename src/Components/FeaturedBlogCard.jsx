export function FeaturedBlogCard() {
  return (
    <div
      className="flex bg-white rounded-xl shadow h-57 overflow-hidden font-Noto Serif"
    >
      <img
        src="https://blush-design.imgix.net/collections/i6aPXTYbSUdZEveWhgik/a22d18a9-6c9d-4a9e-98a8-9c77ff34a309.png?w=800&h=450&fit=crop&auto=compress&cs=srgb"
        className="h-full w-[30%] object-cover"
      />
      <div className="flex-1 p-3">
        <h3 className="text-purple-600 tesxt-sm">MARKETING</h3>
        <h1 className="font-bold text-2xl">
          Embarce The Power of Storytelling in Business
        </h1>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
          accusamus rerum. Quos quod voluptatum iste, officiis illo alias
          pariatur magni quam ullam repellendus cum est, mollitia commodi
          quisquam consectetur obcaecati? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Et recusandae deleniti, quae quidem
          exercitationem dicta corporis. Id modi aliquid, minima nisi pariatur
          at delectus dolore nobis doloremque eius reiciendis ipsa?
        </p>
        <div className="flex justify-between pt-16">
          <span>1.6K Reads</span>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}
