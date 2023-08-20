import { Paw } from 'components/icons';
import { Auth, LinkRegister, LinkLogin, Text } from './AuthNav.styled';
// import PropTypes from 'prop-types';


export const AuthNav = () => {
  return (
   
        <Auth>
          <LinkLogin to="/login"><Text>Log IN <Paw/></Text></LinkLogin>
          <LinkRegister to="/register"><Text>Registration</Text></LinkRegister>
        </Auth>
      )}
    