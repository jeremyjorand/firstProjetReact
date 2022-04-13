import styled from 'styled-components';

export default styled.div`
  .picture {
    border: 3px solid black;
    width: 30vw;
    height: 30vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .picture img {
    max-height: 20vw;
  }
  .positionButton {
    display: flex;
    justify-content: center;
  }
  button {
    margin: 1rem 1rem;
  }
`;
