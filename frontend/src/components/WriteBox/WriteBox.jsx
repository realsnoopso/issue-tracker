import classNames from 'classnames/bind';
import styles from './WriteBox.module.css';
import { TextInput } from '@src/components/TextInput/TextInput';
import { debounce } from '@utils/index';
import { useState } from 'react';
const cx = classNames.bind(styles);

export const WriteBox = ({
  titleState,
  contentsState,
  hasTitle,
  setIsCTADisabled,
}) => {
  const [titleValue, setTitleValue] = titleState;
  const [contentsValue, setContentsValue] = contentsState;
  const [showCaption, setShowCaption] = useState(false);

  const preventOverflowMaxNum = (value, maxLength) => {
    if (value?.length >= maxLength) {
      return value.slice(0, maxLength);
    }
    return value;
  };

  const handleTitleOnChange = ({ target }) => {
    const value = target.value;
    const maxLength = 80;

    setTitleValue(preventOverflowMaxNum(value, maxLength));
  };

  const handleContentsOnChange = ({ target }) => {
    const value = target.value;
    const maxLength = 600;
    setContentsValue(preventOverflowMaxNum(value, maxLength));
  };

  const handleContentsOnKeyDown = () => {
    debounce(() => {
      setShowCaption(true);
    }, 0)();
  };

  const handleContentsOnKeyup = () => {
    const labelShowTime = 2000;
    debounce(() => {
      setShowCaption(false);
    }, labelShowTime)();
  };

  const inputContainerClassNames = `${cx('input-container')}`;
  return (
    <div className={inputContainerClassNames}>
      {hasTitle && (
        <TextInput
          _onChange={handleTitleOnChange}
          value={titleValue}
          placeholder="제목"
        ></TextInput>
      )}
      <TextInput
        tagName="textarea"
        style={{ height: '436px', alignItems: 'start', padding: '16px' }}
        hasFileUpload={true}
        label="코멘트를 입력하세요"
        _onChange={handleContentsOnChange}
        value={contentsValue}
        showCaption={showCaption}
        _onKeyDown={handleContentsOnKeyDown}
        _onKeyUp={handleContentsOnKeyup}
      ></TextInput>
    </div>
  );
};
