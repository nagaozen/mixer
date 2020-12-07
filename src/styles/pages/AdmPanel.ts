import styled from 'styled-components';

export const NavigationContainer = styled.div`
  height: 482px;
  padding-top: 20px;
  background-color: #fff;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 482px;
  padding: 24px 12px 0 12px;
  background-color: #fff;

  div {
    display: flex;
    margin-bottom: 21px;
  }

  button {
    margin-left: 12px;
  }

  section {
    overflow: auto;
  }
`;

export const SelectedArea = styled.div`
  background-color: #fff;
`;
