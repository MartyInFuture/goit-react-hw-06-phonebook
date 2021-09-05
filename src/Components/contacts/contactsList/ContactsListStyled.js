import styled from 'styled-components';

export const ContactsListStyled = styled.ul`
  padding-left: 0px;
  list-style: inside;

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;

    border: 1px solid grey;
  }

  .item:not(:last-child) {
    margin-bottom: 10px;
  }
  .text {
    padding: 0px;
  }

  .submit-button {
    margin-left: 10px;
    height: 22px;
  }
`;
