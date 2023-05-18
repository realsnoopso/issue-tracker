import { PANEL_POSITION } from '@src/constants/dropdown';
import { Dropdown } from '../Dropdown/Dropdown';
import styles from './Filterbar.module.css';
import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { filterContext, convertFilterToString } from '@services/issue';
import { initialFilter } from '@src/constants/issue';

export const Filterbar = ({ options }) => {
  const cx = classNames.bind(styles);
  const filterbarClassNames = cx('filterbar');
  const dropdownWidth = '128px';
  const dropdownText = '필터';
  const dropdownHeader = '이슈 헤더';
  const textinputStyle = Object.freeze({
    height: 'calc(40px - 2px)',
    borderRadius: '0 11px 11px 0',
    width: '472px',
  });

  const [filters, setFilters] = useContext(filterContext);
  const [inputValue, setInputValue] = useState('status:open');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(String(0));

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDropdownOptionOnClick = ({ currentTarget }) => {
    const selectedIndex = String(currentTarget.id);
    const selectedFilter = options.find(
      (option) => String(option.index) === selectedIndex
    ).filter;
    const newFilters = { ...initialFilter, ...selectedFilter };
    setFilters(newFilters);
    setInputValue(convertFilterToString(newFilters));
    setSelected(selectedIndex);
  };

  const handleDropdown = (isOpen) => {
    return () => setDropdownOpen(isOpen);
  };

  return (
    <div className={filterbarClassNames}>
      <Dropdown
        width={dropdownWidth}
        isOpen={isDropdownOpen}
        btnText={dropdownText}
        hasRadioBtn={true}
        panelPosition={PANEL_POSITION.LEFT}
        toggleOpen={handleDropdown(!isDropdownOpen)}
        options={options}
        header={dropdownHeader}
        selected={selected}
        optionOnClick={handleDropdownOptionOnClick}
      ></Dropdown>
      <TextInput
        icon="search"
        style={textinputStyle}
        value={inputValue}
        _onChange={handleInputChange}
      ></TextInput>
    </div>
  );
};
