import { GuardianResponse } from "@/types/dtos/guardian";
import { Article } from "@/types/article";
import { NewsAPIResponse } from "@/types/dtos/newsapi";
import { NytimesResponse } from "@/types/dtos/nytimes";

export function transformGuardianResponse(
  guardianResponse: GuardianResponse
): Article[] {
  return guardianResponse.response.results.map((result) => ({
    id: result.id,
    title: result.webTitle,
    headline: result.fields.headline,
    image: result.fields.thumbnail,
    url: result.webUrl,
    createdAt: result.webPublicationDate,
    section: result.sectionName,
    sectionId: result.sectionId,
    source: "guardian",
  }));
}

export function transformNewsAPIResponse(
  newsAPIResponse: NewsAPIResponse
): Article[] {
  return newsAPIResponse.articles.results.map((result) => ({
    id: result.uri,
    title: result.title,
    headline: result.body[0],
    image: result.image,
    url: result.url,
    createdAt: result.dateTimePub,
    section: result.source.title,
    sectionId: result.source.uri,
    source: "newsapi",
  }));
}

export function transformNytimesResponse(
  nytimesResponse: NytimesResponse
): Article[] {
  return nytimesResponse.response.docs.map((doc) => ({
    id: doc._id,
    title: doc.headline.main,
    headline: doc.snippet,
    image: doc.multimedia.find((media) => media.subtype === "xlarge")?.url
      ? "https://www.nytimes.com/" +
        doc.multimedia.find((media) => media.subtype === "xlarge")?.url
      : undefined,
    url: doc.web_url,
    createdAt: doc.pub_date,
    section: doc.section_name,
    sectionId: doc.uri,
    source: "nytimes",
  }));
}
