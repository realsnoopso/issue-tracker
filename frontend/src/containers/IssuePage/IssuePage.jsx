import { useState, useEffect, createContext } from 'react';
import { options } from '@constants/issue';
import { Button, Filterbar, Tab } from '@src/components';
import styles from './IssuePage.module.css';
import classNames from 'classnames/bind';
import { tabDatas, initialFilter } from '@src/constants/issue';
import { getIssueList } from '@services/issue';
import { filterContext } from '@services/issue';

export const IssuePage = () => {
  const cx = classNames.bind(styles);
  const issuePageClassNames = `${cx('issue-page')}`;
  const headerClassNames = `${cx('header')}`;
  const headerLeftClassNames = `${cx('left')}`;
  const headerRightClassNames = `${cx('right')}`;

  const CTAbtn = '이슈 작성';

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(initialFilter);

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
    (async () => {
      const queries = {
        ...filters,
      };
      const response = await getIssueList(queries);
      setData(response);
    })();
  }, [filters]);

  console.log(data);

  return (
    <filterContext.Provider value={[filters, setFilters]}>
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
        <ul>
          {data.map((issue, index) => (
            <li key={index}>{issue.title}</li>
          ))}
        </ul>
      </div>
    </filterContext.Provider>
  );
};
