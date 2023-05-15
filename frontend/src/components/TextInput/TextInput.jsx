import { useState } from 'react';
import styles from './TextInput.module.css';
import classNames from 'classnames/bind';
import { Icon } from '@components/index';

export const TextInput = ({
  size,
  states = 'initial',
  label,
  id,
  width,
  placeholder = 'placehoder',
  style,
  icon,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const cx = classNames.bind(styles);

  const textInputMode = size === 'l' ? cx('size-l') : cx('size-s');
  const textInputState = states === 'initial' ? cx('initial') : cx('error');

  const textInputClassName = `${cx(
    'textinput'
  )} ${textInputMode} ${textInputState}`;
  const LabelClassName = `${cx('typo-dropdown-header')} ${cx('label')}`;
  const InputCLassName = `${cx('typo-body')} ${cx('input')}`;
  const placeholderColor = `var(--color-light-neutral-text-weak)`;

  return (
    <div style={{ width, ...style }} className={textInputClassName}>
      {label && (
        <label className={LabelClassName} htmlFor={id}>
          {label}
        </label>
      )}
      {icon && <Icon name={icon} fill={placeholderColor}></Icon>}
      <input
        className={InputCLassName}
        type="text"
        id={id}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};
