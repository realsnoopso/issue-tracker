import { MY_USER_DATA } from './user';

export const tabDatas = Object.freeze([
  Object.seal({ text: '레이블', icon: 'label', id: 'label', count: 0 }),
  Object.seal({
    text: '마일스톤',
    icon: 'milestone',
    id: 'milestone',
    count: 0,
  }),
]);

export const STATUS = { OPEN: 'open', CLOSE: 'close' };

export const FILTER_DEFAULT_TEXT = 'is:issue is:open';

export const initialFilter = Object.seal({
  status: 'open',
  page: 0,
  assignee: null,
  label: null,
  milestone: null,
  writer: null,
  commentBy: null,
});

export const options = Object.freeze([
  Object.freeze({
    id: 'open',
    contents: '열린 이슈',
    filter: Object.freeze({ status: STATUS.OPEN }),
  }),
  Object.freeze({
    id: 'mine',
    contents: '내가 작성한 이슈',
    filter: Object.freeze({ writer: MY_USER_DATA.id }),
  }),
  Object.freeze({
    id: 'assigned',
    contents: '나에게 할당된 이슈',
    filter: Object.freeze({ assignee: MY_USER_DATA.id }),
  }),
  Object.freeze({
    id: 'commentBy',
    contents: '내가 댓글을 남긴 이슈',
    filter: Object.freeze({ commentBy: MY_USER_DATA.id }),
  }),
  Object.freeze({
    id: 'close',
    contents: '닫힌 이슈',
    filter: Object.freeze({ status: STATUS.CLOSE }),
  }),
]);
