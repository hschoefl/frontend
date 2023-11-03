import { useEffect, useState } from "react";
import SeriesList from "./SeriesList";

function MostPopular() {
  const [mostPopular, setMostPopular] = useState([]);

  useEffect(() => {
    const fetchTopRated = async () => {
      const response = await fetch("http://localhost:3000/api/v1/tmdb/popular");
      const data = await response.json();
      setMostPopular(data);
    };

    fetchTopRated();
  }, []);

  return (
    <div>
      <SeriesList title="Most Popular" series={mostPopular} />
    </div>
  );
}
export default MostPopular;
