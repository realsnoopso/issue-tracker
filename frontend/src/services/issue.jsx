import { customFetch } from '@services/api';
import { createContext } from 'react';

export const filterContext = createContext();

export const getIssueList = async ({
  status = 'open',
  page = 0,
  assignee,
  label,
  milestone,
  writer,
  commentBy,
}) => {
  try {
    const response = await customFetch({
      path: '/testApi', // TODO: issues 로 다시 변경
      method: 'GET',
      queries: {
        status,
        page,
        maxPageNum: 10,
        assignee,
        label,
        milestone,
        writer,
        commentBy,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const convertFilterToString = (filter) => {
  return JSON.stringify(filter);
};
