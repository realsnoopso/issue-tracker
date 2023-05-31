import styles from './DetailHeader.module.css';
import classNames from 'classnames/bind';
import { InformationTag, ElapsedTime, Button } from '@components/index';
import { useEffect, useState } from 'react';
import { patchIssueTitle, patchIssueStatus } from '@src/services/issue';
import { DetailUpdateTitle, DetailTitle } from '@containers/index';

import { useParams } from 'react-router-dom';
import { getIssueDetail } from '@src/services/issue';

export const DetailHeader = ({}) => {
  const params = useParams();

  const [issueObject, setIssueObject] = useState({});

  useEffect(() => {
    (async () => {
      const issueId = params.issueId;
      const response = await getIssueDetail({ issueId });

      setIssueObject(response);
    })();
  }, []);

  const cx = classNames.bind(styles);
  const headerClassNames = `${cx('header')}`;
  const issueElClassNames = `${cx('issue-element')}`;
  const titleClassNames = `${cx('title')}`;
  const idClassNames = `${cx('id')}`;
  const issueInfoClassNames = `${cx('issue-info')}`;
  const issueAmendClassNames = `${cx('issue-amend')}`;
  const infoClassNames = `${cx('info')}`;

  const issueId = issueObject?.index;
  const timeStamp = issueObject?.createdAt;
  const writer = issueObject?.writer?.name;
  const commentLegnth = issueObject?.comment?.length;

  const [issueStatus, setIssueStatus] = useState(null);
  const [onClickEditTitle, setOnClickEditTitle] = useState(false);
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

  useEffect(() => {
    if (issueObject.status !== undefined) {
      setIssueStatus(issueObject.status);
    }
    if (issueObject.title !== undefined) {
      setIssueTitle(issueObject.title);
    }
    setInputValue(issueObject.title);
  }, [issueObject]);

  const onEditTitleBtn = () => {
    setOnClickEditTitle(true);
  };

  const offEditTitleBtn = () => {
    setOnClickEditTitle(false);
  };

  const handleEditStatusBtnOnClick = () => {
    const newStatus = issueStatus === 'open' ? 'close' : 'open';
    setIssueStatus(newStatus);
  };

  useEffect(() => {
    if (issueStatus !== null) {
      patchIssueStatus(issueId, issueStatus);
    }
  }, [issueStatus]);

  const handleEditTitleBtnOnClick = () => {
    setIssueTitle(inputValue);
    setOnClickEditTitle(false);
  };

  useEffect(() => {
    if (issueTitle !== null) {
      patchIssueTitle(issueId, issueTitle);
    }
  }, [issueTitle]);

  return (
    <div className={headerClassNames}>
      {onClickEditTitle ? (
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