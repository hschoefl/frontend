/* eslint-disable react/prop-types */
function Seasons({ numberOfSeasons }) {
  return (
    <div className="px-2 py-1 bg-yellow-300 font-semibold font-sm items-center justify-center flex gap-1 w-28 rounded-2xl border-2 border-slate-800">
      {numberOfSeasons}
      <span>{numberOfSeasons > 1 ? "Seasons" : "Season"}</span>
    </div>
  );
}
export default Seasons;
