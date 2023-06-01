import styles from './IssueListCheckingHeader.module.css';
import classNames from 'classnames/bind';
import { initialFilter } from '@constants/issue';
import { useContext, useState } from 'react';
import { filterContext } from '@src/services/issue';
import { Dropdown } from '@components/index';

export const IssueListCheckingHeader = ({
  isCheckedStateNumber,
  isCheckedHeader,
  handleHeaderCheckState,
}) => {
  const cx = classNames.bind(styles);

  // 필터
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

  // 드롭다운
  const dropdownWidth = '100px';
  const [selected, setSelected] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownOpen = (isOpen) => {
    return () => setDropdownOpen(isOpen);
  };

  const options = [
    { index: 1, contents: '선택한 이슈 열기' },
    { index: 2, contents: '선택한 이슈 닫기' },
  ];

  const optionOnClick = ({ currentTarget }) => {
    setSelected(currentTarget.innerText);
    console.log(selected);
  };

  return (
    <>
      <div className={cx(`header`)}>
        <div className={cx(`check-box`)}>
          <input
            type="checkbox"
            checked={isCheckedHeader}
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
            hasRadioBtn={false}
            toggleOpen={handleDropdownOpen(!isDropdownOpen)}
            options={options}
            header={'상태 변경'}
            selected={selected}
            optionOnClick={optionOnClick}
          ></Dropdown>
        </div>
      </div>
    </>
  );
};
