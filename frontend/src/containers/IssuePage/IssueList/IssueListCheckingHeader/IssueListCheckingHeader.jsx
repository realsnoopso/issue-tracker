import styles from './IssueListCheckingHeader.module.css';
import classNames from 'classnames/bind';
import { initialFilter } from '@constants/issue';
import { useContext, useState } from 'react';
import { filterContext } from '@src/services/issue';
import { Dropdown, Button } from '@components/index';
import { getIssueList, patchMultipleIssuesStatus } from '@services/issue';

export const IssueListCheckingHeader = ({
  isCheckedStateNumber,
  isCheckedHeader,
  handleHeaderCheckState,
  setIssueData,
  checkStateObject,
}) => {
  const cx = classNames.bind(styles);

  // 필터
  const [filters, setFilters] = useContext(filterContext);

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

  // FETCH 함수
  const newFetch = async () => {
    const queries = {
      ...filters,
    };
    const response = await getIssueList(queries);
    const { issuesList } = response;

    setIssueData(issuesList);
  };

  const optionOnClick = ({ currentTarget }) => {
    // 다중 선택된 issueIds
    const selectedIssueIds = checkStateObject
      .filter((item) => item.isChecked === true)
      .map((item) => item.issueId);

    const selectedOption = currentTarget.innerText;
    setSelected(selectedOption);

    switch (selectedOption) {
      case '선택한 이슈 열기':
        patchMultipleIssuesStatus(selectedIssueIds, 'OPEN');
        newFetch();
        break;
      case '선택한 이슈 닫기':
        patchMultipleIssuesStatus(selectedIssueIds, 'CLOSE');
        newFetch();
        break;
      default:
        break;
    }
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
        {/* <Button {...filterClearButtonInfo} /> */}
        <div className={cx('header-right')}>
          <span className={cx('checked-issue')}>
            {isCheckedStateNumber}개 이슈 선택
          </span>
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
