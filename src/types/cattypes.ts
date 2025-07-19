export interface CatImage {
  id: string;
  url: string;
}

export interface Cat {
  id: string;
  name: string;
  origin: string;
  description?: string;
  image: CatImage;
}
