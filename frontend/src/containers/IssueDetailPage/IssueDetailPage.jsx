import styles from './IssueDetailPage.module.css';
import classNames from 'classnames/bind';
import { DetailHeader, DetailBody } from '@containers/index';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getIssueDetail } from '@src/services/issue';

export const IssueDetailPage = () => {
  const params = useParams();

  const cx = classNames.bind(styles);
  const issueDetailClassNames = `${cx('issue-detail-page')}`;
  const detailBodyClassNames = `${cx('detail-body')}`;

  const [issueObject, setIssueObject] = useState({});

  // useEffect(() => {
  //   (async () => {
  //     const issueId = params.issueId;
  //     const response = await getIssueDetail({ issueId });

  //     setIssueObject(response);
  //   })();
  // }, [params]);

  return (
    <div className={issueDetailClassNames}>
      <div>
        <DetailHeader></DetailHeader>
      </div>
      <div className={detailBodyClassNames}>
        <DetailBody></DetailBody>
      </div>
    </div>
  );
};
