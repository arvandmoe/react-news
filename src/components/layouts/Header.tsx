import { Icons } from "@/components/icons";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";

export function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-8 flex items-center justify-between">
      <nav className="flex items-center gap-8">
        <Link to="/" className="font-bold text-lg">
          News
        </Link>
        <div className="hidden md:flex gap-4 text-gray-300 font-bold">
          <Link to="#" className="hover:text-gray-100">
            Top
          </Link>
          <Link to="#" className="hover:text-gray-100">
            Business
          </Link>
          <Link to="#" className="hover:text-gray-100">
            Technology
          </Link>
          <Link to="#" className="hover:text-gray-100">
            Sports
          </Link>
          <Link to="#" className="hover:text-gray-100">
            Entertainment
          </Link>
        </div>
      </nav>
      <div className="relative">
        <Icons.search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search news..."
          className="bg-gray-800 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-transparent"
        />
      </div>
    </header>
  );
}
