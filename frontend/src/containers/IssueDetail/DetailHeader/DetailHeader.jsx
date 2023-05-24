import styles from './DetailHeader.module.css';
import classNames from 'classnames/bind';
import { InformationTag, ElapsedTime, Button } from '@components/index';

export const DetailHeader = ({ issueObject }) => {
  const cx = classNames.bind(styles);
  const headerClassNames = `${cx('header')}`;
  const issueElClassNames = `${cx('issue-element')}`;
  const titleClassNames = `${cx('title')}`;
  const idClassNames = `${cx('id')}`;
  const issueInfoClassNames = `${cx('issue-info')}`;
  const issueAmendClassNames = `${cx('issue-amend')}`;
  const infoClassNames = `${cx('info')}`;

  const issueTitle = issueObject.title;
  const issueId = issueObject.index;
  const timeStamp = issueObject.createdAt;
  const writer = issueObject.writer?.name;
  const commentLegnth = issueObject.comment?.length;

  // Tag
  const iconName = issueObject.status === 'open' ? 'alertCircle' : 'archive';
  const text = issueObject.status === 'open' ? '열린 이슈' : '닫힌 이슈';

  const amendTitle = () => {
    alert('제목을 편집하고 싶어요');
  };

  const deleteIssue = () => {
    alert('이슈를 닫고 싶어요');
  };

  return (
    <div className={headerClassNames}>
      <div className={issueElClassNames}>
        <div className={titleClassNames}>
          <span className={titleClassNames}>{issueTitle}</span>
          <span className={idClassNames}>#{issueId}</span>
        </div>
        <div className={issueInfoClassNames}>
          <div className="tag">
            <InformationTag
              iconName={iconName}
              text={text}
              backgroundColor={'#007AFF'}
              style="solid"
            ></InformationTag>
          </div>
          <div className={infoClassNames}>
            <div>이 이슈가</div>
            <div>
              <ElapsedTime createdAt={timeStamp}></ElapsedTime>
            </div>
            <div>{writer}님에 의해 작성되었습니다.</div>
            <div>• 코멘트 {commentLegnth}개</div>
          </div>
        </div>
      </div>
      <div className={issueAmendClassNames}>
        <div>
          <Button
            iconName={'edit'}
            text={'제목 편집'}
            type={'outline'}
            color={'blue'}
            width={'120px'}
            btnSize={'m'}
            _onClick={amendTitle}
          ></Button>
        </div>
        <div>
          <Button
            iconName={'edit'}
            text={'이슈 닫기'}
            type={'outline'}
            color={'blue'}
            width={'120px'}
            btnSize={'m'}
            _onClick={deleteIssue}
          ></Button>
        </div>
      </div>
    </div>
  );
};
