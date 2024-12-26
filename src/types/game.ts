export interface Game {
  id: string;
  title: string;
  namespace: string;
  description: string;
  category: string;
  orientation: 'landscape' | 'portrait';
  quality_score: number;
  width: number;
  height: number;
  date_modified: string;
  date_published: string;
  banner_image: string;
  image: string;
  url: string;
}

export interface GameFeed {
  version: string;
  title: string;
  home_page_url: string;
  feed_url: string;
  next_url: string;
  previous_url: string;
  first_page_url: string;
  last_page_url: string;
  modified: string;
  items: Game[];
}