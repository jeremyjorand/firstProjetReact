import styled from 'styled-components';

export default styled.div`
  background-color: white;
  padding-bottom: 3rem;
  section {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80vw;

    h1 {
      font-size: 3em;
      margin: 1rem 0;
    }
    img {
      width: 6rem;
      height: 5rem;
    }
  }
  nav {
    text-align: center;
    margin: 3rem 0;
    a {
      margin: 2rem;
      text-transform: uppercase;
    }
  }
  @media screen and (max-width: 700px) {
    section h1 {
      font-size: 1.5rem;
    }
    nav {
      text-align: start;
      a {
        display: flex;
        justify-content: center;
        margin: 0.5rem;
      }
    }
  }
`;
