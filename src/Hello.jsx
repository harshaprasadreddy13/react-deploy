import React from 'react'

const Hello = () => {
  //localStorage.setItem("age","22");
  //localStorage.clear();
  //const name=localStorage.getItem("name");
  //console.log(name);
  //localStorage.removeItem("name");
  const user={
    name:"zaki",
    age:22
  }
  localStorage.setItem("user",JSON.stringify(user));

  const user1=JSON.parse(localStorage.getItem("user"));
  console.log(user1.name);
  return (
    <div>
    </div>
  )
}

export default Hello