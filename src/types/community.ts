export interface Post {
  id: number;
  name: string;
  age: number;
  city: string;
  content: string;
  imageUrl?: string;
  createdAt: Date;
}

export interface MeListItem {
  name: string;
  age: number;
  city: string;
}
