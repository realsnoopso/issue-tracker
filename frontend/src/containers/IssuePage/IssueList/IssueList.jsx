import styles from './IssueList.module.css';
import classNames from 'classnames/bind';
import { IssueElement, IssueListHeader } from '@containers/index';

export const IssueList = ({ issueData, assigneeData }) => {
  const cx = classNames.bind(styles);

  return (
    <>
      <div>
        {issueData && (
          <IssueListHeader
            assigneeData={assigneeData}
            issueData={issueData}
          ></IssueListHeader>
        )}
      </div>
      <div>
        <ul>
          {issueData &&
            issueData.map((issue) => {
              const title = issue.title;
              const label = issue.label;
              const issueNumber = issue.issueId;
              const timeStamp = issue.editedTime;
              const writer = issue.writer.name;
              const milesStone = issue.milestone;
              const profile = issue.writer.profile;

              return (
                <li key={issueNumber}>
                  <IssueElement
                    iconName="alertCircle"
                    title={title}
                    label={label}
                    issueNumber={issueNumber}
                    timeStamp={timeStamp}
                    writer={writer}
                    milesStone={milesStone}
                    profile={profile}
                  ></IssueElement>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
