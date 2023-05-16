import styles from './IssueElement.module.css';
import classNames from 'classnames/bind';
import { Icon, InformationTag, Profile } from '@components/index';

export const IssueElement = ({
  iconName,
  title,
  label,
  issueNumber,
  timeStamp,
  writer,
  mileStone,
  profile,
}) => {
  const cx = classNames.bind(styles);

  return (
    <>
      <div className={cx(`issue-element`)}>
        <input className={cx(`check-box`)} type="checkbox"></input>
        <div className={cx(`issue-contents`)}>
          <div className={cx(`issue-contents_column`)}>
            <div className="icon">
              {iconName && (
                <Icon
                  name={iconName}
                  fill="var(--color-light-accent-background)"
                ></Icon>
              )}
            </div>
            <div className="typo-title-medium">{title}</div>
            <InformationTag text={label} mode="neutral"></InformationTag>
          </div>
          <div className={cx(`issue-contents_column`)}>
            <div className="issue-number">{issueNumber}</div>
            <div className="time-Stamp">{timeStamp}</div>
            <div className="writer">{writer}님에 의해 작성되었습니다.</div>
            <div className={cx(`mile-stone`)}>
              <Icon
                name="milestone"
                fill="var(--color-light-neutral-text-weak)"
              ></Icon>

              {mileStone}
            </div>
          </div>
        </div>
        <div className={cx(`profile`)}>
          <Profile url={profile}></Profile>
        </div>
      </div>
    </>
  );
};
