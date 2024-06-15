export interface Article {
  id: string;
  title: string;
  headline: string;
  image?: string;
  url: string;
  createdAt: string;
  section: string;
  sectionId: string;
  source: Source;
}

type Source = 'guardian' | 'newsapi' | 'nytimes'
