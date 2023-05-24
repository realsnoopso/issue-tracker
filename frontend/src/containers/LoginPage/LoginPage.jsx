import { Button } from '@components/index';
import imagefiles from '@assets/images/index';
import { TextInput } from '@src/components/TextInput/TextInput';
import classNames from 'classnames/bind';
import styles from './LoginPage.module.css';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

export const LoginPage = () => {
  const LogoComponent = imagefiles['logoType'];
  const loginPageClassNames = `${cx('login-page')}`;
  const containerClassNames = `${cx('container')}`;

  const handleClick = () => {
    const scope = 'user';
    const redirectUri = 'http://localhost:3000/auth';
    const clientId = '309fa9e4369279656330';
    window.location.href = `https://github.com/login/oauth/authorize?response_type=code&redirect_uri=${redirectUri}&client_id=${clientId}&scope=${scope}`;
  };
  const logoHeight = 40;

  const githubLoginProps = {
    width: '100%',
    text: 'GitHub 계정으로 로그인',
  };

  const [idValue, setIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isCTADisabled, setIsCTADisabled] = useState(true);

  const handleIdInputChange = (event) => {
    setIdValue(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const enableCTAIfTextFiledFilled = () => {
    const isAllFilled = Boolean(idValue) && Boolean(passwordValue);
    if (isAllFilled) {
      setIsCTADisabled(false);
    } else {
      setIsCTADisabled(true);
    }
  };

  useEffect(() => {
    enableCTAIfTextFiledFilled();
  }, [idValue, passwordValue]);

  return (
    <div className={loginPageClassNames}>
      <LogoComponent height={logoHeight}></LogoComponent>
      <div className={containerClassNames}>
        <Button {...githubLoginProps} _onClick={handleClick}></Button>
        <p>or</p>
        <TextInput
          label="아이디"
          size="l"
          value={idValue}
          _onKeydown={() => setIdValue(idValue)}
          _onChange={handleIdInputChange}
        ></TextInput>
        <TextInput
          label="패스워드"
          size="l"
          type="password"
          value={passwordValue}
          _onChange={handlePasswordInputChange}
        ></TextInput>
        <Button
          width="100%"
          color="blue"
          text="아이디로 로그인"
          status={isCTADisabled ? 'disabled' : 'default'}
        ></Button>
        <Button
          width="100%"
          text="회원가입"
          type="ghost"
          btnSize="s"
          iconName="plus"
        ></Button>
      </div>
    </div>
  );
};
