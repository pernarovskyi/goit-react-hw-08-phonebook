import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="4"
        animationDuration="1"
        width="196"
        visible={true}
      />
    </LoaderWrapper>
  );
};


export default Loader;