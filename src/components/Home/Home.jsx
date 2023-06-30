import { Container, Image } from './Home.styled';
import bgImage from '../../images/phonebook.jpg';

const Home = () => {
  return (
    <Container>        
      <Image style={{ marginTop: '40px' }} src={bgImage}/>      
    </Container>
  );
};

export default Home;
