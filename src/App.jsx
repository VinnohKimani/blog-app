import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="w-[100px]  h-[100px] caret-fuchsia-500 mt-[50px] ml-[50]"></div>
    </>
  );
}

export default App;
