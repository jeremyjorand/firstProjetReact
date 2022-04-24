import { useParams, Link } from 'react-router-dom';
import STest from './style';
import data from '../UniversData/Index';
import heros from '../DataOfficiel/dataOfficiel';
import Fighter from '../Fighter';

function Test() {
  const { univers } = useParams();

  return (
    <STest bg={data[univers].bg}>
      <Link to={'/univers'}>Retour</Link>
      <section className='position'>
        <div>
          <div className='universLogo'>{data[univers].logo}</div>
          <div className='universDetail'>{data[univers].details}</div>
        </div>
        <div>
          <div className='universImage'>{data[univers].image}</div>
        </div>
      </section>
      <section className='caroussel'>
        <p>CAROUSSEL</p>
      </section>
      <div className='main'>
        <section className='filtre'>
          <p>F</p>
          <p>I</p>
          <p>L</p>
          <p>T</p>
          <p>R</p>
          <p>E</p>
        </section>
        <section className='encyclopedie'>
          {heros
            .filter((hero) => {
              const publisher = hero.biography.publisher || '';
              const categA = [
                'Marvel Comics',
                'DC Comics',
                'George Lucas',
                'Shueisha',
              ];
              if (data[univers].categ === 'autre') {
                return !categA.some((cat) => {
                  return publisher === cat;
                });
              }
              return (
                publisher === data[univers].categ ||
                publisher.toLocaleLowerCase().includes(data[univers].categ)
              );
            })
            .map((hero) => {
              return (
                <Fighter
                  key={hero.id}
                  id={hero.id}
                  name={hero.name}
                  strength={hero.powerstats.strength}
                  speed={hero.powerstats.speed}
                  power={hero.powerstats.power}
                  fullName={hero.biography.fullName}
                  race={hero.appearance.race}
                  // image={hero.images.xs}
                />
              );
            })}
        </section>
      </div>
    </STest>
  );
}
export default Test;
