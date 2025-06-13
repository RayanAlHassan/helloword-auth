// import React, { useState } from 'react'

// const HelloWord = () => {
// const handleclick=()=>{
//  const headerText=document.getElementById("hello").textContent
//   document.getElementById("myInput").value = headerText;
// }
//   return (
//     <div>
//       <h1 id="hello">Hello Word !</h1>
//       <input
//       id="myInput"
//       type='text'

//       />
//       <button onClick={handleclick}>change</button>
//     </div>
//   )
// }

// export default HelloWord
import React, { useState } from "react";

const HelloWord = () => {
  const [inputText, setInputText] = useState("");
  const [hello, setHello] = useState("Hello word");
  const [inputTextHello, setinputTextHello] = useState("");

  const handleclick = () => {

    setinputTextHello(hello);
  };
  return (
    <div>
      <h1 id="hello">{hello}</h1>
      <input
        type="text"
        value={hello}
        onChange={(e) => setHello(e.target.value)}
        placeholder="Edit header here"
        style={{
          width: "300px",
          padding: "8px",
          fontSize: "16px",
          backgroundColor: "blue",
        }}
      />
      <input
        type="text"
        value={inputTextHello}
        placeholder="Edit header here"
        style={{
          width: "300px",
          padding: "8px",
          fontSize: "16px",
          backgroundColor: "blue",
        }}
        readOnly
      />
      <button onClick={handleclick}>change</button>
    </div>
  );
};

export default HelloWord;
