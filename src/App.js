import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import Header from './components/Header/Header';
import Particles from './components/Particles/Particles';
import Carousel from './components/Carousel/Carousel';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding-top: 20vh;
  overflow-x: hidden; // Prevent horizontal scrolling
`;

function App() {
  return (
    <AppContainer>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Particles />
        </Canvas>
      </CanvasContainer>
      <Header />
      <Content>
        <Carousel />
      </Content>
    </AppContainer>
  );
}

export default App;