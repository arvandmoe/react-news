import { Article } from "@/types/article";
import { NewsAPIResponse } from "@/types/dtos/newsapi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  transformNewsAPIResponse
} from "./transformers";

export const newsapiApi = createApi({
  reducerPath: "newsapiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env?.VITE_NEWS_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getNewsApiArticles: builder.query<Article[], void>({
      query: () => {
        return {
          url: `api/v1/article/getArticles`,
          method: 'POST',
          body: {
            action: "getArticles",
            keyword: "tech",
            articlesPage: 1,
            articlesCount: 10,
            articlesSortBy: "date",
            articlesSortByAsc: false,
            articlesArticleBodyLen: -1,
            resultType: "articles",
            dataType: ["news"],
            apiKey: import.meta.env?.VITE_NEWS_API_API_KEY,
            forceMaxDataTimeWindow: 31,
          },
        };
      },
      transformResponse(baseQueryReturnValue, meta) {
        return transformNewsAPIResponse(
          baseQueryReturnValue as NewsAPIResponse
        );
      },
    }),
  }),
});

export const { useGetNewsApiArticlesQuery } = newsapiApi;
