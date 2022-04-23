import styled from 'styled-components';

export default styled.div`
  .position {
    display: flex;
    justify-content: space-between;
    .universImage img {
      width: 50vw;
      height: 35rem;
    }
    .universDetail {
      background: ${(props) => props.bg};
      text-align: justify;
      margin: 3rem;
      padding: 1rem;
      color: white;
    }
    .universLogo img {
      width: 20vw;
    }
  }
  .caroussel {
    margin: auto;
    width: 90vw;
    height: 15rem;
    border: black solid 2px;
    color: white;
    font-size: 13rem;
    text-align: center;
    background-color: ${(props) => props.bg};
  }
  .main {
    display: flex;
  }
  .filtre {
    background-color: ${(props) => props.bg};
    height: 50rem;
    margin: 2rem;
    padding: 2rem 4rem;
    color: white;
    text-align: center;
    font-size: 8rem;
    border: black solid 2px;
    position: -webkit-sticky;
    position: sticky;
    top: 2rem;
  }
  .encyclopedie {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
