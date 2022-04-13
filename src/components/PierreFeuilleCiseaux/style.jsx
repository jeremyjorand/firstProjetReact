import styled from 'styled-components';

export default styled.div`
  .pierre {
    border: 3px solid black;
    width: 60vw;
    margin: 0 auto;
    background-color: #69634d;
  }
  h3 {
    text-align: center;
    font-size: 2em;
    margin-top: 0.5em;
  }
  .placementButtom {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
  }
  button {
    width: 8rem;
    height: 5rem;
    font-size: 2rem;
    background-color: beige;
  }
  .result,
  .monChoix {
    border: 3px solid black;
    width: 10rem;
    height: 5rem;
    margin: 3rem auto;
    text-align: center;
    font-size: 1.2em;
    padding: 1rem;
    background-color: beige;
  }
  .winner {
    border: 3px solid black;
    width: 20rem;
    height: 5rem;
    margin: 0 auto;
    text-align: center;
    font-size: 4em;
    p {
      margin: 0;
    }
  }
  .comparaison {
    display: flex;
    p {
      font-size: 2.5em;
      margin: 0;
    }
  }
  .red {
    background-color: red;
  }
  .green {
    background-color: green;
  }
  .compteur {
    display: flex;
    justify-content: space-around;
    .mesPoints,
    .pointsOrdi {
      border: 3px solid black;
      width: 10rem;
      margin: 3rem;
      padding: 1rem;
    }
  }
`;
