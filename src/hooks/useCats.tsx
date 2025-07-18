import { useEffect, useState, useCallback, useRef } from 'react';
import { getCats, voteCat } from '@/services/catApi';
import { Cat } from '@/types/cattypes';

export default function useCats() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentCatIndex, setCurrentCatIndex] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const hasVoted = useRef<Set<string>>(new Set());

  const fetchCats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCats();
      setCats(data);
      setCurrentCatIndex(0);
      hasVoted.current.clear();
    } catch (err) {
      setError('Failed to fetch cats. Please try again.');
      console.error('Failed to fetch cats:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  const vote = useCallback(
    async (value: 0 | 1) => {
      const currentCat = cats[currentCatIndex];
      const imageId = currentCat?.image?.id;
      if (!imageId || hasVoted.current.has(imageId)) {
        return;
      }
      try {
        const response = await voteCat(imageId, value);
        console.log('Vote API response:', response?.data); // 👈 log response here
        hasVoted.current.add(imageId);
        console.log(
          `Voted for cat ${imageId}: ${value === 1 ? 'Like' : 'Nope'}`
        );
      } catch (err) {
        setError('Voting failed. Please try again.');
        console.error('Voting failed:', err);
      }
    },
    [cats, currentCatIndex]
  );

  const goToNextCat = useCallback(() => {
    setCurrentCatIndex((idx) => {
      const nextIndex = idx + 1;
      if (nextIndex >= cats.length - 3) {
        fetchCats();
      }
      return Math.min(nextIndex, cats.length - 1);
    });
  }, [cats.length, fetchCats]);

  const onSwipeLeft = useCallback(async () => {
    await vote(0);
    goToNextCat();
  }, [vote, goToNextCat]);

  const onSwipeRight = useCallback(async () => {
    await vote(1);
    goToNextCat();
  }, [vote, goToNextCat]);

  const refresh = useCallback(() => {
    fetchCats();
  }, [fetchCats]);

  const currentCat = cats[currentCatIndex];

  return {
    cats,
    loading,
    error,
    currentCatIndex,
    currentCat,
    onSwipeLeft,
    onSwipeRight,
    refresh
  };
}
