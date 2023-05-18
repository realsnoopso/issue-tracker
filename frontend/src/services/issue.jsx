import { customFetch } from '@services/api';
import { createContext } from 'react';
import { removeEmptyKeyValues } from '@utils/index';

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
      path: '/issues',
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

export const convertFiltersToStringfiedFilter = (filters) => {
  // {"status":"open"}
  // status:open
  const copiedFilters = { ...filters };
  removeEmptyKeyValues(copiedFilters);
  const stringfiedFilter = Object.entries(copiedFilters)
    .map((filter) => {
      const [key, value] = filter;
      return `${key}: ${value}`;
    })
    .join(', ');
  return stringfiedFilter;
};
