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
    setIssueStatus(issueObject.status);
    setIssueTitle(issueObject.title);
    setInputValue(issueObject.title);
  }, [issueObject]);

  const [issueStatus, setIssueStatus] = useState(null);
  const [onUpdateTitle, setOnUpdateTitle] = useState(false);
  const [issueTitle, setIssueTitle] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const ISSUE_OPEN = '이슈 열기';
  const ISSUE_CLOSE = '이슈 닫기';
  const OPENED_ISSUE = '열린 이슈';
  const CLOSED_ISSUE = '닫힌 이슈';

  const iconName = issueStatus === 'open' ? 'alertCircle' : 'archive';
  const iconStyle = issueStatus === 'open' ? 'solid' : 'outline';
  const tagText = issueStatus === 'open' ? OPENED_ISSUE : CLOSED_ISSUE;
  const btnText = issueStatus === 'open' ? ISSUE_CLOSE : ISSUE_OPEN;

  const handleEditStatusBtnOnClick = () => {
    setIssueStatus((prevStatus) => (prevStatus === 'open' ? 'close' : 'open'));
    patchIssueStatus(issueId, issueStatus);
  };

  const onEditTitleBtn = () => {
    setOnUpdateTitle(true);
  };

  const offEditTitleBtn = () => {
    setOnUpdateTitle(false);
  };

  const updateTitle = () => {
    patchIssueTitle(issueId, issueTitle);
    setOnUpdateTitle(false);
  };

  const handleEditTitleBtnOnClick = () => {
    setIssueTitle(inputValue);
    updateTitle();
  };

  return (
    <div className={headerClassNames}>
      {onUpdateTitle ? (
        <DetailUpdateTitle
          issueElClassNames={issueElClassNames}
          titleClassNames={titleClassNames}
          idClassNames={idClassNames}
          issueTitle={issueTitle}
          setIssueTitle={setIssueTitle}
          issueId={issueId}
          issueAmendClassNames={issueAmendClassNames}
          offEditTitleBtn={offEditTitleBtn}
          valueState={[inputValue, setInputValue]}
          handleEditTitleBtnOnClick={handleEditTitleBtnOnClick}
        ></DetailUpdateTitle>
      ) : (
        <DetailTitle
          issueElClassNames={issueElClassNames}
          titleClassNames={titleClassNames}
          idClassNames={idClassNames}
          issueTitle={issueTitle}
          issueId={issueId}
          issueAmendClassNames={issueAmendClassNames}
          onEditTitleBtn={onEditTitleBtn}
          btnText={btnText}
          handleEditStatusBtnOnClick={handleEditStatusBtnOnClick}
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
  onEditTitleBtn,
  btnText,
  handleEditStatusBtnOnClick,
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
              _onClick={onEditTitleBtn}
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
              _onClick={handleEditStatusBtnOnClick}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};
