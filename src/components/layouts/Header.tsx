import { Icons } from "@/components/icons";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Input } from "../ui/input";
import { useAppDispatch } from "@/stores";
import { updateQuery } from "@/stores/search-slice";
import { useState } from "react";

export function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [q, setQ] = useState("");

  const onSearchClick = () => {
    if (!location.pathname.includes("search")) {
      navigate("/search");
    }
  };

  const search = (query: string) => {
    dispatch(updateQuery({ query }));
    searchParams.set("q", query);
    navigate({ search: searchParams.toString() });
  };
  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-8 flex items-center justify-between">
      <nav className="flex items-center gap-8">
        <Link to="/" className="font-bold text-lg">
          News
        </Link>
        <div className="hidden md:flex gap-4 text-gray-300 font-bold">
          <Link
            to={{ pathname: "/search", search: "?sections=fashion" }}
            className="hover:text-gray-100"
          >
            Fashion
          </Link>
          <Link
            to={{ pathname: "/search", search: "?sections=business" }}
            className="hover:text-gray-100"
          >
            Business
          </Link>
          <Link
            to={{ pathname: "/search", search: "?sections=technology" }}
            className="hover:text-gray-100"
          >
            Technology
          </Link>
          <Link
            to={{ pathname: "/search", search: "?sections=sports" }}
            className="hover:text-gray-100"
          >
            Sports
          </Link>
          <Link
            to={{ pathname: "/search", search: "?sections=art" }}
            className="hover:text-gray-100"
          >
            Art
          </Link>
        </div>
      </nav>
      <div className="relative">
        <Icons.search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search news..."
          className="bg-gray-800 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-transparent"
          onClick={onSearchClick}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            search(e.target.value);
          }}
        />
      </div>
    </header>
  );
}
