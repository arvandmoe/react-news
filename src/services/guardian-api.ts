import { GuardianResponse } from "./../types/dtos/guardian";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformGuardianResponse } from "./transformers";
import { Article } from "@/types/article";

export const guardianApi = createApi({
  reducerPath: "guardianApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env?.VITE_GUARDIAN_BASE_URL,
  }),
  endpoints: (builder) => ({
    getGuardianArticles: builder.query<
      Article[],
      Partial<SearchPayload> | void
    >({
      query: (payload) => {
        return {
          url: `search`,
          params: {
            "api-key": import.meta.env?.VITE_GUARDIAN_API_KEY,
            "show-fields": "thumbnail,headline,short-url",
            ...(payload?.query != "" && { q: payload?.query }),
            ...(Array.isArray(payload?.sections) &&
              payload?.sections.length >= 1 && { section: payload?.sections[0] }),
          },
        };
      },
      transformResponse(baseQueryReturnValue, meta) {
        return transformGuardianResponse(
          baseQueryReturnValue as GuardianResponse
        );
      },
    }),
  }),
});

export const { useGetGuardianArticlesQuery } = guardianApi;
