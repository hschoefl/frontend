import { useLoaderData } from "react-router-dom";

function Configuration() {
  const configurationData = useLoaderData();

  const backdropSizes = configurationData?.images?.backdrop_sizes?.join(", ");
  const logoSizes = configurationData?.images?.logo_sizes?.join(", ");
  const posterSizes = configurationData?.images?.poster_sizes?.join(", ");

  return (
    <div>
      <p className="text-2xl font-semibold">Configuration Data</p>
      <p>Secure Base URL: {configurationData.images.secure_base_url}</p>
      <p>Base URL: {configurationData.images.base_url}</p>
      <p>Backdrop sizes: {backdropSizes}</p>
      <p>Logo sizes: {logoSizes}</p>
      <p>Poster sizes: {posterSizes}</p>
    </div>
  );
}
export default Configuration;

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const response = await fetch(
    "http://localhost:3000/api/v1/tmdb/configuration"
  );
  const data = await response.json();

  return data;
};
