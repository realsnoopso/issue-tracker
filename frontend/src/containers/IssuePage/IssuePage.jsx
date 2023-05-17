import { useState, useEffect } from 'react';
import { options } from '@constants/issue';
import { Button, Filterbar, Tab } from '@src/components';
import styles from './IssuePage.module.css';
import classNames from 'classnames/bind';
import { tabDatas } from '@src/constants/issue';
import { IssueElement } from '@containers/index';

export const IssuePage = () => {
  const cx = classNames.bind(styles);
  const issuePageClassNames = `${cx('issue-page')}`;
  const headerClassNames = `${cx('header')}`;
  const headerLeftClassNames = `${cx('left')}`;
  const headerRightClassNames = `${cx('right')}`;

  const CTAbtn = '이슈 작성';

  const [issueData, setIssueData] = useState([]);

  const labelAndMileStoneCounts = { label: 3, milestone: 2 }; // 임시 데이터

  useEffect(() => {
    const setTabCounts = () => {
      tabDatas.forEach((_, i) => {
        tabDatas[i].count = labelAndMileStoneCounts[tabDatas[i].id];
      });
    };
    setTabCounts();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/presslist');
      const data = await response.json();
      setIssueData(data);
    };

    fetchData();
  }, []);

  return (
    <div className={issuePageClassNames}>
      <div className={headerClassNames}>
        <div className={headerLeftClassNames}>
          <Filterbar options={options}></Filterbar>
        </div>
        <div className={headerRightClassNames}>
          <Tab buttonDatas={tabDatas}></Tab>
          <Button
            text={CTAbtn}
            btnSize="s"
            color="blue"
            iconName="plus"
          ></Button>
        </div>
      </div>
      <IssueElement iconName="alertCircle" issueData={issueData}></IssueElement>
    </div>
  );
};
