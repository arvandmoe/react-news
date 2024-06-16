import { Article } from "@/types/article";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { useMemo } from "react";

import guardianIcon from "@/assets/guardian.png";
import newsAPIIcon from "@/assets/newsapi.jpeg";
import nytimesIcon from "@/assets/nytimes.png";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = (props: ArticleCardProps) => {
  const { article } = props;

  const image = useMemo(() => {
    if(article.source == 'guardian') return guardianIcon
    else if (article.source == 'newsapi') return newsAPIIcon
    return nytimesIcon
  }, [article])

  return (
    <Link to={article?.url} target="_blank">
      <Card className="flex flex-col rounded-lg overflow-hidden shadow-lg h-full">
        <img
          src={article?.image}
          width={400}
          height={225}
          alt="News Image"
          className="w-full h-48 object-cover"
        />
        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2 line-clamp-2">
              {article?.title}
            </h3>
            <p className="text-gray-600 line-clamp-1">{article?.headline}</p>
          </div>
          <div className="flex items-end w-full justify-between">
            <div className="text-gray-500 text-sm mt-4">
              {article?.createdAt} 2 hours ago
            </div>
            <img src={image} alt="" className="w-6 h-6 rounded-lg" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
