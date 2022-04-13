import SFight from './style';
import heros from '../Data/data';
import { useState } from 'react';
import Fighter from '../Fighter';

const categories = ['', 'Marvel', 'DC', 'StarWars', 'Manga', 'Autre'];
function Fight() {
  function changeCategorie(evt) {
    if (evt === 'StarWars') {
      return 'George';
    } else if (evt === 'Autre') {
      return 'Dark';
    } else {
      return evt;
    }
  }
  function selectionHeros(evt) {
    return (
      <label>
        Personnage :{' '}
        <select
          name='personnage'
          id='personnage'
          onChange={() => {
            return (
              <div>
                <Fighter />
              </div>
            );
          }}
        >
          {heros
            .filter((hero) => {
              return hero.biography.publisher.includes(changeCategorie(evt));
            })
            .map((hero) => {
              return <option value={hero.id}>{hero.name}</option>;
            })}
        </select>
      </label>
    );
  }
  const [PersonParCategory, setPersonnParCategory] = useState(null);
  return (
    <SFight>
      <label>
        Univers :{' '}
        <select
          name='univers'
          id='univers'
          onChange={(e) => {
            setPersonnParCategory(selectionHeros(e.target.value));
          }}
        >
          {categories.map((categorie) => {
            return <option value={categorie}>{categorie}</option>;
          })}
        </select>
      </label>
      <div>{PersonParCategory}</div>
    </SFight>
  );
}

export default Fight;
