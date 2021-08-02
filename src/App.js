// eslint-disable-next-line quotes
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './layout/Header';
import Main from './layout/Main';

const GlobalStyle = createGlobalStyle`
html {
--font-family-primary: 'Bitter', serif;
--font-family-secondary: 'Montserrat', sans-serif;

}
body, #root, html {
  height: 100%;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export default App;
