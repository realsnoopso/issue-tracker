import { customFetch } from './api';

export const getLabel = async () => {
  const response = await customFetch({
    path: `/label`,
    method: 'GET',
  });
  return response;
};
