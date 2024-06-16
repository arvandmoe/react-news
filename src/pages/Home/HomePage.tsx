import ArticleCard from "@/components/app/article-card";
import ArticleCarousel from "@/components/app/article-carousel";
import TrendingArticleCard from "@/components/app/trending-article-card";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import useNews from "@/hooks/useNews";

export default function HomePage() {
  const { articles } = useNews();
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-1 gap-y-4">
        <div className="relative w-full px-2 pt-2 mx-auto overflow-hidden">
          <ArticleCarousel articles={articles} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 px-2 md:px-2">
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
