import { URL } from '@constants/api';

export const customFetch = async ({
  path,
  method,
  body,
  queries,
  hasAuth = false,
}) => {
  const cache = hasAuth ? 'no-store' : 'max-age=3600, private';
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': cache,
  };

  if (hasAuth) headers.Authorization = `apikeys`;
  const queryString =
    '?' + new URLSearchParams(Object.entries(queries)).toString();

  try {
    const data = await fetch(URL + path + queryString, {
      method,
      headers,
      body,
    });
    if (!data.ok) {
      throw Error(data.statusText);
    }
    const result = await data.json();
    if (!result) {
      throw Error('No data');
    }
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default customFetch;
