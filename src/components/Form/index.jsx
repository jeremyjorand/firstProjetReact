import { useState } from 'react';
import SForm from './style';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState();
  const [sexe, setSexe] = useState('');
  const [color, setColor] = useState('');
  const [colorText, setColorText] = useState('');
  const [seize, SetSeize] = useState('');
  return (
    <SForm className='form'>
      <fieldset>
        <legend>Vos infos :</legend>
        <label>Votre prénom : </label>
        <input
          type='text'
          value={name}
          onChange={(evt) => {
            setName(evt.target.value);
          }}
        />
        <br />
        <label>Votre Age : </label>
        <input
          type='number'
          value={number}
          min={0}
          max={99}
          onChange={(evt) => {
            setNumber(evt.target.value);
            if (evt.target.value >= 10) {
              SetSeize('seize');
            } else {
              SetSeize('');
            }
          }}
        />
        <br />
        <label>Votre sexe : </label>
        <input
          type='radio'
          value='masculin'
          name='sexe'
          onChange={() => {
            setSexe('un homme');
            setColor('vert');
            setColorText('homme');
          }}
        />
        <label>Masculin</label>
        <input
          type='radio'
          value='feminin'
          name='sexe'
          onChange={() => {
            setSexe('une femme');
            setColor('jaune');
            setColorText('femme');
          }}
        />
        <label>Feminin</label>
      </fieldset>
      <h2 className={`${seize} ${colorText}`}>
        Bonjour {name}, tu as {number} ans et comme tu es {sexe} le texte est de
        couleur {color} .
      </h2>
    </SForm>
  );
}

export default Form;
