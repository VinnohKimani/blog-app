import { SearchBar } from "./Components/SearchBar.jsx";
import { FeaturedBlogCard } from "./Components/FeaturedBlogCard.jsx";
import { BlogCard } from "./Components/BlogCard.jsx";
// import { BlogForm } from "./Components/BlogForm.jsx";

function App() {
  const blogOne = {
    image: "https://www.lapa.ninja/assets/blog/404.jpg",
    title: "TECH ",
    category: "Learing React ",
    description:
      " Harum error nobis perspiciatis ipsam quis! Inventore cum perspiciatis beatae adipisci harum libero eos et, cumque nisi dolore sunt vero architecto a. ",
  };
  const blogTwo = {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcZSmz9JWYoWWvrkUmItReT4xsG3UJwwRWA&s",
    title: "TECH ",
    category: "Working in Tech ",
    description: " Harum error nobis perspiciatis ipsam quis! Inventore cum ",
  };
  const blogs = [
    {
      image: "https://www.lapa.ninja/assets/blog/404.jpg",
      title: "TECH ",
      category: "Learing React",
      description:
        " Harum error nobis perspiciatis ipsam quis! Inventore cum perspiciatis beatae adipisci harum libero eos et, cumque nisi dolore sunt vero architecto a. ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcZSmz9JWYoWWvrkUmItReT4xsG3UJwwRWA&s",
      title: "TECH ",
      category: "Working in Tech ",
      description: " Harum error nobis perspiciatis ipsam quis! Inventore cum ",
    },
    {
      image:
        "https://pluralsight.imgix.net/course-images/narrative-illustrations-illustrator-1041-v1.jpg",
      title: "Design",
      category: "10 Ways To Take Your UI Design Game To The Next Level",
      description:
        "Functionality and good visuals are important for building a brand and consumer relationships.Despite features",
    },
    {
      image:
        "https://i.pinimg.com/1200x/65/1e/9b/651e9b91f9bbb580f1b26913a565eba4.jpg",
      title: "Art",
      category: "Drawing",
      description: "I love Drawing",
    },
  ];
  const obj = { ...blogOne };
  const objTwo = { ...blogTwo };

  return (
    <main className="min-h-screen flex p-8  gap-3 bg-gray-50">
      <div className="w-[70%] space-y-3">
        <h1 className="font-semibold text-2xl">Latest Blogs</h1>
        <SearchBar />
        <FeaturedBlogCard
          image={
            "https://blush-design.imgix.net/collections/i6aPXTYbSUdZEveWhgik/a22d18a9-6c9d-4a9e-98a8-9c77ff34a309.png?w=800&h=450&fit=crop&auto=compress&cs=srgb"
          }
          title={"Marketing"}
          category={"How Much Can An App Make For You"}
          description={
            "Dicta commodi voluptas, unde veniam dolores amet ab doloribus cumque. Exercitationem, ea labore. Dolorum exercitationem earum adipisci voluptate aperiam tempore ullam molestiae."
          }
          viewCount={600}
        />
        <FeaturedBlogCard
          image={
            "https://images-platform.99static.com//RN0ZiJXnFh0GWrDELLudctUVK8I=/575x221:1076x722/fit-in/500x500/projects-files/41/4131/413136/79b7798e-73ba-4b68-9bbc-be0532e8a409.jpg"
          }
          title={"React-Basic"}
          category={"Tech"}
          description={
            "Dolores mollitia aspernatur tempore sapiente voluptates laborum neque doloribus esse, provident aliquid nam dolore temporibus ratione doloremque ex deleniti perferendis corrupti sit."
          }
        />
        <div className="grid grid-cols-2 gap-3">
          {/* <BlogCard {...blogOne} />
          <BlogCard {...blogTwo} />
          <BlogCard />
          <BlogCard /> */}
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
      <div className="flex-1">News</div>
      {/* <BlogForm /> */}
    </main>
  );
}

export default App;
