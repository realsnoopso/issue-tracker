import { Button } from '@components/index';

export const LoginPage = () => {
  const handleClick = (event) => {
    const scope = 'user';
    const redirectUri = 'http://localhost:3000/auth';
    const clientId = '309fa9e4369279656330';
    window.location.href = `https://github.com/login/oauth/authorize?response_type=code&redirect_uri=${redirectUri}&client_id=${clientId}&scope=${scope}`;
  };

  return (
    <div>
      <Button text={'login'} _onClick={handleClick}></Button>
    </div>
  );
};
