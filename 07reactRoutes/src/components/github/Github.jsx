
import { useLoaderData } from "react-router-dom"


function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState();
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/amay369").then((res)=> res.json())
  //   .then(data =>{
  //     console.log(data)
  //     setData(data)
  //   })
  // })
  return (
    <div className="flex justify-center flex-col items-center w-full bg-blue-300 text-xl font-bold p-4">
      <div>Github Followers: {data.followers
      }
      </div>
      <div className="my-6">
        <img src= {data.avatar_url} alt="GitHub Image" width={300}/>
      </div>
      
    </div>
  )
}

export default Github

export const GitInfo = async()=>{
  const response = await fetch('https://api.github.com/users/amay369')

  return response.json();
}