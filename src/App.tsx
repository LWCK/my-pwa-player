import React, { useEffect } from 'react';
import './App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CarrouselComponent from './components/CarrouselComponent/CarrouselComponent';
import Player from './components/Player/Player';

const App: React.FC<any> = () => {

  const [songs, setSongs] = React.useState<any>('')

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer keyKjxK8owboF2wel");
    myHeaders.append("Cookie", "brw=brwwHMwX3Ybq5XH1L");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,

    }
    fetch("https://api.airtable.com/v0/appGpVREFApPL54Oe/Sheet%201", requestOptions)
      .then(response => response.json())
      .then(result => setSongs(result))
      .catch(error => console.log('error', error));
  }, []
  )

  console.log(songs && songs)

  const [show, setShow] = React.useState<boolean>(true)

  const songsTitleList = songs.records?.map((i: any) =>
    <>
      <li key={i.id.toString()} onClick={() => handleClick(i)}>{i.fields.artist} - {i.fields.title}</li>
    </>
  )

  const [selectedSong, setSelectedSong] = React.useState<any>('')


  const handleClick = (param: any) => {
    const index = songs.records.findIndex((i: any) => i.id === param.id)
    setSelectedSong(index)
    setShow(false)
  }

  const handleClose = () => {
    setShow(true)
  }

  return (
    <Container fluid className='fullSide leftSide p-3'>
      <Row className='wide'>
        {show ? (
          <>
            <Col xs={12} md={7} xl={7}>
              <CarrouselComponent i={songs.records} event={handleClick} />
            </Col>
            <Col xs={12} md={5} xl={5} className='d-flex align-items-center py-4'>
              <ul>
                <h4 className='font'>Titres</h4>
                {songs && songsTitleList}
              </ul>
            </Col>
          </>
        ) : (
          <Col lg={12} className="rightSide">
            <h4 className="p-3 font">Lecteur
              <Button className="float-end" onClick={() => handleClose()}>X</Button>
            </h4>
            <Player list={songs} index={selectedSong} />
          </Col>
        )
        }
      </Row>
    </Container>
  );
}

export default App;
