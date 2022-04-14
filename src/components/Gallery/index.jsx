import SGallery from './style';
import Fighter from '../Fighter';
import heros from '../Data/data';

export default function Gallery() {
  return (
    <SGallery>
      {heros.map((hero) => {
        return (
          <Fighter
            key={hero.id}
            id={hero.id}
            name={hero.name}
            strength={hero.powerstats.strength}
            speed={hero.powerstats.speed}
            power={hero.powerstats.power}
            fullName={hero.biography['full-name']}
            race={hero.appearance.race}
            image={hero.image.url}
          />
        );
      })}
    </SGallery>
  );
}
