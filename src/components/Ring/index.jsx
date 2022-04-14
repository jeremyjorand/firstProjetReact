import SRing from './style';
import Fight from '../Fight';

export default function Ring() {
  return (
    <SRing>
      <h2>A vous de choisir !</h2>
      <section className='positionFighter'>
        <Fight />
        <Fight />
      </section>
    </SRing>
  );
}
