import SFight from './style';
import heros from '../Data/data';
import { useEffect, useState } from 'react';
import Fighter from '../Fighter';
/** */
const categories = ['Marvel', 'DC', 'StarWars', 'Manga', 'Autre'];
function Fight() {
  const [currUnivers, setCurrUnivers] = useState(null);
  const [currCharacter, setCurrCharacter] = useState(null);

  /**changement nom univers en recherche publisher */
  const univ2pub = (univ) => {
    switch (univ) {
      case 'StarWars':
        return 'Lucas';
      case 'Manga':
        return 'Shueisha';
      default:
        return univ;
    }
  };
  // useEffect(() => {});

  return (
    <SFight>
      <form>
        <label>Univers : </label>
        <select /**creation liste deroulante */
          onChange={(evt) => {
            /**surveille la valeur changeante */
            setCurrUnivers(
              evt.target.value
            ); /**pousse la valeur recuperer dans le usestate */
          }}
        >
          <option value='--'>Faites votre choix</option>{' '}
          {/**premier valeur de la
          liste */}
          {categories.map((categorie) => {
            /**boucle sue le tableau categories */
            return (
              <option key={categorie} value={categorie}>
                {' '}
                {/**prepare la clé et la valeur pour chaque enfant du tableau */}
                {categorie} {/**affiche la valeur de l'enfant */}
              </option>
            );
          })}
        </select>
      </form>
      <form>
        <label>Personages : </label>
        <select
          onChange={(evt) => {
            /**surveille la valeur de la second liste */
            const id = evt.target.value;
            const hero = heros.filter((h) => {
              return id === h.id;
            })[0];
            setCurrCharacter(hero);
          }}
        >
          <option value='-1'>Faites votre choix</option>
          {/**affiche la premiere
          valeur de la liste */}
          {heros
            .filter((hero) => {
              /**boucle sur le tableau de la data */
              const publisher = hero.biography.publisher || '';
              if (currUnivers === 'Autre') {
                /**condition d'entrée dans Autre */
                return !categories.some((categ) => {
                  /**si cest le cas retourne l'inverse des elements du tableau qui on categories dans leur publisher */
                  return publisher.includes(
                    univ2pub(categ)
                  ); /** suite de la ligne du dessus */
                });
              }
              return publisher.includes(
                univ2pub(currUnivers)
              ); /**retour de la boucle avec la condition ou l'objet inclue le nom de la gategorie dans le publisher */
            })
            .map((hero) => {
              /**.map pour la boucle d'affichage une foie le trie fait */
              return (
                <option key={hero.id} value={hero.id}>
                  {' '}
                  {/**definie la clé et la valeur de chaque ligne de la seconde liste deroulante */}
                  {hero.name}
                  {/**affiche le resultat de la boucle */}
                </option>
              );
            })}
        </select>
      </form>
      {currCharacter /**condition d'affichage si currCharacter === true */ && (
        <Fighter
          /**affiche le fighter avec les proprietes passé en dessous */
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
