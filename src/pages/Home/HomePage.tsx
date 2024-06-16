import ArticleCard from "@/components/app/article-card";
import ArticleCarousel from "@/components/app/article-carousel";
import TrendingArticleCard from "@/components/app/trending-article-card";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { newsCategories } from "@/data/categories";
import useNews from "@/hooks/useNews";
import { slugify } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { articles } = useNews();
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-1 gap-y-4">
        <div className="flex flex-wrap gap-2 px-8 pt-4">
          {newsCategories.map((category, index) => (
            <Link
              to={{
                pathname: "search",
                search: `?sections=${slugify(category)}`,
              }}
            >
              <div
                key={index}
                className={`cursor-pointer px-3 py-1 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-800 hover:bg-gray-200 dark:invert dark:bg-gray-200`}
              >
                {category}
              </div>
            </Link>
          ))}
        </div>
        <div className="relative w-full px-8 mx-auto overflow-hidden">
          <ArticleCarousel articles={articles} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles?.map((article, index) => {
              return <ArticleCard key={index} article={article} />;
            })}
          </div>
          <div className="hidden lg:block">
            <Card className="rounded-lg overflow-hidden shadow-lg">
              <CardHeader className="bg-gray-900 text-white py-3 px-4">
                <h3 className="text-lg font-bold">Trending News</h3>
              </CardHeader>
              <CardContent className="flex flex-col p-4 gap-y-4">
                {articles?.slice(0, 6).map((article, index) => {
                  return <TrendingArticleCard key={index} article={article} />;
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
