import PropTypes from "prop-types";

export default function Blog({ blog }) {
  const {
    title,
    cover_img,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  console.log(blog);
  return (
    <div>
      <img src={cover_img} alt={`Cover image of ${title}`} />
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4">
          <img
            className="w-14 h-14 rounded-full"
            src={author_img}
            alt={`Author of ${title}`}
          />
          <div>
            <h3>{author}</h3>
            <span>{posted_date}</span>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button></button>
        </div>
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div>
        {hashtags.map((tag, index) => (
          <a key={index + 1} href="#">
            <span className="mr-2">#{tag}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
