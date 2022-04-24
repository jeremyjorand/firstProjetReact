import styled from 'styled-components';

export default styled.div`
  ul {
    display: flex;
    justify-content: space-evenly;
  }
  img {
    width: 16vw;
    height: 40rem;
    object-fit: cover;
  }
  .logo {
    display: flex;
    justify-content: center;
    p {
      font-size: 4vw;
      text-align: center;
      width: 20vw;
      padding: 1rem;
      color: white;
      background-color: #b6a9a9;
      border: red solid 3px;
      margin-top: -10rem;
      position: absolute;
    }
  }
`;
