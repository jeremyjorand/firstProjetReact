import styled from 'styled-components';
import fond from './fond.png';

export default styled.div`
  background-image: url(${fond});
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 100vh;
  h2 {
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-size: 4rem;
    padding: 2rem;
  }
  .positionFighter {
    display: flex;
    justify-content: space-around;
  }
  Fight {
  }
`;
