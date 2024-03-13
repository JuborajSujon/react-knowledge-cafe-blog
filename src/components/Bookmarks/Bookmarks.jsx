import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({ bookmarks, readingTime }) {
  return (
    <div className="md:w-1/3 ">
      <div className="bg-violet-100 border border-violet-500 py-4 my-4 rounded-md">
        <h2 className="font-bold text-center text-violet-500">
          Spend time on read : {readingTime} min
        </h2>
      </div>
      <div className="bg-slate-300 rounded-md py-3">
        <h2 className="text-lg font-bold text-center">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        <div>
          {bookmarks.map((bookmark, index) => {
            return <Bookmark key={index} bookmark={bookmark} />;
          })}
        </div>
      </div>
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
