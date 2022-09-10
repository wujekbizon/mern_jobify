import { Link } from 'react-router-dom';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper className="full-page">
      <Logo />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
        facilis commodi, ipsam asperiores quasi et nam fuga quia unde repellat
        minus aliquam? Aspernatur voluptatibus non ipsam nam aliquid magnam
        exercitationem.
      </p>
      <Link to="/register" className="btn btn-hero">
        Login/Register
      </Link>
    </Wrapper>
  );
};

export default Landing;
