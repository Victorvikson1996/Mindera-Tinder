export interface CatBreed {
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  image?: {
    url: string;
  };
}

export async function fetchCatBreeds(): Promise<CatBreed[]> {
  const response = await fetch('https://api.thecatapi.com/v1/breeds');
  if (!response.ok) {
    throw new Error('Failed to fetch cat breeds');
  }
  return response.json();
}
