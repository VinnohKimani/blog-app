export function SearchBar() {
  return (
    <div className="bg-white rounded-md h-[40px] flex justify-between">
      <input type="text" placeholder="Search blogs" className="outline-0 px-4" />
      <select name="" id="">
        <option value="All" selected>
          All posts
        </option>
        <option value="Tech">Tech</option>
      </select>
    </div>
  );
}
