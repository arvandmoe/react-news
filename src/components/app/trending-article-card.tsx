import { Article } from "@/types/article";
import { Link } from "react-router-dom";

interface TrendingArticleCardProps {
  article: Article;
}

const TrendingArticleCard = (props: TrendingArticleCardProps) => {
  const { article } = props;
  return (
    <Link to={article?.url} target="_blank">
      <div className="flex items-start gap-4 mb-4 last:mb-0">
        <img
          src={
            article?.image ??
            "https://qsuper.qld.gov.au/-/media/images/qsuperpw/news/news-placeholder-imagesss.jpg"
          }
          width={80}
          height={80}
          alt="Trending News Image"
          className="rounded-md w-20 h-20 object-cover mt-1"
        />
        <div>
          <h4 className="text-lg font-bold mb-1">{article?.title}</h4>
          <p className="text-gray-600 text-sm">{article?.headline}</p>
          <div className="text-gray-500 text-xs mt-2">3 hours ago</div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingArticleCard;
