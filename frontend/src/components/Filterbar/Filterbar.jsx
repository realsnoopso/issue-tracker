import { PANEL_POSITION } from '@src/constants/dropdown';
import { Dropdown } from '../Dropdown/Dropdown';
import styles from './Filterbar.module.css';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { TextInput } from '../TextInput/TextInput';

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
        optionOnClick={({ currentTarget }) =>
          setSelected(currentTarget.innerText)
        }
      ></Dropdown>
      <TextInput
        placeholder={placeholder}
        icon="search"
        style={textinputStyle}
      ></TextInput>
    </div>
  );
};
