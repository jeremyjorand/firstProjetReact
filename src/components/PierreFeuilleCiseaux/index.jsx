import { useEffect } from 'react';
import { useState } from 'react';
import SPierreFeuilleCiseaux from './style';

function PierreFeuilleCiseaux() {
  const [lastGameResult, setLastGameResult] = useState(null);
  const [myLastChoise, setMyLastChoise] = useState('');
  const [aiLastChoice, setALastChoise] = useState('');
  const [score, setScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);

  useEffect(() => {
    winnerIs();
  }, [aiLastChoice]);

  useEffect(() => {
    if (lastGameResult === 1) {
      return setScore(score + 1);
    } else if (lastGameResult === -1) {
      return setAiScore(aiScore + 1);
    }
  }, [lastGameResult]);

  function winnerIs() {
    if (myLastChoise === 'Pierre') {
      if (aiLastChoice === 'Pierre') {
        return setLastGameResult(0);
      } else if (aiLastChoice === 'Feuille') {
        return setLastGameResult(-1);
      } else {
        return setLastGameResult(1);
      }
    } else if (myLastChoise === 'Feuille') {
      if (aiLastChoice === 'Feuille') {
        return setLastGameResult(0);
      } else if (aiLastChoice === 'Ciseaux') {
        return setLastGameResult(-1);
      } else {
        return setLastGameResult(1);
      }
    } else if (myLastChoise === 'Ciseaux') {
      if (aiLastChoice === 'Ciseaux') {
        return setLastGameResult(0);
      } else if (aiLastChoice === 'Pierre') {
        return setLastGameResult(-1);
      } else {
        return setLastGameResult(1);
      }
    }
  }

  function rollAiChoice() {
    let desktop = Math.floor(Math.random() * 3);
    switch (desktop) {
      case 0:
        return setALastChoise('Pierre');
      case 1:
        return setALastChoise('Feuille');
      default:
        return setALastChoise('Ciseaux');
    }
  }

  return (
    <SPierreFeuilleCiseaux className='pierre'>
      <h3>Pierre - Feuille - Ciseaux</h3>
      <section className='placementButtom'>
        <button
          type='text'
          onClick={() => {
            setMyLastChoise('Pierre');
            rollAiChoice();
          }}
        >
          Pierre
        </button>
        <button
          type='text'
          onClick={() => {
            setMyLastChoise('Feuille');
            rollAiChoice();
          }}
        >
          Feuille
        </button>
        <button
          type='text'
          onClick={() => {
            setMyLastChoise('Ciseaux');
            rollAiChoice();
          }}
        >
          Ciseaux
        </button>
      </section>
      <section className='comparaison'>
        <div className='monChoix'>
          <label>Mon choix :</label>
          <p>{myLastChoise}</p>
        </div>
        <div className='result'>
          <label>Ordi :</label>
          <p>{aiLastChoice}</p>
        </div>
      </section>
      <div
        className={`winner ${lastGameResult === -1 && 'red'} ${
          lastGameResult === 1 && 'green'
        }`}
      >
        {lastGameResult === -1 && <p>Perdu !</p>}
        {lastGameResult === 0 && <p>Egalité</p>}
        {lastGameResult === 1 && <p>Gagné !</p>}
      </div>
      <section className='compteur'>
        <div className='mesPoints'>
          <p>Mes points : {score}</p>
        </div>
        <div className='pointsOrdi'>
          <p> Points ordi : {aiScore}</p>
        </div>
      </section>
    </SPierreFeuilleCiseaux>
  );
}

export default PierreFeuilleCiseaux;
