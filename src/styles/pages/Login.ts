import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  section {
    margin-top: 20px;
    padding: 24px;
    background-color: #fff;
    border-radius: 2px;

    h1 {
      color: #595959;
    }

    button {
      margin-top: 24px;
      background: url('/assets/ms-logo.svg');
      border: none;
      cursor: pointer;
      width: 215px;
      height: 41px;
    }
  }
`;
