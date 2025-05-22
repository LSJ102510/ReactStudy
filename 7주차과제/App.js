import React from 'react';
import styled from 'styled-components';
import Memo from './components/Memo';

const AppBlock = styled.div`
  width: 512px;
  margin: 3rem auto;
  padding: 2rem;
  border: 1px solid #ced4da;
  border-radius: 12px;
  background: #ffffff;
`;

function App() {
  return (
    <AppBlock>
      <Memo />
    </AppBlock>
  );
}

export default App;
