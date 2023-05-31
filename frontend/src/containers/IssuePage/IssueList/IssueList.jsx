import styles from './IssueList.module.css';
import classNames from 'classnames/bind';
import {
  IssueElement,
  IssueListCheckingHeader,
  IssueListHeader,
} from '@containers/index';
import { useEffect, useState } from 'react';
import { checkContext, isCheckedContext } from '@src/services/issue';

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

  const [isChecked, setIsChecked] = useState(false);
  const [checkStateObject, setCheckStateObject] = useState([]);

  // 필터된 IssueList 체크상태를 false로 초기화
  // 체크된 IssueElement 체크 상태를 업데이트
  useEffect(() => {
    const initialCheckState = issueData.reduce((acc, issue) => {
      acc.push({ issueId: issue.index, isChecked: isChecked });
      return acc;
    }, []);

    setCheckStateObject(initialCheckState);
  }, [isChecked, issueData]);

  console.log(checkStateObject);

  const isCheckedStateNumber = checkStateObject.filter(
    (item) => item.isChecked === true
  ).length;

  return (
    <isCheckedContext.Provider value={[isChecked, setIsChecked]}>
      <div className={containerClassNames}>
        {issueData &&
          (isCheckedStateNumber === 0 ? (
            <IssueListHeader
              userList={userList}
              assigneeList={assigneeList}
              milestoneList={milestoneList}
              issueCount={issueCount}
              labelList={labelList}
            ></IssueListHeader>
          ) : (
            <IssueListCheckingHeader
              isCheckedStateNumber={isCheckedStateNumber}
            ></IssueListCheckingHeader>
          ))}
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
                  <checkContext.Provider
                    value={[checkStateObject, setCheckStateObject]}
                  >
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
                  </checkContext.Provider>
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
    </isCheckedContext.Provider>
  );
};
