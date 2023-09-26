
import { useState,useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyWord] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyWord(event.target.value);
  useEffect(()=>{
    console.log("i run only once.");
  }, []);
  useEffect(()=> {
      console.log("i run when 'keyword' changes");
  },[keyword]);
  useEffect(()=> {
      console.log("i run when 'counter' changes");
  },[counter]);
  useEffect(()=> {
      console.log("i run when 'counter' and 'keyword' changes");
  },[counter, keyword]);
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search"></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
  }

export default App;
