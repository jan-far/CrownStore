import styled from 'styled-components';
import CustomButton from '../CustomButton';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  @media screen and (max-width: 800px) {
    top: 9%;
    right: 7%;
    padding: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 55%;
    height: 43%;
    padding: 10px;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    overflow-x: hidden;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 5px;
  }
`;
