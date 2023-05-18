import { Dropdown } from '@components/index';
import { useEffect, useState, useContext } from 'react';
import { PANEL_POSITION } from '@src/constants/dropdown';
import { initialFilter } from '@src/constants/issue';
import { filterContext } from '@src/services/issue';
import { customFetch } from '@src/services/api';

export const AssigneeFilter = ({ userList }) => {
  const dropdownWidth = '100px';
  const [selected, setSelected] = useState('');

  const [isAssigneeDropdownOpen, setAssigneeDropdownOpen] = useState(false);
  const assigneeHandleDropdown = (isOpen) => {
    return () => setAssigneeDropdownOpen(isOpen);
  };
  useEffect(() => {
    console.log('assigneeFilter', userList);
  }, [userList]);

  // const [assigneeData, setAssigneeData] = useState();

  // useEffect(() => {
  //   (async () => {
  //     const assigneeData = await customFetch({
  //       path: '/members',
  //       method: 'GET',
  //     });
  //     setAssigneeData(assigneeData);
  //   })();
  // }, []);

  const [filters, setFilters] = useContext(filterContext);

  return (
    <>
      <Dropdown
        width={dropdownWidth}
        isOpen={isAssigneeDropdownOpen}
        btnText={'담당자'}
        hasRadioBtn={true}
        panelPosition={PANEL_POSITION.LEFT}
        toggleOpen={assigneeHandleDropdown(!isAssigneeDropdownOpen)}
        options={userList}
        header={'담당자 필터'}
        selected={selected}
        optionOnClick={({ currentTarget }) => {
          const index = currentTarget.id;
          setFilters({ ...filters, assignee: index });
          setSelected(index);
        }}
      ></Dropdown>
    </>
  );
};
