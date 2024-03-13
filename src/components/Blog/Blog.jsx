import PropTypes from "prop-types";

export default function Blog({ blog, handleAddToBookmark, handleMarkAsRead }) {
  const {
    title,
    cover_img,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-8 p-6">
      <img
        className="w-full h-[40vh] object-cover rounded-md"
        src={cover_img}
        alt={`Cover image of ${title}`}
      />
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4">
          <img
            className="w-14 h-14 rounded-full"
            src={author_img}
            alt={`Author of ${title}`}
          />
          <div>
            <h3 className="font-bold text-lg">{author}</h3>
            <span>{posted_date}</span>
          </div>
        </div>
        <div className="flex gap-2 items-center pr-4">
          <span>{reading_time} min read</span>
          <svg
            onClick={() => handleAddToBookmark(blog)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="space-y-3 mt-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div>
          {hashtags.map((tag, index) => (
            <a key={index + 1} href="#">
              <span className="mr-2">#{tag}</span>
            </a>
          ))}
        </div>
        <button
          onClick={() => handleMarkAsRead(reading_time)}
          className="btn btn-outline">
          Mark as read
        </button>
      </div>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
