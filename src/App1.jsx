import React,{useEffect, useState} from 'react'
import Child from './Child'

const App1 = () => {
    const[count,setCount]=useState(0);
   // useEffect(()=>{
     //   console.log("re-rendered")
    //},[count]);
  return (
    <div>
    <h2>{count}</h2>
    <div>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
    <Child name="Rohith"/>
    </div>
  )
}

export default App1
