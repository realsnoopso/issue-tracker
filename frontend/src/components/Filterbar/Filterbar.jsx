import { PANEL_POSITION } from '@src/constants/dropdown';
import { Dropdown } from '../Dropdown/Dropdown';
import styles from './Filterbar.module.css';
import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { filterContext } from '@services/issue';
import { options } from '@constants/issue';
import { tabDatas, initialFilter } from '@src/constants/issue';
import { issueList } from '@src/mocks/data';

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
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState('필터');
  const handleDropdown = (isOpen) => {
    return () => setDropdownOpen(isOpen);
  };
  const placeholder = 'is:issue is:open';

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
        optionOnClick={({ currentTarget }) => {
          const newFilter = options.find(
            (option) => option.id === currentTarget.id
          ).filter;
          setFilters({ ...initialFilter, ...newFilter });
          setSelected(currentTarget.innerText);
        }}
      ></Dropdown>
      <TextInput
        placeholder={placeholder}
        icon="search"
        style={textinputStyle}
        value={inputValue}
        _onChange={handleInputChange}
      ></TextInput>
    </div>
  );
};
