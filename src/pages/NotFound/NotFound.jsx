import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>page not found</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default NotFound;
