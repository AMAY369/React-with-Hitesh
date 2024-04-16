
import './app.css'
import { Card } from './components/card'

export function App() {

  let obj1 ={
    name:"Kylie Jenner",
    image:'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  }
  let obj2 = {
    name: 'Kendal Jenner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-10 ">Tailwind </h1>

      <Card obj={obj1}/>
      <Card obj= {obj2}/>


    </>
  )
}
