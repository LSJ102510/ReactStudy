import React from 'react';
import Introduce from './Introduce';

function App() {
  const containerStyle = {
    border : '1px solid black',
    padding : '20px',
    width : '160px',
    height : '190px',
    display : 'flex',
    alignItems : 'center'
    
  }

  const style = {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    height : '100vh',
    flexDirection : 'column'
    
  }
  return (
    <div style={style}>
      <h1>자기소개 카드</h1>
      <div style={containerStyle}>
        <Introduce name='이승준' age='23' hobby='게임' />
      </div>
    </div>
  );
}

export default App;
