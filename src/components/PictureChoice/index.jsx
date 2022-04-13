import SPictureChoice from './style';
import abeille from './abeille.png';
import lapin from './lapin.png';
import mouton from './mouton.png';
import voiture from './voiture.png';
import { useState } from 'react';

function PictureChoice() {
  const [image, setImage] = useState(null);
  return (
    <SPictureChoice>
      <section className='positionButton'>
        <button
          type='file'
          value={image}
          onClick={() => {
            setImage(abeille);
          }}
        >
          Abeille
        </button>
        <button
          type='file'
          value={image}
          onClick={() => {
            setImage(lapin);
          }}
        >
          Lapin
        </button>
        <button
          type='file'
          value={image}
          onClick={() => {
            setImage(mouton);
          }}
        >
          Mouton
        </button>
        <button
          type='file'
          value={image}
          onClick={() => {
            setImage(voiture);
          }}
        >
          Voiture
        </button>
        <button
          type='file'
          value={image}
          onClick={() => {
            setImage('');
          }}
        >
          Efface l'image
        </button>
      </section>
      <section className='picture'>
        <img src={image} />
      </section>
    </SPictureChoice>
  );
}
export default PictureChoice;
