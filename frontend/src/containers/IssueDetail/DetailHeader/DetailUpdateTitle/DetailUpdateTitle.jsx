import { Button, TextInputNormal } from '@components/index';
import { useState } from 'react';

export const DetailUpdateTitle = ({
  issueElClassNames,
  titleClassNames,
  issueTitle,
  setIssueTitle,
  issueAmendClassNames,
  amendComplete,
  amendCancel,
}) => {
  const [value, setValue] = useState(issueTitle);

  return (
    <>
      <div className={issueElClassNames}>
        <div
          className={titleClassNames}
          style={{ flexGrow: 1, height: '48px' }}
        >
          <TextInputNormal
            size="s"
            label="제목"
            states="initial"
            placeholder={issueTitle}
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></TextInputNormal>
        </div>
        <div className={issueAmendClassNames}>
          <div>
            <Button
              iconName={'xSquare'}
              text={'편집 취소'}
              type={'outline'}
              color={'blue'}
              width={'120px'}
              btnSize={'m'}
              _onClick={amendCancel}
            ></Button>
          </div>
          <div>
            <Button
              iconName={'edit'}
              text={'편집 완료'}
              type={'solid'}
              color={'blue'}
              width={'120px'}
              btnSize={'m'}
              _onClick={() => {
                setIssueTitle(value);
                // amendComplete();
              }}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};
