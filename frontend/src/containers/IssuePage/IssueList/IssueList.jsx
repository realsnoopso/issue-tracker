import styles from './IssueList.module.css';
import classNames from 'classnames/bind';
import {
  IssueElement,
  IssueListCheckingHeader,
  IssueListHeader,
} from '@containers/index';
import { useEffect, useState } from 'react';
import { checkContext } from '@src/services/issue';
import { issueList } from '@src/mocks/data';

export const IssueList = ({
  issueData,
  userList,
  assigneeList,
  milestoneList,
  labelList,
  issueCount,
}) => {
  const cx = classNames.bind(styles);
  const containerClassNames = cx('container');
  const contentsClassNames = cx('contents');
  const emptyClassNames = cx('empty');

  // issueList가 필터되면 최초 check상태로 초기화
  const initialCheckState = issueData.reduce((acc, issue) => {
    acc.push({ issueId: issue.index, isChecked: false });
    return acc;
  }, []);

  const [checkStateObject, setCheckStateObject] = useState(initialCheckState);

  useEffect(() => {
    setCheckStateObject(initialCheckState);
  }, [issueData]);

  return (
    <checkContext.Provider value={[checkStateObject, setCheckStateObject]}>
      <div className={containerClassNames}>
        {issueData && (
          <IssueListHeader
            userList={userList}
            assigneeList={assigneeList}
            milestoneList={milestoneList}
            issueCount={issueCount}
            labelList={labelList}
          ></IssueListHeader>
        )}
        <IssueListCheckingHeader></IssueListCheckingHeader>
        <ul className={contentsClassNames}>
          {issueData.length !== 0 ? (
            issueData.map((issue) => {
              const title = issue.title;
              const label = issue.label;
              const issueId = issue.index;
              const timeStamp = issue.createdAt;
              const writer = issue.writer.name;
              const milesStone = issue.milestone;
              const profile = issue.writer.profile;
              const iconName =
                issue.status === 'open' ? 'alertCircle' : 'archive';

              return (
                <li key={issueId}>
                  <IssueElement
                    iconName={iconName}
                    title={title}
                    label={label}
                    issueId={issueId}
                    timeStamp={timeStamp}
                    writer={writer}
                    milesStone={milesStone}
                    profile={profile}
                  ></IssueElement>
                </li>
              );
            })
          ) : (
            <div className={emptyClassNames}>
              검색과 일치하는 결과가 없습니다.
            </div>
          )}
        </ul>
      </div>
    </checkContext.Provider>
  );
};
