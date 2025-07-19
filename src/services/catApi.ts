import axios from 'axios';
import { Cat } from '@/types/cattypes';

const CAT_API = 'https://api.thecatapi.com/v1';
const API_KEY = process.env.CAT_API_KEY || 'DEMO-API-KEY';

export async function getCats(): Promise<Cat[]> {
  const res = await axios.get(`${CAT_API}/breeds`, {
    headers: { 'x-api-key': API_KEY }
  });

  const cats: Cat[] = await Promise.all(
    res.data.map(async (cat: any) => {
      let image = cat.image;
      if (!image) {
        const imgRes = await axios.get(
          `${CAT_API}/images/search?breed_ids=${cat.id}`
        );
        image = imgRes.data[0];
      }
      return { ...cat, image };
    })
  );
  return cats;
}

export async function voteCat(imageId: string, value: number): Promise<void> {
  return axios.post(
    `${CAT_API}/votes`,
    { image_id: imageId, value },
    { headers: { 'x-api-key': API_KEY } }
  );
}
