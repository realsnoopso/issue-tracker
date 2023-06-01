import { useState, useEffect } from 'react';
import { Button, Filterbar, Tab } from '@src/components';
import styles from './IssuePage.module.css';
import classNames from 'classnames/bind';
import { tabDatas, initialFilter, options } from '@constants/issue';
import {
  getIssueList,
  updateCountsToTabInfo,
  filterContext,
} from '@services/issue';
import { IssueList } from '@containers/index';
import { isFilterApplied } from '@services/issue';
import { useNavigate } from 'react-router-dom';

import { getToken } from '@src/services/login';
import { storeContext } from '@stores/index';
import { useContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';

export const IssuePage = () => {
  const cx = classNames.bind(styles);
  const issuePageClassNames = `${cx('issue-page')}`;
  const headerClassNames = `${cx('header')}`;
  const headerLeftClassNames = `${cx('left')}`;
  const headerRightClassNames = `${cx('right')}`;
  const CTAbtn = '이슈 작성';

  const [filters, setFilters] = useState(initialFilter);
  const [issueData, setIssueData] = useState([]);
  const [assigneeList, setAssigneeList] = useState([]);
  const [labelList, setLabelList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [milestoneList, setMilestoneList] = useState([]);
  const [labelAndMilestoneInfo, setLabelAndMilestoneInfo] = useState(tabDatas);
  const [issueCount, setIssueCounts] = useState({ open: 0, closed: 0 });

  const navigate = useNavigate();
  const [user, userDispatch] = useContext(storeContext).user;

  useEffect(() => {
    const token = getToken();
    const { userprofile } = jwtDecode(token);
    console.log(userprofile);
    if (!userprofile) return;

    // userDispatch({ type: 'SET_USER', payload: userprofile });
  }, []);

  useEffect(() => {
    const noneLabel = {
      title: '레이블이 없는 이슈',
      index: -1,
    };

    const noneAssignee = {
      profile: '',
      name: '담당자가 없는 이슈',
      index: -1,
    };

    const noneMilestone = {
      title: '마일스톤이 없는 이슈',
      index: -1,
    };

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
        openIssueMaxPage,
        closeIssueMaxPage,
      } = response;

      setIssueData(issueList);
      setLabelList([noneLabel, ...labelList]);
      setUserList(userList);
      setMilestoneList([noneMilestone, ...milestoneList]);
      setAssigneeList([noneAssignee, ...userList]);

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

  const handleFilterClearBtnClick = () => setFilters(initialFilter);

  const handleWriteBtnClick = () => {
    navigate('/write');
  };

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
            {isFilterApplied(filters, initialFilter) && (
              <Button {...filterClearButtonInfo} />
            )}
          </div>
          <div className={headerRightClassNames}>
            <Tab buttonDatas={labelAndMilestoneInfo}></Tab>
            <Button
              _onClick={handleWriteBtnClick}
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
            assigneeList={assigneeList}
            milestoneList={milestoneList}
            labelList={labelList}
            issueCount={issueCount}
          ></IssueList>
        </div>
      </div>
    </filterContext.Provider>
  );
};
