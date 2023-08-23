import { useState } from "react";
import Son from "./Son";

function Father() {
  const [count, setCount] = useState(0);
  console.log("Father rerender");
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
      <Son />
    </div>
  );
}

export default Father;
