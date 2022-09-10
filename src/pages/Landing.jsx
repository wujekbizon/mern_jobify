import { Link } from 'react-router-dom';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            facilis commodi, ipsam asperiores quasi et nam fuga quia unde
            repellat minus aliquam? Aspernatur voluptatibus non ipsam nam
            aliquid magnam exercitationem.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job explorer" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
