import { GuardianResponse } from "./../types/dtos/guardian";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  transformGuardianResponse,
  transformNytimesResponse,
} from "./transformers";
import { Article } from "@/types/article";
import { NytimesResponse } from "@/types/dtos/nytimes";

// Define a service using a base URL and expected endpoints
export const nytimesApi = createApi({
  reducerPath: "nytimesApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env?.VITE_NYT_BASE_URL }),
  endpoints: (builder) => ({
    getNytimesArticles: builder.query<Article[], Partial<SearchPayload> | void>(
      {
        query: (payload) => {
          return {
            url: `svc/search/v2/articlesearch.json`,
            params: {
              ...(payload?.query != "" && { q: payload?.query }),
              "api-key": import.meta.env?.VITE_NYT_API_KEY,
            },
          };
        },
        transformResponse(baseQueryReturnValue, meta) {
          return transformNytimesResponse(
            baseQueryReturnValue as NytimesResponse
          );
        },
      }
    ),
  }),
});

export const { useGetNytimesArticlesQuery } = nytimesApi;
