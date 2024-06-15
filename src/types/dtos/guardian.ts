export interface GuardianResponse {
  response: GuardianResponseData;
}

interface GuardianResponseData {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  results: Result[];
}

interface Result {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields: Fields;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

interface Fields {
  headline: string;
  shortUrl: string;
  thumbnail: string;
}
