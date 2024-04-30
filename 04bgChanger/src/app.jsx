import { useState } from "react";

export function App() {
  const [color, setColor] = useState('olive')

  return (
   <div className="w-full h-screen flex justify-center" style={{backgroundColor:color}}>
    <div className="px-4 py-3 gap-2 fixed bottom-10 rounded-xl flex flex-wrap bg-white ">
      <button className="font-bold py-2 rounded-xl px-3 text-white" style={{backgroundColor:'red'}} onClick={()=>{setColor('red')}}>Red</button>
      <button className="font-bold p-2 ml-2 rounded-xl px-3 text-white" style={{backgroundColor:'green'}} onClick={()=>{setColor('green')}}>Green</button>
      <button className="font-bold p-2 ml-2 rounded-xl px-3" style={{backgroundColor:'yellow'}} onClick={()=>{setColor('yellow')}}>Yellow</button>
      <button className="font-bold p-2 ml-2 rounded-xl px-3 text-white" style={{backgroundColor:'blue'}} onClick={()=>{setColor('blue')}}>Blue</button>
      <button className="font-bold p-2 ml-2 rounded-xl px-3" style={{backgroundColor:'lavender'}} onClick={()=>{setColor('lavender')}}>Lavender</button>
      <button className="font-bold p-2 ml-2 rounded-xl px-3 text-white" style={{backgroundColor:'brown'}} onClick={()=>{setColor('brown')}}>Brown</button>
      <button className="font-bold p-2 ml-2 rounded-xl px-3" style={{backgroundColor:'orange'}} onClick={()=>{setColor('orange')}}>Orange</button>
      <button className="font-bold p-2 ml-2 rounded-xl px-3 text-white" style={{backgroundColor:'black'}} onClick={()=>{setColor('black')}}>Black</button>
      <button className="font-bold p-2 ml-2 rounded-xl px-3" style={{backgroundColor:'white'}} onClick={()=>{setColor('white')}}>White</button>
      <button className="font-bold p-2 ml-2 rounded-xl px-3 text-white" style={{backgroundColor:'purple'}} onClick={()=>{setColor('purple')}}>Purple</button>
      
    </div>
   </div>
  )
}
