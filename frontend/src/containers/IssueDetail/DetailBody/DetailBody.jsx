import styles from './DetailBody.module.css';
import classNames from 'classnames/bind';
import { CommentElement } from '@containers/index';

export const DetailBody = ({ issueObject }) => {
  return (
    <div className="detail-body">
      <div className="detail-comment">
        <CommentElement issueObject={issueObject}></CommentElement>
        <div className="add-comment"></div>
      </div>
      <div className="detail-option"></div>
    </div>
  );
};
