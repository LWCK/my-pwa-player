import React from 'react';
import './App.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Col, Container, Row } from 'react-bootstrap';

const App: React.FC<any> = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any | undefined) => {
    await console.log(container)
  }, []);
  return (

    <Container>
      <Row>
        <Col>

        </Col>
      </Row>
    </Container>

  );
};
export default App;
