import React from 'react'

const Child = ({handleClick}) => {
    console.log("Child Rendering");
  return (
    <div>
      <button onClick={handleClick}>Child Click</button>
    </div>
  )
}

export default React.memo(Child);
