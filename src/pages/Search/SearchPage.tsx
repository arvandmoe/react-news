import ArticleCard from "@/components/app/article-card";
import { sections } from "@/data/sections";
import useNews from "@/hooks/useNews";
import { cn, slugify } from "@/lib/utils";
import { Link, useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const { articles } = useNews();
  const [searchParams] = useSearchParams();
  const searchParamSections = searchParams.get("sections") || "";
  const sectionsArr = searchParamSections.split(",");

  const addSection = (newSection: string) => {
    const currentSections = searchParamSections ? searchParamSections.split(",") : [];
    if (!currentSections.includes(newSection)) {
      currentSections.push(newSection);
    }
    return currentSections.join(",");
  };

  const removeSection = (sectionToRemove: string) => {
    const currentSections = searchParamSections ? searchParamSections.split(",") : [];
    const updatedSections = currentSections.filter(section => section !== sectionToRemove);
    return updatedSections.join(",");
  };

  return (
    <div className="px-2">
      <div className="hidden lg:flex flex-wrap gap-2 py-2 line-clamp-2">
        {sections
          .filter((section) => sectionsArr?.includes(slugify(section)))
          .map((section, index) => (
            <Link
              to={{
                pathname: "/search",
                search: `?sections=${removeSection(slugify(section))}`,
              }}
            >
              <div
                key={index}
                className={cn(
                  `cursor-pointer px-3 py-1 rounded-full text-xs font-medium transition-colors dark:invert dark:bg-gray-200`,
                  sectionsArr?.includes(slugify(section))
                    ? "bg-gray-800 text-gray-100"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                )}
              >
                {section}
              </div>
            </Link>
          ))}
        {sections
          .filter((section) => !sectionsArr?.includes(slugify(section)))
          .map((section, index) => (
            <Link
              to={{
                pathname: "/search",
                search: `?sections=${addSection(slugify(section))}`,
              }}
            >
              <div
                key={index}
                className={cn(
                  `cursor-pointer px-3 py-1 rounded-full text-xs font-medium transition-colors dark:invert dark:bg-gray-200`,
                  sectionsArr?.includes(slugify(section))
                    ? "bg-gray-800 text-gray-100"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                )}
              >
                {section}
              </div>
            </Link>
          ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-2">
        {articles?.map((article, index) => {
          return <ArticleCard key={index} article={article} />;
        })}
      </div>
    </div>
  );
}
