import { customFetch } from './api';

export const getMilestone = async () => {
  const response = await customFetch({
    path: `/milestone`,
    method: 'GET',
  });
  return response;
};
