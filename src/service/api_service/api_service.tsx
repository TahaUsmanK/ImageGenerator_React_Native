import {API_URL, APIKEY} from '../../config/env/constants';

const APIService = async (category: any) => {
  try {
    const url = `${API_URL}${category}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': APIKEY,
        Accept: 'image/png',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }

    const imageBlob = await response.blob();
    const reader = new FileReader();
    const imageData = new Promise((resolve, reject) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });
    reader.readAsDataURL(imageBlob);

    return imageData;
  } catch (error) {
    throw error;
  }
};

export default APIService;
