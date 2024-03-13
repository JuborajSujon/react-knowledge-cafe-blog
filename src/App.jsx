import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (reading_time) => {
    const newReadingTime = readingTime + reading_time;
    setReadingTime(newReadingTime);
  };

  return (
    <div className="px-4 pb-4">
      <Header />
      <div className="md:flex max-w-6xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        />
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks} />
      </div>
    </div>
  );
}

export default App;
