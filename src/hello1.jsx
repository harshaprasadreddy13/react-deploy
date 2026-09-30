import React, { useMemo, useState } from "react";

const hello1 = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const slowCalculation=(num)=>{
    console.log("Heavy calculation running...");
    for(let i=0;i<1000000000;i++){
        console.log("Calculated");
        return num+1;
    }
  }
  const result=useMemo(()=>{
    return slowCalculation(number);
  },[number]);
  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <br /><br />
      <h2>Result: {result}</h2>
      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

    </div>
  );
};

export default hello1;