import styles from './IssueDetailPage.module.css';
import classNames from 'classnames/bind';
import { DetailHeader, DetailBody } from '@containers/index';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getIssueDetail } from '@src/services/issue';
import { Sidebox } from '@src/components';


export const IssueDetailPage = () => {
  const cx = classNames.bind(styles);
  const issueDetailClassNames = `${cx('issue-detail-page')}`;
  const detailBodyClassNames = `${cx('detail-body')}`;

  const [issueDetail, setIssueDetail] = useState(null);
  const [issueTitle, setIssueTitle] = useState('');
  const [selectedAssignee, setSelectedAssignee] = useState();
  const [selectedLabel, setSelectedLabel] = useState();
  const [selectedMilestone, setSelectedMilstone] = useState();

  useEffect(() => {
    (async () => {
      const issueId = params.issueId;
      const response = await getIssueDetail({ issueId });

      setIssueDetail(response);
      setIssueTitle(response?.title ?? '');
    })();
  }, []);

  useEffect(() => {
    setSelectedAssignee(issueDetail?.assignee);
    setSelectedLabel(issueDetail?.labelList?.[0]);
    setSelectedMilstone(issueDetail?.milestoneList?.[0]);
  }, [issueDetail]);

  const getDetailDatasByComponent = (issueDetail, componentName) => {
    const { index, title, status, createdAt, writer, comment } = issueDetail;
    if (componentName === 'header') {
      return {
        index,
        status,
        createdAt,
        writerName: writer.name,
        commentLegnth: comment?.length,
      };
    }
    if (componentName === 'body') {
      return { writer, comment };
    }
  };
  return (
    <div className={issueDetailClassNames}>
      {issueDetail && (
        <>
          <div>
            <DetailHeader
              {...getDetailDatasByComponent(issueDetail, 'header')}
              titleState={[issueTitle, setIssueTitle]}
            ></DetailHeader>
          </div>
          <div className={detailBodyClassNames}>
            <DetailBody
              {...getDetailDatasByComponent(issueDetail, 'body')}
            ></DetailBody>
            <Sidebox
              isEditable={false}
              selectedAssigneeState={[selectedAssignee, setSelectedAssignee]}
              selectedLabelState={[selectedLabel, setSelectedLabel]}
              selectedMilstoneState={[selectedMilestone, setSelectedMilstone]}
            ></Sidebox>
          </div>
        </>
      )}
    </div>
  );
};
