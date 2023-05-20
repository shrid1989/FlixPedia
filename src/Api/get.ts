export const getData = async <T>(requestURL: string): Promise<T[]> => {
  try {
    const fetchURL = `${process.env.REACT_APP_BASE_URL}${requestURL}?api_key=${process.env.REACT_APP_APIKEY}`;

    const result = await fetch(fetchURL);
    const data = await result.json();
    return data;
  } catch {
    return [];
  }
};
