import { InformationTag, ElapsedTime, Button } from '@components/index';

export const DetailTitle = ({
  issueElClassNames,
  titleClassNames,
  idClassNames,
  issueTitle,
  issueId,
  issueAmendClassNames,
  onEditTitleBtn,
  btnText,
  handleEditStatusBtnOnClick,
}) => {
  return (
    <>
      <div className={issueElClassNames}>
        <div className={titleClassNames}>
          <span className={titleClassNames}>{issueTitle}</span>
          <span className={idClassNames}>#{issueId}</span>
        </div>
        <div className={issueAmendClassNames}>
          <div>
            <Button
              iconName={'edit'}
              text={'제목 편집'}
              type={'outline'}
              color={'blue'}
              width={'120px'}
              btnSize={'m'}
              _onClick={onEditTitleBtn}
            ></Button>
          </div>
          <div>
            <Button
              iconName={'edit'}
              text={btnText}
              type={'outline'}
              color={'blue'}
              width={'120px'}
              btnSize={'m'}
              _onClick={handleEditStatusBtnOnClick}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};
