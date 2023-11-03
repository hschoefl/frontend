import { useLoaderData } from "react-router-dom";
import Seasons from "../../components/ui/Seasons";
import Episodes from "../../components/ui/Episodes";
import { useState } from "react";
import SeasonDetail from "../../components/ui/SeasonDetail";

function SerieDetails() {
  const [showSeasons, setShowSeasons] = useState(false);

  const serieDetailsData = useLoaderData();

  const {
    name,
    backdrop_path,
    number_of_seasons,
    number_of_episodes,
    seasons,
  } = serieDetailsData;

  const backgroundImageUrl = `https://image.tmdb.org/t/p/w780/${backdrop_path}`;
  console.log(backgroundImageUrl);

  console.log(serieDetailsData);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col relative max-w-4xl mt-3">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
          alt={name}
        />
        <h1 className="font-bold text-3xl absolute w-full text-center bg-black bg-opacity-60 text-gray-300">
          {name}
        </h1>
        <div className="absolute bottom-0 flex flex-col h-28 w-full bg-gradient-to-r from-slate-400/80 to-slate-900/70">
          <Seasons numberOfSeasons={number_of_seasons} />
          <button onClick={() => setShowSeasons((show) => !show)}>
            Show Seasons
          </button>
          <Episodes numberOfEpisodes={number_of_episodes} />
        </div>
      </div>
      <div className="mt-4 bg-green-500">
        {showSeasons && <SeasonDetail seasons={seasons} />}
      </div>
    </div>
  );
}
export default SerieDetails;

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ req, params }) => {
  const response = await fetch(
    `http://localhost:3000/api/v1/tmdb/${params.serieId}`
  );
  const data = await response.json();

  return data;
};
