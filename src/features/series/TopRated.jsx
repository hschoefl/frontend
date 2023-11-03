import { useEffect, useState } from "react";
import SeriesList from "./SeriesList";

function TopRated() {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchTopRated = async () => {
      const response = await fetch("http://localhost:3000/api/v1/tmdb/top");
      const data = await response.json();

      setTopRated(data);
    };

    fetchTopRated();
  }, []);

  return (
    <div>
      <SeriesList title="Top Rated" series={topRated} />
    </div>
  );
}
export default TopRated;
