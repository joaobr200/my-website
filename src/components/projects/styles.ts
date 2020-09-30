import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 8px;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 4.8rem;
    padding-bottom: 180px;
  }

  h1::after {
    content: "";
    display: block;
    width: 86px;
    height: 6px;
    background: #000;
    margin: 0 auto;
  }

  p {
    font-size: 3.2rem;
  }
`;
