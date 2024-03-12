import { useEffect, useState } from "react";

const Blogs = () => {
  
  const [blogs, setblogs] = useState([]);

  useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setblogs(data))
  },[]);

  console.log(blogs)
  
  return (
    <div className="md:w-2/3">
        <h1 className="text-4xl">Blogs:{blogs.length}</h1>
    </div>
  );
};

export default Blogs;