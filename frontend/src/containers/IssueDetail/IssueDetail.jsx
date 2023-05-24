import styles from './IssueDetail.module.css';
import classNames from 'classnames/bind';
import { DetailHeader } from '@containers/index';
import { useParams } from 'react-router-dom';

export const IssueDetail = () => {
  const params = useParams();

  const cx = classNames.bind(styles);
  const issueDetailClassNames = `${cx('issue-detail-page')}`;
  const headerClassNames = `${cx('header')}`;
  const headerLeftClassNames = `${cx('left')}`;
  const headerRightClassNames = `${cx('right')}`;

  return (
    <div className={issueDetailClassNames}>
      <h1>Detail Page!</h1>
      <p>{params.issueId}</p>
      <DetailHeader></DetailHeader>
    </div>
  );
};
