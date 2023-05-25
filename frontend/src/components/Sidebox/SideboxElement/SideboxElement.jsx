import classNames from 'classnames/bind';
import styles from './SideboxElement.module.css';
import { Dropdown, InformationTag, Profile, Progress } from '@components/index';
import { useState, useEffect } from 'react';
import { getMember } from '@services/member';
import { getLabel } from '@services/label';
import { getMilestone } from '@services/milestone';
import { convertListToOptions } from '@services/dropdown';

const cx = classNames.bind(styles);

export const SideboxElement = ({ selectedState, name, id }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = selectedState;
  const [list, setList] = useState([]);

  const options = convertListToOptions(
    list,
    id === 'assignee' ? 'name' : 'title'
  );

  useEffect(() => {
    (async () => {
      if (id === 'assignee') {
        const members = await getMember();
        setList(members);
      }
      if (id === 'label') {
        const labels = await getLabel();
        setList(labels);
      }
      if (id === 'milestone') {
        const milestones = await getMilestone();
        setList(milestones);
      }
    })();
  }, []);

  const handleDropdown = (isOpen) => {
    return () => setDropdownOpen(isOpen);
  };

  const getSelectedDataByText = (list, text) => {
    return list.find((element) => {
      const compare = id === 'assignee' ? element.name : element.title;
      return compare === text;
    });
  };

  const optionOnClick = ({ currentTarget }) => {
    const text = currentTarget.innerText;
    const target = getSelectedDataByText(list, text);
    setSelected(target);
  };

  const RequireSelectedData = ({ children }) => {
    if (!selected) return null;
    return children;
  };

  return (
    <>
      <Dropdown
        btnText={name}
        panelPosition="left"
        isOpen={isDropdownOpen}
        toggleOpen={handleDropdown(!isDropdownOpen)}
        options={options}
        selected={selected}
        optionOnClick={optionOnClick}
      ></Dropdown>

      {id === 'assignee' && (
        <RequireSelectedData>
          <div>
            <Profile url={selected?.profile} />
            {selected?.name}
          </div>
        </RequireSelectedData>
      )}

      {id === 'label' && (
        <RequireSelectedData>
          <div>
            <InformationTag
              {...selected}
              text={selected?.title}
            ></InformationTag>
          </div>
        </RequireSelectedData>
      )}

      {id === 'milestone' && (
        <RequireSelectedData>
          <div>
            <Progress
              percent={
                (selected?.closedIssueNum / selected?.totalIssueNum) * 100
              }
              label={selected?.title}
            />
          </div>
        </RequireSelectedData>
      )}
    </>
  );
};
