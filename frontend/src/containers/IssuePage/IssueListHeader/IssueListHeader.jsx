import { Icon } from '@components/index';
import styles from './IssueListHeader.module.css';
import classNames from 'classnames/bind';
import { FilterElement } from './FilterElement/FilterElement';
import { FILTER_KEYS } from '@constants/issue';

export const IssueListHeader = ({
  userList,
  milestoneList,
  issueCount,
  labelList,
  filters,
}) => {
  const cx = classNames.bind(styles);

  const openIconName = 'alertCircle';
  const closeIconName = 'archive';
  const openIssueNumber = issueCount.open;
  const closeIssueNumber = issueCount.closed;

  const convertListToOptions = (list, contentsKey) => {
    return list.map((element) => {
      const option = {};
      if (element.profile) {
        option.profile = element.profile;
      }
      option.contents = element[contentsKey];
      option.index = element.index;
      return option;
    });
  };

  const userOptions = convertListToOptions(userList, 'name');
  const labelOptions = convertListToOptions(labelList, 'title');
  const milestoneOptions = convertListToOptions(milestoneList, 'title');

  const filterInfos = [
    {
      name: '담당자',
      key: FILTER_KEYS.ASSIGNEE,
      data: userOptions,
      selectedOption: filters[FILTER_KEYS.ASSIGNEE],
    },
    {
      name: '레이블',
      key: FILTER_KEYS.LABEL,
      data: labelOptions,
      selectedOption: filters[FILTER_KEYS.LABEL],
    },
    {
      name: '마일스톤',
      key: FILTER_KEYS.MILESTONE,
      data: milestoneOptions,
      selectedOption: filters[FILTER_KEYS.MILESTONE],
    },
    {
      name: '작성자',
      key: FILTER_KEYS.WRITER,
      data: userOptions,
      selectedOption: filters[FILTER_KEYS.WRITER],
    },
  ];

  return (
    <>
      <div className={cx(`header`)}>
        <div className={cx(`check-box`)}>
          <input type="checkbox"></input>
        </div>
        <div className={cx(`header-contents`)}>
          <div className={cx(`issue-contents_column`)}>
            {openIconName && (
              <Icon
                name={openIconName}
                fill="var(--color-light-neutral-text)"
              ></Icon>
            )}
            <div className={cx(`issue-tap`)}>열린 이슈({openIssueNumber})</div>
            {closeIconName && (
              <Icon
                name={closeIconName}
                fill="var(--color-light-neutral-text)"
              ></Icon>
            )}
            <div className={cx(`issue-tap`)}>닫힌 이슈({closeIssueNumber})</div>
          </div>
          <div className={cx(`issue-contents_column`)}>
            {filterInfos.map((info) => (
              <FilterElement
                key={info.name}
                filterName={info.name}
                filterKey={info.key}
                options={info.data}
                selectedOption={info.selectedOption}
              ></FilterElement>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
