import styles from './IssueDetailPage.module.css';
import classNames from 'classnames/bind';
import { DetailHeader, DetailBody } from '@containers/index';

export const IssueDetailPage = () => {
  const cx = classNames.bind(styles);
  const issueDetailClassNames = `${cx('issue-detail-page')}`;
  const detailBodyClassNames = `${cx('detail-body')}`;

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
