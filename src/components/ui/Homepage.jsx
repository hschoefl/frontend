import TopRated from "../../features/series/TopRated";
import MostPopular from "../../features/series/MostPopular";

function Homepage() {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 lg:gap-2 gap-3">
      <div className="">
        <TopRated />
      </div>
      <div className="">
        <MostPopular />
      </div>
    </div>
  );
}

export default Homepage;
