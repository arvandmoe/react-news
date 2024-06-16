import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Applayout } from "./components/layouts/AppLayout";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const SearchPage = lazy(() => import("./pages/Search/SearchPage"));
const NoMatchPage = lazy(() => import("./pages/NoMatch"));

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "search",
          element: <SearchPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NoMatchPage />,
    },
  ],
  {
    basename: global.basename,
  }
);
