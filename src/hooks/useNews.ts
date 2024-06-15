import { useGetGuardianArticlesQuery } from "@/services/guardian-api";
import { useGetNewsApiArticlesQuery } from "@/services/newsapi-api";
import { useGetNytimesArticlesQuery } from "@/services/nytimes-api";
import { Article } from "@/types/article";

const useNews = () => {
  const { data: guardianData } = useGetGuardianArticlesQuery();
  const { data: newapiData } = useGetNewsApiArticlesQuery();
  const { data: nytimesData } = useGetNytimesArticlesQuery();

  const data: Article[] = [
    ...(Array.isArray(guardianData) ? guardianData : []),
    ...(Array.isArray(newapiData) ? newapiData : []),
    ...(Array.isArray(nytimesData) ? nytimesData : []),
  ];

  console.log('nytimesData')
  console.log(guardianData?.length)
  console.log(newapiData?.length)
  console.log(nytimesData?.length)

  console.log(data)

  return {
    articles: data,
  };
};

export default useNews;
