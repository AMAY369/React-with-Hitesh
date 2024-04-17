import { useState } from "react";
import './app.css'

export function App() {
  const [color, setColor] = useState('olive')

  return (
   <div className="w-full h-screen " style={{backgroundColor:color}} >
    <div className="flex flex-wrap justify-center bottom-12 inset-x-0 inset-y-0">
      <p>
      <button style={{backgroundColor:'red', padding:4, outline:'none', borderRadius:'5px', margin:'10px',color:'white', fontWeight:600}} onClick={()=>setColor('red')}>RED</button>
      <button style={{backgroundColor:'green', padding:4, outline:'none', borderRadius:'5px', margin:'10px', fontWeight:600, color:'white'}}  onClick={()=>setColor('green')}>GREEN</button>
      <button style={{backgroundColor:'blue', padding:4, outline:'none', borderRadius:'5px', margin:'10px', fontWeight:600, color:'white'}} onClick={()=>setColor('blue')}>BLUE</button>
      <button style={{backgroundColor:'yellow', padding:4, outline:'none', borderRadius:'5px', margin:'10px', fontWeight:600, color:'black'}} onClick={()=>setColor('yellow')}>YELLOW</button>
      <button style={{backgroundColor:'purple', padding:4, outline:'none', borderRadius:'5px', margin:'10px', fontWeight:600, color:'white'}} onClick={()=>setColor('purple')}>PURPLE</button>
      <button style={{backgroundColor:'orange', padding:4, outline:'none', borderRadius:'5px', margin:'10px', fontWeight:600, color:'white'}} onClick={()=>setColor('orange')}>ORANGE</button>
      <button style={{backgroundColor:'brown', padding:4, outline:'none', borderRadius:'5px', margin:'10px', fontWeight:600, color:'white'}} onClick={()=>setColor('brown')}>BROWN</button>
      <button style={{backgroundColor:'lavender', padding:4, outline:'none', borderRadius:'5px', margin:'10px', fontWeight:600}} onClick={()=>setColor('lavender')}>LAVENDER</button>
      <button style={{backgroundColor:'white', padding:4, outline:'none', borderRadius:'5px', margin:'10px', fontWeight:600}} onClick={()=>setColor('white')}>WHITE</button>
      <button style={{backgroundColor:'black', padding:4, outline:'none', borderRadius:'5px', margin:'10px', fontWeight:600, color:'white'}} onClick={()=>setColor('black')}>BLACK</button>
      </p>
    </div>
   </div>
  )
}
