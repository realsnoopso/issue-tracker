import classNames from 'classnames/bind';
import styles from './Sidebox.module.css';
import { Dropdown } from '@components/index';
import { SideboxElement } from './SideboxElement/SideboxElement';
import { useState } from 'react';
const cx = classNames.bind(styles);

export const Sidebox = () => {
  return (
    <SideboxElement
      options={[
        {
          id: 'test',
          profile:
            'https://s3.ap-northeast-2.amazonaws.com/image.themiilk.com/production/reporters/183650d33f1/e5c5004c6e_1663847761.png',
          contents: 'selected option1',
        },
        {
          id: 'test2',
          profile: 'https://assets.themiilk.com/test/test-profile1.png',
          contents: 'selected option2',
        },
      ]}
    ></SideboxElement>
  );
};
