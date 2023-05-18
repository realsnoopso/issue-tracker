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

export const assignees = [
  {
    id: 'sarang_daddy',
    profile: 'https://avatars.githubusercontent.com/u/109648042?v=4',
    name: '사랑대디',
  },
  {
    id: 'lvalentine6',
    profile: 'https://avatars.githubusercontent.com/u/77956808?v=4',
    name: '로이',
  },
  {
    id: 'new-pow',
    profile: 'https://avatars.githubusercontent.com/u/103120173?v=4',
    name: '이린',
  },
  {
    id: 'realsnoopso',
    profile: 'https://ca.slack-edge.com/T74H5245A-U04FHDY4DFV-1a828514d33d-512',
    name: '스눕소',
  },
];

export const labels = Object.freeze([
  Object.freeze({
    id: '1',
    contents: 'documentation',
  }),
  Object.freeze({
    id: '2',
    contents: 'bug',
    filter: Object.freeze({ writer: MY_USER_DATA.id }),
  }),
]);

export const writers = Object.freeze([
  {
    id: 'sarang_daddy',
    profile: 'https://avatars.githubusercontent.com/u/109648042?v=4',
    name: '사랑대디',
  },
  {
    id: 'lvalentine6',
    profile: 'https://avatars.githubusercontent.com/u/77956808?v=4',
    name: '로이',
  },
  {
    id: 'new-pow',
    profile: 'https://avatars.githubusercontent.com/u/103120173?v=4',
    name: '이린',
  },
  {
    id: 'realsnoopso',
    profile: 'https://ca.slack-edge.com/T74H5245A-U04FHDY4DFV-1a828514d33d-512',
    name: '스눕소',
  },
]);

export const milestones = Object.freeze([
  Object.freeze({
    id: '1',
    contents: '마일스톤이 없는 이슈',
    filter: Object.freeze({ status: STATUS.OPEN }),
  }),
  Object.freeze({
    id: '2',
    contents: '그룹프로젝트:이슈트레커',
    filter: Object.freeze({ writer: MY_USER_DATA.id }),
  }),
]);
