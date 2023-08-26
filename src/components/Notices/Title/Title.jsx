import { Wrapper } from './Title.styled';
import PropTypes from 'prop-types';

export const Title = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Title.propTypes = {
  children: PropTypes.any.isRequired,
};
