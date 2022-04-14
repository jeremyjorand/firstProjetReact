import styled from 'styled-components';
import fondMetal from './fondMetal.jpg';

export default styled.div`
  .globalFighter {
    border: 3px solid black;
    width: 20rem;
    height: 30rem;
    margin: 1rem 1rem;
    border-radius: 5px;
    background: url(${(props) => props.bg});
  }
  /* .pictureBat {
    background-image: url('https://www.superherodb.com/pictures2/portraits/10/100/639.jpg');
  }
  .pictureGod {
    background-image: url('https://www.superherodb.com/pictures2/portraits/10/100/10590.jpg');
  }
  .pictureHel {
    background-image: url('https://www.superherodb.com/pictures2/portraits/10/100/813.jpg');
  }
  .pictureHer {
    background-image: url('https://www.superherodb.com/pictures2/portraits/10/100/78.jpg');
  }
  .pictureDar {
    background-image: url('https://www.superherodb.com/pictures2/portraits/10/100/10444.jpg');
  } */
  .idFighter {
    width: 4rem;
    height: 4rem;
    position: absolute;
    font-size: 1.5rem;
    padding: 0.6rem;
    background-image: url(${fondMetal});
    background-size: 10rem;
    color: white;
    clip-path: polygon(100% 0, 0 0, 0 100%);
    margin-left: -0.005rem;
    margin-top: -0.005rem;
  }
  h4 {
    background-color: #ffffffb0;
    margin: 1rem;
    text-align: center;
    font-size: 1.6rem;
    border: 10px ridge rgba(122, 35, 35, 0.781);
  }
  .placementPoint {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .rond {
    width: 3.5rem;
    height: 3rem;
    background-color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0.5rem 0 0 0;
  }
  .strength {
    background-color: #fc000081;
    margin: 1rem 10rem 0.5rem 0;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    border-left: 1rem solid white;
    font-weight: bold;
  }
  .speed {
    background-size: 1rem;
    background-color: #0fb90f90;
    margin: 1rem 10rem 0.5rem 0;
    border-left: 1rem solid white;
    font-weight: bold;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  }
  .power {
    background-color: #0044ff83;
    margin: 1rem 10rem 0.5rem 0;
    border-left: 1rem solid white;
    font-weight: bold;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  }
  .description {
    background-color: #ffffffb7;
    height: 6rem;
    margin: 1rem;
    text-align: center;
    font-size: 1.6rem;
    border: 10px ridge rgba(122, 35, 35, 0.781);
    margin-top: 3rem;
    padding-top: 0.5rem;
    white-space: nowrap;
  }
  span {
  }
  .dr {
    font-weight: bold;
    font-size: 0.7rem;
    color: black;
    position: absolute;
    transform: rotate(270deg);
    margin-left: -4.5rem;
  }
  .fullName,
  .race {
    font-weight: bold;
    font-size: 1rem;
  }
  ul li {
    font-size: 1.2vw;
    margin: 0.2rem 0;
  }
`;
