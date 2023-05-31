import styles from './DetailBody.module.css';
import classNames from 'classnames/bind';
import { CommentElement } from '@containers/index';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getIssueDetail } from '@src/services/issue';

export const DetailBody = ({}) => {
  const params = useParams();

  const [issueObject, setIssueObject] = useState({});

  useEffect(() => {
    (async () => {
      const issueId = params.issueId;
      const response = await getIssueDetail({ issueId });

      setIssueObject(response);
    })();
  }, []);

  const commentList = issueObject.commentList;
  const issueWriterId = issueObject.writer?.id;

  const addCommentElement = () => {
    return commentList?.map((comment, index) => {
      const commentWriterId = comment?.writer.id;
      const writerProfile = comment?.writer.profileImageUrl;
      const writerName = comment?.writer.name;
      const wroteTime = comment?.createdAt;
      const contents = comment?.contents;

      return (
        <CommentElement
          key={index}
          issueWriterId={issueWriterId}
          commentWriterId={commentWriterId}
          writerProfile={writerProfile}
          writerName={writerName}
          wroteTime={wroteTime}
          contents={contents}
        ></CommentElement>
      );
    });
  };

  return (
    <div className="detail-body">
      <div className="detail-comment">
        {addCommentElement()}
        <div className="add-comment"></div>
      </div>
      <div className="detail-option"></div>
    </div>
  );
};
