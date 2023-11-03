import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";

/* eslint-disable react/prop-types */
function SeriesListItem({ serie }) {
  return (
    <div className="flex gap-3 w-full h-48 bg-blue-100 border-2 px-3 py-2 justify-start items-center shadow-md rounded-lg relative">
      <div className="h-44 w-1/4">
        <img
          className="h-full w-36"
          src={`https://image.tmdb.org/t/p/w154/${serie.poster_path}`}
          alt=""
        />
      </div>
      <div className="flex flex-col h-full justify-start w-3/4 relative">
        <p className="font-bold text-l">{serie.name}</p>
        <p className="line-clamp-4 text-md">{serie.overview}</p>
        <Link
          to={`/serie/${serie.id}`}
          className="mt-2 text-blue-400 font-semibold absolute right-2 bottom-2"
        >
          <div className="flex items-center justify-center gap-2">
            <p>Details</p>
            <FaArrowRightLong />
          </div>
        </Link>
      </div>
    </div>
  );
}
export default SeriesListItem;
