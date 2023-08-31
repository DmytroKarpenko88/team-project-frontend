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
        colors={['#FFC107', '#54ADFF', '#CCE4FB', '#C5DFF6', '#FFC107']}
      />
    </StyledOverlay>
  );
};

export default Loader;
