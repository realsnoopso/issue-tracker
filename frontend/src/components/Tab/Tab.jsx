import styles from './Tab.module.css';
import classNames from 'classnames/bind';
import { Button } from '@components/index';

export const Tab = ({ buttonDatas, active, _onClick }) => {
  const cx = classNames.bind(styles);
  const tabClassNames = `${cx('tab')}`;

  const getBtnBgColor = (id, active) => {
    const isActive = id === active;
    return isActive ? 'var(--color-light-neutral-background-bold)' : 'inherit';
  };
  const btnWidth = '160px';

  return (
    <div className={tabClassNames}>
      {buttonDatas.map((data) => {
        const text = `${data.text}(${data.count ?? ''})`;
        return (
          <Button
            style={{ backgroundColor: getBtnBgColor(data.text, active) }}
            key={data.text}
            text={text}
            width={btnWidth}
            iconName={data.icon ?? false}
            _onClick={_onClick}
            btnSize="m"
            type="ghost"
            id={data.text}
          ></Button>
        );
      })}
    </div>
  );
};