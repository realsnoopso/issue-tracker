import { rest } from 'msw';
import { URL } from '@constants/api';
import { issueList, members } from './data';
import { removeEmptyKeyValues } from '@utils/index';

export const handlers = [
  rest.post('https://api.example.com/users', (req, res, ctx) => {
    const newUser = req.body;
    return res(
      ctx.status(201),
      ctx.json({
        message: 'User created successfully',
        user: newUser,
      })
    );
  }),

  rest.get(`${URL}/issues`, (req, res, ctx) => {
    const query = req.url.searchParams;
    const status = query.get('status');
    const page = query.get('page');
    const maxPageNum = query.get('maxPageNum');
    const assignee = query.get('assignee');
    const label = query.get('label');
    const milestone = query.get('milestone');
    const writer = query.get('writer');
    const commentBy = query.get('commentBy');

    const queries = {
      status,
      page,
      maxPageNum,
      assignee,
      label,
      milestone,
      writer,
      commentBy,
    };

    removeEmptyKeyValues(queries);

    const filterQueries = Object.entries(queries).filter((query) => {
      const [key, _] = query;
      const isPageQuery = key === 'page' || key === 'maxPageNum';
      return !isPageQuery;
    });

    const filteredIssueList = filterQueries.reduce((filteredResult, query) => {
      const [key, value] = query;
      if (key === 'commentBy') {
        return filteredResult
          .map((issue) => {
            const filteredComments = issue['comment'].filter(
              (comment) => comment.writer.id === value
            );
            if (filteredComments.length > 0) {
              return { ...issue, comment: filteredComments };
            }
            return null;
          })
          .filter((issue) => issue !== null);
      }

      if (
        key === 'writer' ||
        key === 'assignee' ||
        key === 'label' ||
        key === 'milestone'
      ) {
        return filteredResult.filter((issue) => issue[key]?.id === value);
      }
      return filteredResult.filter((issue) => issue[key] === value);
    }, issueList);

    const startCount = Number(page) * Number(maxPageNum);
    const endCount = (Number(page) + 1) * Number(maxPageNum);

    const pagenationedIssueList = filteredIssueList.slice(startCount, endCount);

    return res(ctx.status(200), ctx.json(pagenationedIssueList));
  }),

  rest.get(`http://dev.com/members`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(members));
  }),
];
