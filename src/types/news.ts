export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: 'Latest' | 'Company' | 'Industry' | 'Tender';
  summary: string;
  image: string;
  content?: string;
}

export interface PartyNewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  image: string;
  content?: string;
}
