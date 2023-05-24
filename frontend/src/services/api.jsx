import { URL } from '@constants/api';
import { removeEmptyKeyValues } from '@utils/index';

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

  if (hasAuth) headers.Authorization = `apikeys`; // Todo

  let url = URL + path;
  if (queries) {
    const copiedQuries = removeEmptyKeyValues(queries);
    const queryString = copiedQuries
      ? '?' + new URLSearchParams(Object.entries(copiedQuries)).toString()
      : '';
    url += queryString;
  }

  try {
    const data = await fetch(url, {
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