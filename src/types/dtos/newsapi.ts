export interface NewsAPIResponse {
  articles: Articles;
}

interface Articles {
  page: number;
  pages: number;
  totalResults: number;
  results: Result[];
}

interface Result {
  uri: string;
  lang: string;
  isDuplicate: boolean;
  date: string;
  time: string;
  dateTime: string;
  dateTimePub: string;
  dataType: string;
  sim: number;
  url: string;
  title: string;
  body: string;
  source: Source;
  authors: any[];
  image: string;
  eventUri: null;
  sentiment: number;
  wgt: number;
  relevance: number;
}

interface Source {
  uri: string;
  dataType: string;
  title: string;
}
