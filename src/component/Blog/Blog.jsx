import PropTypes from 'prop-types'; // ES6
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {

  const {id, title, cover, author,  author_img, reading, date, hashtags} = blog;
  return (
    <div className='mb-20 space-y-4'>
      <img className='w-full h-96 rounded-xl mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
      <div className='flex justify-between items-center'>
        <div className='flex items-center mb-4'>
          <img className='w-14 h-14 rounded-full' src={author_img} alt={`Author image ${author}`} />
          <div className='ml-6'>
            <h3 className='text-2xl'>{author}</h3>
            <p>Post Date: {date}</p>
          </div>
        </div>
        <div>
          <span>{reading} min read</span>
            <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-red-600 text-4xl"><FaRegBookmark></FaRegBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {
          hashtags.map((has, idx) => <span key={idx}> <a href="">#{has}</a></span> )
        }
      </p>
      <button onClick={() => handleMarkAsRead(id, reading)} className="text-purple-600 font-bold underline">Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;