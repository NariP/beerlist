import { Redirect } from 'react-router-dom';
const GuestGuard = () => {
  return <Redirect to={'/home'} />;
};

export default GuestGuard;
