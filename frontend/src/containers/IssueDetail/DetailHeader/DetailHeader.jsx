import styles from './DetailHeader.module.css';
import classNames from 'classnames/bind';
import { InformationTag, ElapsedTime, Button } from '@components/index';
import { useEffect, useState } from 'react';
import { patchIssueTitle, patchIssueStatus } from '@src/services/issue';
import { DetailUpdateTitle } from './DetailUpdateTitle/DetailUpdateTitle';

export const DetailHeader = ({ issueObject }) => {
  const cx = classNames.bind(styles);
  const headerClassNames = `${cx('header')}`;
  const issueElClassNames = `${cx('issue-element')}`;
  const titleClassNames = `${cx('title')}`;
  const idClassNames = `${cx('id')}`;
  const issueInfoClassNames = `${cx('issue-info')}`;
  const issueAmendClassNames = `${cx('issue-amend')}`;
  const infoClassNames = `${cx('info')}`;

  const issueId = issueObject.index;
  const timeStamp = issueObject.createdAt;
  const writer = issueObject.writer?.name;
  const commentLegnth = issueObject.comment?.length;

  useEffect(() => {
    setStatus(issueObject.status);
    setIssueTitle(issueObject.title);
    setValue(issueObject.title);
  }, [issueObject]);

  const [status, setStatus] = useState(null);
  const [onUpdate, setOnUpdate] = useState(false);
  const [issueTitle, setIssueTitle] = useState(null);
  const [value, setValue] = useState('');

  const ISSUE_OPEN = '이슈 열기';
  const ISSUE_CLOSE = '이슈 닫기';
  const OPENED_ISSUE = '열린 이슈';
  const CLOSED_ISSUE = '닫힌 이슈';

  const iconName = status === 'open' ? 'alertCircle' : 'archive';
  const iconStyle = status === 'open' ? 'solid' : 'outline';
  const tagText = status === 'open' ? OPENED_ISSUE : CLOSED_ISSUE;
  const btnText = status === 'open' ? ISSUE_CLOSE : ISSUE_OPEN;

  const issueTogle = () => {
    setStatus((prevStatus) => (prevStatus === 'open' ? 'close' : 'open'));
    patchIssueStatus(issueId, status);
  };

  const amendTitle = () => {
    setOnUpdate(true);
  };

  const amendCancel = () => {
    setOnUpdate(false);
  };

  const updateTitle = () => {
    patchIssueTitle(issueId, issueTitle);
    setOnUpdate(false);
  };

  const handleEditBtnOnClick = () => {
    setIssueTitle(value);
    updateTitle();
  };

  return (
    <div className={headerClassNames}>
      {onUpdate ? (
        <DetailUpdateTitle
          issueElClassNames={issueElClassNames}
          titleClassNames={titleClassNames}
          idClassNames={idClassNames}
          issueTitle={issueTitle}
          setIssueTitle={setIssueTitle}
          issueId={issueId}
          issueAmendClassNames={issueAmendClassNames}
          amendCancel={amendCancel}
          valueState={[value, setValue]}
          _onClick={handleEditBtnOnClick}
        ></DetailUpdateTitle>
      ) : (
        <DetailTitle
          issueElClassNames={issueElClassNames}
          titleClassNames={titleClassNames}
          idClassNames={idClassNames}
          issueTitle={issueTitle}
          issueId={issueId}
          issueAmendClassNames={issueAmendClassNames}
          amendTitle={amendTitle}
          btnText={btnText}
          issueTogle={issueTogle}
        ></DetailTitle>
      )}
      <div className={issueInfoClassNames}>
        <div className="tag">
          <InformationTag
            iconName={iconName}
            text={tagText}
            backgroundColor={'#007AFF'}
            style={iconStyle}
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
  );
};

const DetailTitle = ({
  issueElClassNames,
  titleClassNames,
  idClassNames,
  issueTitle,
  issueId,
  issueAmendClassNames,
  amendTitle,
  btnText,
  issueTogle,
}) => {
  return (
    <>
      <div className={issueElClassNames}>
        <div className={titleClassNames}>
          <span className={titleClassNames}>{issueTitle}</span>
          <span className={idClassNames}>#{issueId}</span>
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
              text={btnText}
              type={'outline'}
              color={'blue'}
              width={'120px'}
              btnSize={'m'}
              _onClick={issueTogle}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};
