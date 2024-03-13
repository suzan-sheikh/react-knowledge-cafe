import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'
function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)

  }

  const handleAddToBookmark = blog => {    
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);   
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>        
        <Blogs
        handleAddToBookmark={handleAddToBookmark} 
        handleMarkAsRead={handleMarkAsRead}>        
        </Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
