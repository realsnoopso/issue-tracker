import classNames from 'classnames/bind';
import styles from './SideboxElement.module.css';
import { Dropdown } from '@components/index';
import { useState } from 'react';
const cx = classNames.bind(styles);

export const SideboxElement = ({ options }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState('selected option1');
  const handleDropdown = (isOpen) => {
    return () => setDropdownOpen(isOpen);
  };
  const [active, setActive] = useState(null);
  return (
    <Dropdown
      btnText={selected}
      panelPosition="left"
      isOpen={isDropdownOpen}
      toggleOpen={handleDropdown(!isDropdownOpen)}
      options={options}
      selected={selected}
      optionOnClick={({ currentTarget }) =>
        setSelected(currentTarget.innerText)
      }
    ></Dropdown>
  );
};
