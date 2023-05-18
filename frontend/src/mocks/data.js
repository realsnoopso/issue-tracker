import { MY_USER_DATA } from '@constants/user';

const user1 = { ...MY_USER_DATA };
const user2 = {
  id: 'sarang_daddy',
  profile: 'https://avatars.githubusercontent.com/u/109648042?v=4',
  name: '사랑대디',
  index: 2,
};
const user3 = {
  id: 'lvalentine6',
  profile: 'https://avatars.githubusercontent.com/u/77956808?v=4',
  name: '로이',
  index: 3,
};
const user4 = {
  id: 'new-pow',
  profile: 'https://avatars.githubusercontent.com/u/103120173?v=4',
  name: '이린',
  index: 4,
};

export const issueList = [
  {
    index: 1,
    title: '새 기능 추가',
    comment: [
      {
        writer: user1,
        contents: '새 기능 추가에 대한 의견입니다.',
      },
      {
        writer: user2,
        contents: '새 기능 추가에 대한 또 다른 의견입니다.',
      },
    ],
    writer: user1,
    assignee: user1,
    label: {
      index: 1,
      title: 'UI',
      description: '이것은 UI 레이블입니다.',
      style: 'outline',
    },
    milestone: {
      index: 1,
      title: '사랑이는 귀엽다',
      endDate: '2023-05-16T15:02:07.759Z',
      contents: '이것은 마일스톤 1의 내용입니다.',
      totalIssueNum: 10,
      closedIssueNum: 5,
      isClosed: false,
    },
    status: 'open',
    editedTime: '2023-05-16T15:02:07.759Z',
  },
  {
    index: 2,
    title: '버그 수정',
    comment: [
      {
        writer: user3,
        contents: '버그 수정에 대한 의견입니다.',
      },
    ],
    writer: user1,
    assignee: user1,

    label: {
      index: 2,
      title: 'UI',
      description: '이것은 UI 레이블입니다.',
      backgroundColor: '#8bf6c4',
      style: 'solid',
    },
    milestone: {
      index: 1,
      title: '스눕',
      endDate: '2023-05-16T15:02:07.759Z',
      contents: '이것은 마일스톤 1의 내용입니다.',
      totalIssueNum: 10,
      closedIssueNum: 5,
      isClosed: false,
    },
    status: 'open',
    editedTime: '2021-12-30T09:45:55.773Z',
  },
  {
    index: 3,
    title: 'UI 개선',
    comment: [
      {
        writer: user4,
        contents: 'UI 개선에 대한 의견입니다.',
      },
    ],
    writer: user3,
    assignee: user3,
    label: {
      index: 3,
      title: 'UI',
      description: '이것은 UI 레이블입니다.',
      backgroundColor: 'skyblue',
      style: 'solid',
    },
    milestone: {
      index: 1,
      title: '마일스톤',
      endDate: '2023-05-16T15:02:07.759Z',
      contents: '이것은 마일스톤 1의 내용입니다.',
      totalIssueNum: 10,
      closedIssueNum: 5,
      isClosed: false,
    },
    status: 'open',
    editedTime: '2023-05-16T12:02:07.759Z',
  },
  {
    index: 4,
    title: '새로운 사용자 지정 필드 추가',
    comment: [
      {
        writer: user4,
        contents: '새로운 사용자 지정 필드 추가에 대한 의견입니다.',
      },
    ],
    writer: user4,
    assignee: user4,
    label: {
      index: 4,
      title: 'UI',
      description: '이것은 UI 레이블입니다.',
      backgroundColor: 'blue',
      textColor: 'white',
      style: 'solid',
    },
    milestone: {
      index: 1,
      title: '취업 할 수 있을까',
      endDate: '2023-05-16T15:02:07.759Z',
      contents: '이것은 마일스톤 1의 내용입니다.',
      totalIssueNum: 10,
      closedIssueNum: 5,
      isClosed: false,
    },
    status: 'open',
    editedTime: '2022-08-03T07:52:11.306Z',
  },
  {
    index: 5,
    title: '새로운 사용자 지정 필드 추가',
    comment: [
      {
        writer: user2,
        contents: '새로운 사용자 지정 필드 추가에 대한 의견입니다.',
      },
    ],
    writer: user3,
    assignee: user3,
    label: {
      index: 5,
      title: 'UI',
      description: '이것은 UI 레이블입니다.',
      backgroundColor: 'green',
      textColor: 'white',
      style: 'solid',
    },
    milestone: {
      index: 1,
      title: '프런트 화이팅',
      endDate: new Date(),
      contents: '이것은 마일스톤 1의 내용입니다.',
      totalIssueNum: 10,
      closedIssueNum: 5,
      isClosed: false,
    },
    status: 'open',
    editedTime: '2022-03-11T21:16:39.612Z',
  },
  {
    index: 6,
    title: '검색 기능 개선',
    comment: [
      {
        writer: user2,
        contents: '검색 기능 개선에 대한 의견입니다.',
      },
    ],
    writer: user3,
    assignee: user3,
    label: {
      index: 5,
      title: 'UI',
      description: '이것은 UI 레이블입니다.',
      backgroundColor: 'pink',
      textColor: 'white',
      style: 'solid',
    },
    milestone: {
      index: 1,
      title: '크롱',
      endDate: '2023-05-16T15:02:07.759Z',
      contents: '이것은 마일스톤 1의 내용입니다.',
      totalIssueNum: 10,
      closedIssueNum: 5,
      isClosed: false,
    },
    status: 'open',
    editedTime: '2023-05-12T15:02:07.759Z',
  },
  {
    index: 7,
    title: '새로운 보고서 템플릿 추가',
    comment: [
      {
        writer: user4,
        contents: '새로운 보고서 템플릿 추가에 대한 의견입니다.',
      },
    ],
    writer: user2,
    assignee: user2,
    label: {
      index: 6,
      title: 'UI',
      description: '이것은 UI 레이블입니다.',
      backgroundColor: 'blue',
      textColor: 'white',
      style: 'solid',
    },
    milestone: {
      index: 1,
      title: '리액트 어려워',
      endDate: '2023-05-16T15:02:07.759Z',
      contents: '이것은 마일스톤 1의 내용입니다.',
      totalIssueNum: 10,
      closedIssueNum: 5,
      isClosed: false,
    },
    status: 'open',
    editedTime: '2022-02-01T04:33:06.209Z',
  },
  {
    index: 8,
    title: '새로운 기능에 대한 사용자 테스트 추가',
    comment: [
      {
        writer: user3,
        contents: '새로운 기능에 대한 사용자 테스트에 대한 의견입니다.',
      },
    ],
    writer: user1,
    assignee: user1,
    label: {
      index: 7,
      title: 'UI',
      description: '이것은 UI 레이블입니다.',
      backgroundColor: 'tomato',
      textColor: 'white',
      style: 'outline',
    },
    milestone: {
      index: 1,
      title: '마일스톤이 모에용',
      endDate: '2023-05-16T15:02:07.759Z',
      contents: '이것은 마일스톤 1의 내용입니다.',
      totalIssueNum: 10,
      closedIssueNum: 5,
      isClosed: false,
    },
    status: 'open',
    editedTime: '2023-03-19T09:21:34.126Z',
  },
  {
    index: 9,
    title: '새로운 기능에 대한 성능 테스트 추가',
    comment: [
      {
        writer: user1,
        contents: '새로운 기능에 대한 성능 테스트에 대한 의견입니다.',
      },
    ],
    writer: user4,
    assignee: user4,
    label: {
      index: 9,
      title: 'UI',
      description: '이것은 UI 레이블입니다.',
      backgroundColor: 'blue',
      textColor: 'white',
      style: 'outline',
    },
    milestone: {
      index: 1,
      title: '스눕바보',
      endDate: '2023-05-16T15:02:07.759Z',
      contents: '이것은 마일스톤 1의 내용입니다.',
      totalIssueNum: 10,
      closedIssueNum: 5,
      isClosed: false,
    },
    status: 'close',
    editedTime: '2021-10-25T12:08:49.904Z',
  },
];

