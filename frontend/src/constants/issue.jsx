export const tabDatas = Object.freeze([
  Object.seal({ text: '레이블', icon: 'label', id: 'label', count: 0 }),
  Object.seal({
    text: '마일스톤',
    icon: 'milestone',
    id: 'milestone',
    count: 0,
  }),
]);

export const options = Object.freeze([
  Object.freeze({
    id: 'open',
    contents: '열린 이슈',
  }),
  Object.freeze({
    id: 'mine',
    contents: '내가 작성한 이슈',
  }),
  Object.freeze({
    id: 'assigned',
    contents: '나에게 할당된 이슈',
  }),
  Object.freeze({
    id: 'comment',
    contents: '내가 댓글을 남긴 이슈',
  }),
  Object.freeze({
    id: 'closed',
    contents: '닫힌 이슈',
  }),
]);
