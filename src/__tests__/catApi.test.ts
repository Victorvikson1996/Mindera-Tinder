import { getCats } from '@/services/catApi';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('catApi service', () => {
  it('should fetch cats from API', async () => {
    const mockBreed = { id: '1', name: 'Whiskers' };
    const mockImage = { id: 'img1', url: 'cat.png' };
    mockedAxios.get
      .mockResolvedValueOnce({ data: [mockBreed] })
      .mockResolvedValueOnce({ data: [mockImage] });

    const result = await getCats();
    expect(result).toEqual([{ ...mockBreed, image: mockImage }]);
    expect(mockedAxios.get).toHaveBeenCalledTimes(2);
    expect(mockedAxios.get).toHaveBeenNthCalledWith(
      1,
      expect.stringContaining('/breeds'),
      expect.any(Object)
    );

    expect(mockedAxios.get).toHaveBeenNthCalledWith(
      2,
      expect.stringContaining('/images/search?breed_ids=')
    );
  });

  it('should throw error on API failure', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));
    await expect(getCats()).rejects.toThrow('API Error');
  });

  describe('voteCat', () => {
    it('should post a vote successfully', async () => {
      mockedAxios.post.mockResolvedValueOnce({ data: { message: 'SUCCESS' } });
      const response = await require('../services/catApi').voteCat('img1', 1);
      expect(response.data).toEqual({ message: 'SUCCESS' });
      expect(mockedAxios.post).toHaveBeenCalledWith(
        expect.stringContaining('/votes'),
        { image_id: 'img1', value: 1 },
        expect.objectContaining({ headers: expect.any(Object) })
      );
    });

    it('should throw error on vote failure', async () => {
      mockedAxios.post.mockRejectedValueOnce(new Error('Vote Error'));
      await expect(
        require('../services/catApi').voteCat('img1', 0)
      ).rejects.toThrow('Vote Error');
    });
  });
});
