import { useState } from "react";
import { SearchBar } from "./Components/SearchBar.jsx";
import { FeaturedBlogCard } from "./Components/FeaturedBlogCard.jsx";
import { BlogCard } from "./Components/BlogCard.jsx";
// import { BlogForm } from "./Components/BlogForm.jsx";

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

const data = [
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

function App() {
  const [count, setCount] = useState(0);
  const [blogs, setBlogs] = useState(data);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  

  return (
    <main className="min-h-screen flex p-8  gap-3 bg-gray-50">
      <div className="w-600 space-y-3">
        <button
          className="bg-amber-300 border p-3"
          onClick={() => {
            setCount(count + 1);
            console.log("Button Clicked");
          }}
        >
          Count{count}
        </button>
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
      <form
        action=""
        className="border p-2 rounded-xl w-full space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          setBlogs([...blogs, { title, description, category, image }]);
        }}
      >
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Title"
            className="p-2 bg-white w-full rounded-lg"
            onChange={(e) => {
              setTitle(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <textarea
            type="text"
            placeholder="description"
            className="p-2 bg-white w-full rounded-lg"
            onChange={(e) => {
              setDescription(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Category</label>
          <input
            type="text"
            placeholder="category"
            className="p-2 bg-white w-full rounded-lg"
            onChange={(e) => {
              setCategory(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="text"
            placeholder="image"
            className="p-2 bg-white w-full rounded-lg"
            onChange={(e) => {
              setImage(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <button className="w-full p-2 bg-blue-300 rounded-lg">Save</button>
      </form>
      {/* <BlogForm /> */}
    </main>
  );
}

export default App;
