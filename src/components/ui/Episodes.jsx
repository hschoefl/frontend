/* eslint-disable react/prop-types */
function Episodes({ numberOfEpisodes }) {
  return (
    <div className="px-2 py-1 bg-blue-300 font-semibold font-sm items-center justify-center flex gap-1 w-28 rounded-2xl border-2 border-slate-800">
      {numberOfEpisodes}
      <span>{numberOfEpisodes > 1 ? "Episodes" : "Episode"}</span>
    </div>
  );
}
export default Episodes;
