import styles from './IssueListCheckingHeader.module.css';
import classNames from 'classnames/bind';
import { initialFilter } from '@constants/issue';
import { useContext, useEffect, useState } from 'react';
import { filterContext } from '@src/services/issue';
import { Button, Dropdown } from '@components/index';
import { isCheckedContext } from '@src/services/issue';

export const IssueListCheckingHeader = ({ isCheckedStateNumber }) => {
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

  const [isChecked, setIsChecked] = useContext(isCheckedContext);

  const handleHeaderCheckState = () => {
    setIsChecked(!isChecked);
  };

  const dropdownWidth = '100px';
  const [selected, setSelected] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownOpen = (isOpen) => {
    return () => setDropdownOpen(isOpen);
  };

  return (
    <>
      <div className={cx(`header`)}>
        <div className={cx(`check-box`)}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleHeaderCheckState}
          ></input>
        </div>
        <div className={cx('header-right')}>
          <span className={cx('checked-issue')}>
            {isCheckedStateNumber}개 이슈 선택
          </span>
          {/* <Button {...filterClearButtonInfo} /> */}
          <Dropdown
            width={dropdownWidth}
            isOpen={isDropdownOpen}
            btnText={'상태 수정'}
            hasRadioBtn={true}
            //   panelPosition={PANEL_POSITION.RIGHT}
            toggleOpen={handleDropdownOpen(!isDropdownOpen)}
            //     options={options}
            //   header={header}
            //   selected={selected}
            //   optionOnClick={optionOnClick}
          ></Dropdown>
        </div>
      </div>
    </>
  );
};
