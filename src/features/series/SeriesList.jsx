/* eslint-disable react/prop-types */
import SeriesListItem2 from "./SeriesListItem2";

function SeriesList({ title, series }) {
  return (
    <ul className="flex items-center px-5 py-3 flex-col space-y-3">
      <p className="text-2xl font-bold">{title}</p>
      {series.map((serie) => (
        <SeriesListItem2 key={serie.id} serie={serie} />
      ))}
    </ul>
  );
}
export default SeriesList;
