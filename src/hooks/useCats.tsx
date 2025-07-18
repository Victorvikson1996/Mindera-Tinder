import { useEffect, useState, useCallback } from 'react';
import { getCats, voteCat } from '@/services/catApi';
import { Cat } from '@/types/cattypes';

export default function useCats() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentCatIndex, setCurrentCatIndex] = useState(0);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getCats();
      setCats(data);
      setLoading(false);
    })();
  }, []);

  const onSwipeLeft = useCallback(async () => {
    if (cats[currentCatIndex]?.image?.id) {
      await voteCat(cats[currentCatIndex].image.id, 0);
    }
    setCurrentCatIndex((idx) => Math.min(idx + 1, cats.length - 1));
  }, [cats, currentCatIndex]);

  const onSwipeRight = useCallback(async () => {
    if (cats[currentCatIndex]?.image?.id) {
      await voteCat(cats[currentCatIndex].image.id, 1);
    }
    setCurrentCatIndex((idx) => Math.min(idx + 1, cats.length - 1));
  }, [cats, currentCatIndex]);

  return { cats, loading, currentCatIndex, onSwipeLeft, onSwipeRight };
}
