import { useState, useEffect } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl font-bold">Blogs: {blogs.length}</h1>
    </div>
  );
}
