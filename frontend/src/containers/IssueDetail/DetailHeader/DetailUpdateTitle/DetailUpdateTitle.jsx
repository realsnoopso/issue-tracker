import { Button, TextInputNormal } from '@components/index';

export const DetailUpdateTitle = ({
  issueElClassNames,
  titleClassNames,
  idClassNames,
  issueTitle,
  issueId,
  issueAmendClassNames,
  amendComplete,
  amendCancel,
}) => {
  return (
    <>
      <div className={issueElClassNames}>
        <div className={titleClassNames} style={{ flexGrow: 1 }}>
          <TextInputNormal
            size="s"
            label="제목"
            states="initial"
            placeholder={issueTitle}
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
              _onClick={amendComplete}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};
