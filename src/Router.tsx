import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Applayout } from "./components/layouts/AppLayout";
import { Spinner } from "./components/ui/spinner";

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
          element: <Suspense fallback={<Spinner />}><HomePage /></Suspense>,
        },
        {
          path: "search",
          element: <Suspense fallback={<Spinner />}><SearchPage /></Suspense>,
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
