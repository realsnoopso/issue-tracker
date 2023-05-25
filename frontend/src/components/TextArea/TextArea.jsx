import styles from './TextArea.module.css';
import classNames from 'classnames/bind';
import { Icon } from '@components/Icon/Icon';

export const TextArea = ({
  states = 'initial',
  label,
  id,
  width,
  placeholder = '',
  style,
  value,
  _onChange,
  _onKeyDown,
  type = 'text',
  errorMessage,
}) => {
  const cx = classNames.bind(styles);
  const container = cx('container');

  const textInputState = states === 'initial' ? cx('initial') : cx('error');
  const textInputClassName = `${cx('textinput')} ${textInputState}`;
  const fileContainerClassName = `${cx('file-container')}`;
  const InputClassName = `${cx('typo-body')} ${cx('input')} ${
    label ? cx('with-label') : ''
  }`;
  const InputErrorClassName = `typo-label ${errorMessage ? cx('error') : ''}`;

  return (
    <div className={container} style={{ ...style, width }}>
      <div className={textInputClassName}>
        <textarea
          className={InputClassName}
          type={type}
          id={id}
          value={value}
          onChange={_onChange}
          onKeyDown={_onKeyDown}
          placeholder={placeholder}
        />
        <div className={fileContainerClassName}>
          <Icon name="paperclip"></Icon>파일 첨부하기
        </div>
      </div>
      {errorMessage && <p className={InputErrorClassName}>{errorMessage}</p>}
    </div>
  );
};
