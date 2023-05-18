import { PANEL_POSITION } from '@src/constants/dropdown';
import { Dropdown } from '../Dropdown/Dropdown';
import styles from './Filterbar.module.css';
import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import { TextInput } from '../TextInput/TextInput';
import {
  filterContext,
  convertFiltersToStringfiedFilter,
} from '@services/issue';
import { options } from '@constants/issue';
import {
  tabDatas,
  initialFilter,
  FILTER_DEFAULT_TEXT,
} from '@src/constants/issue';

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
  const [inputValue, setInputValue] = useState(FILTER_DEFAULT_TEXT);

  const handleInputChange = ({ target }) => setInputValue(target.value);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState('필터');
  const handleDropdown = (isOpen) => {
    return () => setDropdownOpen(isOpen);
  };

  const optionOnClick = ({ currentTarget }) => {
    const newFilter = options.find(
      (option) => option.id === currentTarget.id
    ).filter;
    const searchInputValue = convertFiltersToStringfiedFilter(filters);

    setFilters({ ...initialFilter, ...newFilter });
    setSelected(currentTarget.innerText);
    setInputValue(searchInputValue);
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
        optionOnClick={optionOnClick}
      ></Dropdown>
      <TextInput
        icon="search"
        style={textinputStyle}
        value={inputValue}
        onChange={handleInputChange}
      ></TextInput>
    </div>
  );
};
