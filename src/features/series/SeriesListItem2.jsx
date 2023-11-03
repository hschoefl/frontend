import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";

function SeriesListItem2({ serie }) {
  return (
    <Link to={`/serie/${serie.id}`}>
      <div className="flex w-full h-48 bg-green-100 justify-start shadow-2xl rounded-lg relative gap-2">
        <div className="relative rounded-lg">
          <img
            className="object-cover rounded-lg h-48"
            src={`https://image.tmdb.org/t/p/w300/${serie.backdrop_path}`}
            alt=""
          />
          <div className="absolute w-full h-12 rounded-tl-lg rounded-tr-lg bg-white opacity-60 top-0 flex justify-center items-center text-center ">
            <p className="font-semibold text-black">{serie.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default SeriesListItem2;
