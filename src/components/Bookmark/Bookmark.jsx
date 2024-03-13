import PropTypes from "prop-types";

export default function Bookmark({ bookmark }) {
  const { title } = bookmark;
  return (
    <div className="bg-slate-200 p-4 m-4 rounded-md">
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  );
}

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};
