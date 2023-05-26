import { customFetch } from './api';

export const getMember = async () => {
  const response = await customFetch({
    path: `/members`,
    method: 'GET',
  });
  return response;
};
