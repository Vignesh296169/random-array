import "./styles.css";
import {useState} from "react"
 function animalnum(){
   const anima=["deer","elephant","tiger","horse"]
   return anima[Math.floor(Math.random()*anima.length)]
 }
export default function App() {
  const [init,setinit]=useState([])
const changehandler=()=>{
  setinit([animalnum()])
}
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>{init}</div>
      <button onClick={changehandler}>search</button>
    </div>
  );
}
