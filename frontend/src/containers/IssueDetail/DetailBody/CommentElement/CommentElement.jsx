import styles from './CommentElement.module.css';
import classNames from 'classnames/bind';
import {
  ElapsedTime,
  Profile,
  InformationTag,
  Button,
  Icon,
} from '@components/index';

export const CommentElement = ({ issueObject }) => {
  const comments = issueObject.comment;

  const issueWriter = issueObject.writer?.id;
  const commentWriter = comments?.[0].writer.id;

  const writerProfile = comments?.[0].writer.profile;
  const writerName = comments?.[0].writer.name;
  const wroteTime = comments?.[0].createdAt;
  const contents = comments?.[0].contents;

  // style
  const cx = classNames.bind(styles);
  const elementClassNames = `${cx('element')}`;
  const titleClassNames = `${cx('title')}`;
  const leftClassNames = `${cx('left')}`;
  const rightClassNames = `${cx('right')}`;
  const writeClassNames = `${cx('write')}`;
  const editClassNames = `${cx('edit')}`;
  const bodyClassNames = `${cx('body')}`;

  return (
    <div className={elementClassNames}>
      <div className={titleClassNames}>
        <div className={leftClassNames}>
          <Profile url={writerProfile} size={'32'}></Profile>
          <div>{writerName}</div>
          <ElapsedTime createdAt={wroteTime}></ElapsedTime>
        </div>
        <div className={rightClassNames}>
          {issueWriter === commentWriter && (
            <div className={writeClassNames}>
              <InformationTag text={'작성자'} style={'ghost'}></InformationTag>
              <div className={editClassNames}>
                <Icon name={'edit'}></Icon>
                <span>편집</span>
              </div>
            </div>
          )}
          <Icon></Icon>
        </div>
      </div>
      <div className={bodyClassNames}>
        <span>{contents}</span>
      </div>
    </div>
  );
};
