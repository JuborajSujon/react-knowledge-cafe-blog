import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({ bookmarks }) {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3 bg-slate-300">
      <h2 className="text-2xl font-bold text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      <div>
        {bookmarks.map((bookmark, index) => {
          return <Bookmark key={index} bookmark={bookmark} />;
        })}
      </div>
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
