import { createBrowserRouter } from "react-router-dom";

import { Root, Main, User, Me, NotFound } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          { index: true, element: <Main /> },
          {
            path: "user/:userId",
            element: <User />,
          },
          {
            path: "me",
            element: <Me />,
          },
        ],
      },
    ],
  },
]);

export default router;
