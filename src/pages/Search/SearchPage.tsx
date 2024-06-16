import ArticleCard from "@/components/app/article-card";
import useNews from "@/hooks/useNews";

export default function SearchPage() {
  const { articles } = useNews();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-2">
        {articles?.map((article, index) => {
          return <ArticleCard key={index} article={article} />;
        })}
      </div>
    </>
  );
}
