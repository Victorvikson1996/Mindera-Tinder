export interface Cat {
  id: string;
  name: string;
  origin: string;
  image: {
    id: string;
    url: string;
  };
  description?: string;
  [key: string]: any;
}
