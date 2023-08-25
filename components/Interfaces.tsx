export interface Post {
  id: number;
  title: string;
  img: string;
  short: string;
  category_id: number;
  created_at: string;
  updated_at: string;
}

export interface PostDetails {
  id: number;
  list_id: number;
  title: string;
  img: string;
  content: string;
  created_at: string;
  updated_at: string;
}
