import styled from 'styled-components';

export default styled.div`
  .burger {
    margin: 2rem 0 0 2rem;
    width: 42px;
    height: 24px;
    cursor: pointer;
    position: relative;

    ul {
      transition: background-color 2s linear, margin-left 1.5s 0.5s linear;
      margin-left: -15rem;
      width: 12rem;
      height: 20rem;
      padding-top: 3rem;
      border: 2px solid black;
      li {
        margin: 0.5rem -5rem;
      }
      .li1 {
        transition: margin-left 0.2s 1.5s;
      }
      .li2 {
        transition: margin-left 0.4s 1.5s;
      }
      .li3 {
        transition: margin-left 0.6s 1.5s;
      }
      .li4 {
        transition: margin-left 0.8s 1.5s;
      }
      .li5 {
        transition: margin-left 1s 1.5s;
      }
      .li6 {
        transition: margin-left 1.2s 1.5s;
      }
      .li7 {
        transition: margin-left 1.4s 1.5s;
      }
      .li8 {
        transition: margin-left 1.6s 1.5s;
      }
      .li9 {
        transition: margin-left 1.8s 1.5s;
      }
      .li10 {
        transition: margin-left 2s 1.5s;
      }
    }

    span {
      width: 100%;
      height: 4px;
      background-color: black;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: background-color 2s linear, margin-left 1.5s 0.5s;
      margin-left: 0;
    }
    span::before,
    span::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: black;
      transition: transform 0.5s linear;
    }
    span::before {
      transform: translateY(-10px);
    }
    span::after {
      transform: translateY(10px);
    }
  }
  .burger.active {
    margin: 2rem 0 0 2rem;

    ul {
      background-color: #7f9b9b;
      border: 2px solid black;
      display: block;
      width: 12rem;
      height: 20rem;
      padding-top: 3rem;
      margin-left: -2rem;
      transition: margin-left 1s linear;
      li {
        margin: 0.5rem 1rem;
      }
    }

    span {
      margin-top: 0.5rem;
      margin-left: 8.2rem;
      background-color: transparent;
      transition: background-color 0s linear, margin-left 1s 1s,
        margin-top 1s 1s;
    }
    span::before {
      transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(1, 1);
    }
    span::after {
      transform: translate3d(-8px, 0, 0) rotate(45deg) scale(1, 1);
    }
  }
`;
