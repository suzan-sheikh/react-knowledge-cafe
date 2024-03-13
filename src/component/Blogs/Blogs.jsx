import PropTypes from 'prop-types'; // ES6
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
  
  const [blogs, setblogs] = useState([]);

  useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setblogs(data))
  },[]);
  
  return (
    <div className="md:w-2/3">
        <h1 className="text-4xl">Blogs:{blogs.length}</h1>
        {
          blogs.map(blog =>  <Blog 
            key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}
            ></Blog>)
        }
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
}


export default Blogs;