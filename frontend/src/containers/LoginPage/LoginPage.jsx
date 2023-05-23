import { Button } from '@components/index';
import imagefiles from '@assets/images/index';
import { TextInput } from '@src/components/TextInput/TextInput';
import classNames from 'classnames/bind';
import styles from './LoginPage.module.css';
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

  const idTextInputProps = {
    placeholder: '아이디',
    size: 'l',
  };

  const passwordTextInputProps = {
    placeholder: '패스워드',
    size: 'l',
  };

  const idLoginBtnProps = {
    width: '100%',
    color: 'blue',
    text: '아이디로 로그인',
  };

  const registerBtnProps = {
    width: '100%',
    text: '회원가입',
    type: 'ghost',
    btnSize: 's',
    iconName: 'plus',
  };

  return (
    <div className={loginPageClassNames}>
      <LogoComponent height={logoHeight}></LogoComponent>
      <div className={containerClassNames}>
        <Button {...githubLoginProps} _onClick={handleClick}></Button>
        <p>or</p>
        <TextInput {...idTextInputProps}></TextInput>
        <TextInput {...passwordTextInputProps}></TextInput>
        <Button {...idLoginBtnProps}></Button>
        <Button {...registerBtnProps}></Button>
      </div>
    </div>
  );
};
