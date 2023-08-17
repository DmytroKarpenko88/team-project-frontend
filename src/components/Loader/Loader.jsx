import { StyledOverlay } from './Loader.styled';

const { ColorRing } = require('react-loader-spinner');

const Loader = () => {
  return (
    <StyledOverlay>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </StyledOverlay>
  );
};

export default Loader;
