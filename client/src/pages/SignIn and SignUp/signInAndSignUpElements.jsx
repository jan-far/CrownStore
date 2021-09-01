import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    width: unset;
    align-items: center;
    /* justify-content: center; */

    > *:first-child {
      margin-bottom: 50px;
      width: 95%;
    }

    > *:last-child {
      width: 95%
    }
  }
`;