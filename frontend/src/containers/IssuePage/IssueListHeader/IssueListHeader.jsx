import { Filterbar, Tab, Icon, Dropdown } from '@components/index';
import { assignees, labels, milestones, writers } from '@src/constants/issue';
import styles from './IssueListHeader.module.css';
import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import { PANEL_POSITION } from '@src/constants/dropdown';
import { countIssueStatus } from '@src/utils/countIssueStatus';
import { AssigneeFilter } from '@containers/index';

export const IssueListHeader = ({ issueData, userList }) => {
  const cx = classNames.bind(styles);

  console.log(userList);

  const openIconName = 'alertCircle';
  const closeIconName = 'archive';
  const dropdownWidth = '100px';

  const openIssueNumber = countIssueStatus(issueData).open;
  const closeIssueNumber = countIssueStatus(issueData).close;

  const [isLabelDropdownOpen, setLabelDropdownOpen] = useState(false);
  const labelHandleDropdown = (isOpen) => {
    return () => setLabelDropdownOpen(isOpen);
  };

  const [isMilestoneDropdownOpen, setMilestoneDropdownOpen] = useState(false);
  const mailstoneHandleDropdown = (isOpen) => {
    return () => setMilestoneDropdownOpen(isOpen);
  };

  const [isWriterDropdownOpen, setWriterDropdownOpen] = useState(false);
  const writerHandleDropdown = (isOpen) => {
    return () => setWriterDropdownOpen(isOpen);
  };

  const [selected, setSelected] = useState('필터');

  return (
    <>
      <div className={cx(`header`)}>
        <div className={cx(`check-box`)}>
          <input type="checkbox"></input>
        </div>
        <div className={cx(`header-contents`)}>
          <div className={cx(`issue-contents_column`)}>
            {openIconName && (
              <Icon
                name={openIconName}
                fill="var(--color-light-neutral-text)"
              ></Icon>
            )}
            <div className={cx(`issue-tap`)}>열린 이슈({openIssueNumber})</div>
            {closeIconName && (
              <Icon
                name={closeIconName}
                fill="var(--color-light-neutral-text)"
              ></Icon>
            )}
            <div className={cx(`issue-tap`)}>닫힌 이슈({closeIssueNumber})</div>
          </div>
          <div className={cx(`issue-contents_column`)}>
            <AssigneeFilter userList={userList}></AssigneeFilter>
            <Dropdown
              width={dropdownWidth}
              isOpen={isLabelDropdownOpen}
              btnText={'레이블'}
              hasRadioBtn={true}
              panelPosition={PANEL_POSITION.LEFT}
              toggleOpen={labelHandleDropdown(!isLabelDropdownOpen)}
              options={labels}
              header={'레이블 필터'}
              selected={selected}
              optionOnClick={({ currentTarget }) => {
                const newFilter = options.find(
                  (option) => option.id === currentTarget.id
                ).filter;

                setFilters({ ...initialFilter, ...newFilter });
                setSelected(currentTarget.innerText);
              }}
            ></Dropdown>
            <Dropdown
              width={dropdownWidth}
              isOpen={isMilestoneDropdownOpen}
              btnText={'마일스톤'}
              hasRadioBtn={true}
              panelPosition={PANEL_POSITION.LEFT}
              toggleOpen={mailstoneHandleDropdown(!isMilestoneDropdownOpen)}
              options={milestones}
              header={'마일스톤 필터'}
              selected={selected}
              optionOnClick={({ currentTarget }) => {
                const newFilter = options.find(
                  (option) => option.id === currentTarget.id
                ).filter;

                setFilters({ ...initialFilter, ...newFilter });
                setSelected(currentTarget.innerText);
              }}
            ></Dropdown>
            <Dropdown
              width={dropdownWidth}
              isOpen={isWriterDropdownOpen}
              btnText={'작성자'}
              hasRadioBtn={true}
              panelPosition={PANEL_POSITION.LEFT}
              toggleOpen={writerHandleDropdown(!isWriterDropdownOpen)}
              options={writers}
              header={'작성자 필터'}
              selected={selected}
              optionOnClick={({ currentTarget }) => {
                const newFilter = options.find(
                  (option) => option.id === currentTarget.id
                ).filter;

                setFilters({ ...initialFilter, ...newFilter });
                setSelected(currentTarget.innerText);
              }}
            ></Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};
