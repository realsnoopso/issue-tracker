import styles from './IssueElement.module.css';
import classNames from 'classnames/bind';
import { Icon, InformationTag, Profile, ElapsedTime } from '@components/index';

export const IssueElement = ({ iconName, issueData }) => {
  const cx = classNames.bind(styles);

  return (
    <ul>
      {issueData.map((issue) => {
        const title = issue.title;
        const label = issue.label;
        const issueNumber = issue.issueId;
        const timeStamp = issue.editedTime;
        const writer = issue.writer.name;
        const milesStone = issue.milestone;
        const profile = issue.writer.profile;

        return (
          // 고유 key 값 고민하기..
          <li key={issueNumber}>
            <div className={cx(`issue-element`)}>
              <div className={cx(`check-box`)}>
                <input type="checkbox"></input>
              </div>
              <div className={cx(`issue-contents`)}>
                <div className={cx(`issue-contents_column`)}>
                  <div className={cx(`icon`)}>
                    {iconName && (
                      <Icon
                        name={iconName}
                        fill="var(--color-light-accent-background)"
                      ></Icon>
                    )}
                  </div>
                  <div className="typo-title-medium">{title}</div>
                  {label && (
                    <InformationTag
                      text={label.description}
                      backgroundColor={label.backgroundColor}
                      mode={label.mode}
                    ></InformationTag>
                  )}
                </div>
                <div className={cx(`issue-contents_column`)}>
                  <div className={cx(`issue-number`)}>
                    #{issueNumber} 이 이슈가
                  </div>
                  <div className={cx(`time-Stamp`)}>
                    <ElapsedTime editedTime={timeStamp}></ElapsedTime>
                  </div>
                  <div className={cx(`writer`)}>
                    {writer}님에 의해 작성되었습니다.
                  </div>
                  <div className={cx(`mile-stone`)}>
                    <Icon
                      name="milestone"
                      fill="var(--color-light-neutral-text-weak)"
                    ></Icon>
                    {milesStone?.title}
                  </div>
                </div>
              </div>
              <div className={cx(`profile`)}>
                <Profile url={profile}></Profile>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
