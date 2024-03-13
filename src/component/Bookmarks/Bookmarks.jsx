import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {

  return (
    <div className="md:w-1/3 text-center bg-gray-100 mx-4 p-4">
      <div>
        <h3 className="text-4xl">Reading Time: {readingTime}</h3>
      </div>

      <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2>
      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired
}

export default Bookmarks;