function SeasonDetail({ seasons }) {
  return (
    <div>
      {seasons.map((season) => (
        <div key={season.id}>
          <p>Name: {season.name}</p>
          <p># {season.season_number}</p>
        </div>
      ))}
    </div>
  );
}
export default SeasonDetail;
