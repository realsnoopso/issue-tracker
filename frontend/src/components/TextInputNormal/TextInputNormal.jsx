import { useState } from 'react';
import styles from './TextInputNormal.module.css';
import classNames from 'classnames/bind';

export const TextInputNormal = ({
  size,
  states,
  label,
  id,
  width,
  placeholder,
  flexGrow,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const cx = classNames.bind(styles);

  const textInputMode = size === 'l' ? cx('size-l') : cx('size-s');
  const textInputState = states === 'initial' ? cx('initial') : cx('error');

  const textInputClassName = `${cx(
    'TextInput'
  )} ${textInputMode} ${textInputState}`;

  const LabelClassName = `${cx('typo-dropdown-header')} ${cx('label')}`;

  const InputCLassName = `${cx('typo-body')} ${cx('input')}`;

  return (
    <div style={{ width, flexGrow }} className={textInputClassName}>
      <label className={LabelClassName} htmlFor={id}>
        {label}
      </label>
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
