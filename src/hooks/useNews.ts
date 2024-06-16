import { useGetGuardianArticlesQuery } from "@/services/guardian-api";
import { useGetNewsApiArticlesQuery } from "@/services/newsapi-api";
import { useGetNytimesArticlesQuery } from "@/services/nytimes-api";
import { Article } from "@/types/article";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounceValue } from "usehooks-ts";

const useNews = () => {
  const [searchParams] = useSearchParams();

  const searchParamQuery = searchParams.get("q") || "";
  const searchParamSections = searchParams.get("sections") || "";
  const sectionsArr =
    searchParamSections != "" ? searchParamSections.split(",") : [];

  const [debouncedSearchParamQuery] = useDebounceValue(searchParamQuery, 500);

  const queryParams: Partial<SearchPayload> = useMemo(() => {
    return {
      ...(debouncedSearchParamQuery && { query: debouncedSearchParamQuery }),
      ...(Array.isArray(sectionsArr) &&
        sectionsArr.length > 0 && { sections: sectionsArr }),
    };
  }, [debouncedSearchParamQuery, sectionsArr]);

  const { data: guardianData } = useGetGuardianArticlesQuery(queryParams);
  const { data: newapiData } = useGetNewsApiArticlesQuery(queryParams);
  const { data: nytimesData } = useGetNytimesArticlesQuery(queryParams);

  const data: Article[] = [
    ...(Array.isArray(guardianData) ? guardianData : []),
    ...(Array.isArray(newapiData) ? newapiData : []),
    ...(Array.isArray(nytimesData) ? nytimesData : []),
  ];

  return {
    articles: data,
  };
};

export default useNews;
