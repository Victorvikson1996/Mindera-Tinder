import axios from 'axios';
import { Cat } from '@/types/cattypes';

const CAT_API = 'https://api.thecatapi.com/v1';
const API_KEY = 'DEMO-API-KEY'; // Replace with your actual API key for production

export async function getCats(): Promise<Cat[]> {
  const res = await axios.get(`${CAT_API}/breeds`, {
    headers: { 'x-api-key': API_KEY }
  });
  // Fetch images for breeds that have none
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

// Votes API: value: 1 = upvote (like), 0 = downvote (dislike)
export async function voteCat(imageId: string, value: number) {
  return axios.post(
    `${CAT_API}/votes`,
    { image_id: imageId, value },
    { headers: { 'x-api-key': API_KEY } }
  );
}
