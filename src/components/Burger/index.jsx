import { useState } from 'react';
import SBurger from './style';

function Burger() {
  const [isActive, setActive] = useState(false);
  return (
    <SBurger>
      <div
        className={`burger ${isActive && 'active'}`}
        onClick={() => setActive(!isActive)}
      >
        <span></span>
        <ul>
          <li className='li1'>toto</li>
          <li className='li2'>toto</li>
          <li className='li3'>toto</li>
          <li className='li4'>toto</li>
          <li className='li5'>toto</li>
          <li className='li6'>toto</li>
          <li className='li7'>toto</li>
          <li className='li8'>toto</li>
          <li className='li9'>toto</li>
          <li className='li10'>toto</li>
        </ul>
      </div>
    </SBurger>
  );
}
export default Burger;
