/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [password, setPassword] = useState('');
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  let [length, setLength] = useState(8);

  const passwordGenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let password ='';

    if(isNumAllowed) str+="0123456789";
    if(isCharAllowed) str+="~`!@#$%^&*()--+={}[]:;'<>.?/|";

    for (let i = 1; i <=length; i++) {
      let charIndex = Math.floor(Math.random()*str.length+1);
      password+= str.charAt(charIndex);
    }

    setPassword(password);
  },
  [length, isNumAllowed,isCharAllowed, setPassword]);

  const passwordRef = useRef(null);

  const copyPassword = ()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{passwordGenerator()},[length,isNumAllowed,isCharAllowed,setPassword])

  return (
    <>
      <div className='w-full h-screen   flex justify-center bg-gray-600'>
        <div className='w-96 h-28 bg-gray-800 rounded-xl fixed top-16 flex justify-center align-center flex-wrap'>
          <div className='bg-gray-800 h-10 mt-3 w-60 rounded-xl flex justify-center '>
            <input type="text"
            value={password}
            readOnly
            placeholder='Password'
            ref={passwordRef}
            className='flex justify-center align-middle w-full rounded-xl px-2' />

          </div>
          <div className='bg-blue-800 flex justify-center w-16 h-10 mt-3 ml-2 rounded-xl'>
            <button className='text-white font-bold ' onClick={()=>{copyPassword();}}>Copy</button>
          </div>
          <div className='s'>
            <input 
            type="range"
            min={8}
            max={50}
            value={length}
            className='cursor-pointer align-middle'
            onChange={(e)=>{setLength(e.target.value)}}
             />
             <label htmlFor="" className=' text-orange-500 ml-1 align-middle'>Length: {length}</label>
          </div>
          <div className='ml-1'>
            <input
            type="checkbox"
            defaultChecked = {isNumAllowed}
            id='numberInput'
            className=' align-middle'
            onChange={()=>{setIsNumAllowed((prev)=>!prev)}} />
            <label htmlFor="" className='text-orange-500 align-middle'>Number</label>
          </div>
          <div className='ml-1'>
            <input
            type="checkbox"
            defaultChecked = {isCharAllowed}
            id='charInput'
            className=' align-middle text-orange-600'
            onChange={()=>{setIsCharAllowed((prev)=>!prev)}} />
            <label htmlFor="" className='text-orange-500  align-middle'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
