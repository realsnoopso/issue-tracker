import styles from './IssueDetail.module.css';
import classNames from 'classnames/bind';
import { DetailHeader } from '@containers/index';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getIssueDetail } from '@src/services/issue';
import { response } from 'msw';

export const IssueDetail = () => {
  const params = useParams();

  const cx = classNames.bind(styles);
  const issueDetailClassNames = `${cx('issue-detail-page')}`;

  const [issueObject, setIssueObject] = useState({});

  useEffect(() => {
    (async () => {
      const issueId = params.issueId;
      const response = await getIssueDetail({ issueId });

      setIssueObject(response);
    })();
  }, []);

  return (
    <div className={issueDetailClassNames}>
      <DetailHeader issueObject={issueObject}></DetailHeader>
    </div>
  );
};
