import classNames from 'classnames/bind';
import styles from './Progress.module.css';

const cx = classNames.bind(styles);

export const Progress = ({ percent = 0, label }) => {
  const progressContainerClassNames = `${cx('progress-container')}`;
  const progressFillClassNames = `${cx('progress-fill')}`;
  const labelClassNames = `${cx('label')} typo-label`;
  return (
    <>
      <div className={progressContainerClassNames}>
        <div
          className={progressFillClassNames}
          style={{
            width: `${percent}%`,
            borderRadius: percent === 100 ? `100px` : '100px 0 0 100px',
          }}
        ></div>
      </div>

      {label && <p className={labelClassNames}>{label}</p>}
    </>
  );
};
