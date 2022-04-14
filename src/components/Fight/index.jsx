import SFight from './style';
import heros from '../Data/data';
import { useEffect, useState } from 'react';
import Fighter from '../Fighter';

const categories = ['Marvel', 'DC', 'StarWars', 'Manga', 'Autre'];
function Fight() {
  const [currUnivers, setCurrUnivers] = useState(null);
  const [currCharacter, setCurrCharacter] = useState(null);

  const univ2pub = (univ) => {
    switch (univ) {
      case 'StarWars':
        return 'Lucas';
      default:
        return univ;
    }
  };
  // useEffect(() => {});

  return (
    <SFight>
      <form>
        <label>Univers : </label>
        <select
          onChange={(evt) => {
            setCurrUnivers(evt.target.value);
          }}
        >
          <option value='--'>Faites votre choix</option>
          {categories.map((categorie) => {
            return (
              <option key={categorie} value={categorie}>
                {categorie}
              </option>
            );
          })}
        </select>
      </form>

      <form>
        <label>Personages : </label>
        <select
          onChange={(evt) => {
            const id = evt.target.value;
            const hero = heros.filter((h) => {
              return id === h.id;
            })[0];
            setCurrCharacter(hero);
          }}
        >
          <option value='-1'>Faites votre choix</option>
          {heros
            .filter((hero) => {
              const publisher = hero.biography.publisher || '';
              if (currUnivers === 'Autre') {
                return !categories.some((categ) => {
                  return publisher.includes(univ2pub(categ));
                });
              }
              return publisher.includes(univ2pub(currUnivers));
            })
            .map((hero) => {
              return (
                <option key={hero.id} value={hero.id}>
                  {hero.name}
                </option>
              );
            })}
        </select>
      </form>

      {currCharacter && (
        <Fighter
          key={currCharacter.id}
          id={currCharacter.id}
          name={currCharacter.name}
          strength={currCharacter.powerstats.strength}
          speed={currCharacter.powerstats.speed}
          power={currCharacter.powerstats.power}
          fullName={currCharacter.biography['full-name']}
          race={currCharacter.appearance.race}
          image={currCharacter.image.url}
        />
      )}
    </SFight>
  );
}

export default Fight;
