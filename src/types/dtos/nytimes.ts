export interface NytimesResponse {
  status: string;
  copyright: string;
  response: NytimesResponseData;
}

interface NytimesResponseData {
  docs: Doc[];
  meta: Meta;
}

interface Meta {
  hits: number;
  offset: number;
  time: number;
}

interface Doc {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: Multimedia[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  subsection_name?: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
  print_section?: string;
  print_page?: string;
}

interface Byline {
  original: string;
  person: Person[];
  organization: null;
}

interface Person {
  firstname: string;
  middlename: null | string;
  lastname: string;
  qualifier: null;
  title: null;
  role: string;
  organization: string;
  rank: number;
}

interface Keyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

interface Headline {
  main: string;
  kicker: null | string;
  content_kicker: null;
  print_headline: null | string;
  name: null;
  seo: null;
  sub: null;
}

interface Multimedia {
  rank: number;
  subtype: string;
  caption: null;
  credit: null;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: Legacy;
  subType: string;
  crop_name: string;
}

interface Legacy {
  xlarge?: string;
  xlargewidth?: number;
  xlargeheight?: number;
  thumbnail?: string;
  thumbnailwidth?: number;
  thumbnailheight?: number;
  widewidth?: number;
  wideheight?: number;
  wide?: string;
}
