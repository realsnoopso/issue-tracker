import { useState, useEffect } from 'react';
import { options } from '@constants/issue';
import { Button, Filterbar, Tab } from '@src/components';
import styles from './IssuePage.module.css';
import classNames from 'classnames/bind';
import { tabDatas, initialFilter } from '@src/constants/issue';
import {
  getIssueList,
  updateCountsToTabInfo,
  filterContext,
} from '@services/issue';
import { IssueList } from '@containers/index';

export const IssuePage = () => {
  const cx = classNames.bind(styles);
  const issuePageClassNames = `${cx('issue-page')}`;
  const headerClassNames = `${cx('header')}`;
  const headerLeftClassNames = `${cx('left')}`;
  const headerRightClassNames = `${cx('right')}`;
  const CTAbtn = '이슈 작성';

  const [filters, setFilters] = useState(initialFilter);
  const [issueData, setIssueData] = useState([]);
  const [labelList, setLabelList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [milestoneList, setMilestoneList] = useState([]);
  const [labelAndMilestoneInfo, setLabelAndMilestoneInfo] = useState(tabDatas);
  const [issueCount, setIssueCounts] = useState({ open: 0, closed: 0 });

  useEffect(() => {
    (async () => {
      const queries = {
        ...filters,
      };
      const response = await getIssueList(queries);
      const {
        issueList,
        labelList,
        userList,
        milestoneList,
        openIssueCount,
        closedIssueCount,
      } = response;

      setIssueData(issueList);
      setLabelList(labelList);
      setUserList(userList);
      setMilestoneList(milestoneList);
      setIssueCounts({
        open: openIssueCount,
        closed: closedIssueCount,
      });
      setLabelAndMilestoneInfo(
        updateCountsToTabInfo(
          labelAndMilestoneInfo,
          labelList.length,
          milestoneList.length
        )
      );
    })();
  }, [filters]);

  const isFilterApplied =
    JSON.stringify(filters) !== JSON.stringify(initialFilter);

  const handleFilterClearBtnClick = () => setFilters(initialFilter);

  const filterClearButtonInfo = {
    iconName: 'xSquare',
    type: 'ghost',
    text: '현재의 검색 필터 및 정렬 지우기',
    width: 'fit-content',
    btnSize: 's',
    style: { padding: 0, marginTop: '24px', height: '32px' },
    _onClick: handleFilterClearBtnClick,
  };

  return (
    <filterContext.Provider value={[filters, setFilters]}>
      <div className={issuePageClassNames}>
        <div className={headerClassNames}>
          <div className={headerLeftClassNames}>
            <Filterbar options={options}></Filterbar>
            {isFilterApplied && (
              <Button
                iconName={filterClearButtonInfo.iconName}
                type={filterClearButtonInfo.type}
                text={filterClearButtonInfo.text}
                width={filterClearButtonInfo.width}
                btnSize={filterClearButtonInfo.btnSize}
                style={filterClearButtonInfo.style}
                _onClick={filterClearButtonInfo._onClick}
              />
            )}
          </div>
          <div className={headerRightClassNames}>
            <Tab buttonDatas={labelAndMilestoneInfo}></Tab>
            <Button
              text={CTAbtn}
              btnSize="s"
              color="blue"
              iconName="plus"
            ></Button>
          </div>
        </div>
        <div>
          <IssueList
            issueData={issueData}
            userList={userList}
            milestoneList={milestoneList}
            labelList={labelList}
            issueCount={issueCount}
          ></IssueList>
        </div>
      </div>
    </filterContext.Provider>
  );
};
