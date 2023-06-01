import { Button, TextInputNormal } from '@components/index';

export const DetailUpdateTitle = ({
  issueElClassNames,
  titleClassNames,
  issueTitle,
  issueAmendClassNames,
  offEditTitleBtn,
  valueState,
  handleEditTitleBtnOnClick,
}) => {
  const [inputValue, setInputValue] = valueState;

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
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
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
              _onClick={offEditTitleBtn}
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
              _onClick={handleEditTitleBtnOnClick}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};