export const members = [
  {
    id: 'realsnoopso',
    profile: 'https://ca.slack-edge.com/T74H5245A-U04FHDY4DFV-1a828514d33d-512',
    name: '스눕소',
    index: 1,
  },
  {
    id: 'sarang_daddy',
    profile: 'https://avatars.githubusercontent.com/u/109648042?v=4',
    name: '사랑대디',
    index: 2,
  },
  {
    id: 'lvalentine6',
    profile: 'https://avatars.githubusercontent.com/u/77956808?v=4',
    name: '로이',
    index: 3,
  },
  {
    id: 'new-pow',
    profile: 'https://avatars.githubusercontent.com/u/103120173?v=4',
    name: '이린',
    index: 4,
  },
];

export const labels = [
  {
    index: 1,
    title: '레이블',
    backgroundColor: '#e74c3c',
    style: 'solid',
  },
  {
    index: 2,
    title: '레이블입니다.',
    backgroundColor: '#2ecc71',
    style: 'outline',
  },
  {
    index: 3,
    title: '작소 화이팅',
    backgroundColor: '#3498db',
    style: 'solid',
  },
  {
    index: 4,
    title: '로눅스를 아십니까?',
    backgroundColor: '#f39c12',
    style: 'solid',
  },
];

export const milestones = [
  {
    index: 1,
    title: 'Sample Title 1',
    endDate: '2023-06-20',
    contents: 'Sample contents 1',
    totalIssueNum: 10,
    closedIssueNum: 5,
  },
  {
    index: 2,
    title: 'Sample Title 2',
    endDate: '2023-07-22',
    contents: 'Sample contents 2',
    totalIssueNum: 8,
    closedIssueNum: 3,
  },
  {
    index: 3,
    title: 'Sample Title 3',
    endDate: '2023-09-25',
    contents: 'Sample contents 3',
    totalIssueNum: 15,
    closedIssueNum: 12,
  },
];
