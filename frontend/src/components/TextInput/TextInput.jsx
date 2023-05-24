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
  placeholder = '',
  style,
  icon,
  value,
  _onChange,
  _onKeyDown,
  type = 'text',
}) => {
  const cx = classNames.bind(styles);

  const textInputMode = size === 'l' ? cx('size-l') : cx('size-s');
  const textInputState = states === 'initial' ? cx('initial') : cx('error');
  const isValueFilledWithLabel = label && Boolean(value);

  const textInputClassName = `${cx(
    'textinput'
  )} ${textInputMode} ${textInputState}`;
  const LabelClassName = `${cx('typo-dropdown-header')} ${cx('label')} ${
    isValueFilledWithLabel ? cx('filled') : ''
  }`;
  const InputCLassName = `${cx('typo-body')} ${cx('input')} ${
    label ? cx('with-label') : ''
  }`;
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
        type={type}
        id={id}
        value={value}
        onChange={_onChange}
        onKeyDown={_onKeyDown}
        placeholder={placeholder}
      />
    </div>
  );
};
