import styles from './IssueListCheckingHeader.module.css';
import classNames from 'classnames/bind';
import { initialFilter } from '@constants/issue';
import { useContext, useEffect, useState } from 'react';
import { filterContext } from '@src/services/issue';
import { Button } from '@components/index';

export const IssueListCheckingHeader = ({ isChecked, handleHeaderChange }) => {
  const cx = classNames.bind(styles);

  const [filters, setFilters] = useContext(filterContext);

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
    <>
      <div className={cx(`header`)}>
        <div className={cx(`check-box`)}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleHeaderChange}
          ></input>
        </div>
        <Button {...filterClearButtonInfo} />
      </div>
    </>
  );
};
