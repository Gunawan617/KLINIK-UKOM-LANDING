export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  excerpt: string;
  description?: string;
  price: number;
  coverImage?: string;
  created_at?: string;
  updated_at?: string;
}
