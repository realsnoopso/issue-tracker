import { Dropdown } from '@components/index';
import { useEffect, useState, useContext } from 'react';
import { PANEL_POSITION } from '@src/constants/dropdown';
import { initialFilter } from '@src/constants/issue';
import { filterContext } from '@src/services/issue';

export const AssigneeFilter = ({ assigneeData }) => {
  const dropdownWidth = '100px';
  const [selected, setSelected] = useState('');

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const [isAssigneeDropdownOpen, setAssigneeDropdownOpen] = useState(false);
  const assigneeHandleDropdown = (isOpen) => {
    return () => setAssigneeDropdownOpen(isOpen);
  };

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
        options={assigneeData}
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
