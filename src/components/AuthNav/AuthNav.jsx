import { Paw } from 'components/icons';
import { Auth, LinkRegister, LinkLogin, Text } from './AuthNav.styled';
// import PropTypes from 'prop-types';


export const AuthNav = (onClick) => {
  return (
   
        <Auth>
          <LinkLogin to="/login" onClick={onClick}><Text>Log IN </Text><Paw/></LinkLogin>
          <LinkRegister to="/register" onClick={onClick}><Text>Registration</Text></LinkRegister>
        </Auth>
      )}
    