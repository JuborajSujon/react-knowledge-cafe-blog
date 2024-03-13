import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

export default function Blogs({ handleAddToBookmark }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1 className="text-2xl font-bold">Blogs: {blogs.length}</h1>
      <div>
        {blogs.map((blog) => {
          return (
            <Blog
              key={blog.id}
              blog={blog}
              handleAddToBookmark={handleAddToBookmark}
            />
          );
        })}
      </div>
    </div>
  );
}

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
};
