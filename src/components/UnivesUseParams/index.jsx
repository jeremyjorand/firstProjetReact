import SRoutesUseParams from './style.jsx';
import { Link } from 'react-router-dom';
import marvel from './marvel.jpg';
import dc from './dc.jpg';
import starwars from './starwars.jpg';

function RoutesUseParams() {
  return (
    <SRoutesUseParams>
      <nav>
        <ul>
          <li>
            <Link to={'/univers/marvel'}>
              <img src={marvel} alt='image de marvel' />
            </Link>
          </li>
          <li>
            <Link to={'/univers/starWars'}>
              <img src={starwars} alt='image de starwars' />
            </Link>
          </li>
          <li>
            <Link to={'/univers/dcComics'}>
              <img src={dc} alt='image de dc' />
            </Link>
          </li>
        </ul>
      </nav>
    </SRoutesUseParams>
  );
}
export default RoutesUseParams;
