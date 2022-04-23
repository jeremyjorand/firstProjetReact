import logo from './logo.jpg';
import SHeader from './style';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <SHeader>
      <section>
        <img src={logo} />
        <h1>First-Projet-React</h1>
        <img src={logo} />
      </section>
      <nav>
        <Link to='/PictureChoice'>Choix d'image</Link>
        <Link to='/Form'>Formulaire</Link>
        <Link to='/PierreFeilleCiseaux'>Pierre - Feuille - Ciseaux</Link>
        <Link to='/Gallery'>Carte Heros</Link>
        <Link to='/Ring'>- VS -</Link>
        <Link to='/Burger'>Burger</Link>
        <Link to='/univers'>UniversUseParams</Link>
      </nav>
    </SHeader>
  );
}

export default Header;
