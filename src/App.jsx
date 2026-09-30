/*import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Child from './Child';
const App = () => {
  /* const[count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        setCount((prev)=>prev+1);
    },[]);
    console.log("re-rendered");
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={handleClick}>Increase Count</button>
        <Child handleClick={handleClick}/>
    </div>
  )
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
  ]);
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
*/
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy,Suspense } from 'react';
const Home=lazy(()=> import("./pages/Home"));
const About=lazy(()=>import("./pages/About"));
const Contact=lazy(()=>import("./pages/Contact"));

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<h2>Loading</h2>}>
                <Home />
        </Suspense>
      )
    },
    {
      path: "/about",
      element: (
        <Suspense fallback={<h2>Loading</h2>}>
                <About />
        </Suspense>
      )
    },
    {
      path: "/contact",
      element: (
        <Suspense fallback={<h2>Loading</h2>}>
                <Contact />
        </Suspense>
      )
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;