import React from 'react'
import './Player.css'
import { Button, Container } from 'react-bootstrap'
import ReactAudioPlayer from 'react-audio-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import ParticulesComponent from '../ParticulesComponent/ParticulesComponent';
import Snow from '../Snow/Snow';

const Player: React.FC<any> = ({ list, index }) => {

    const [indexPlayer, setIndexPlayer] = React.useState<any>(index)
    const [anime, setAnime] = React.useState<boolean>(false)
    const [showBtnLyrics, setShowBtnLyrics] = React.useState<boolean>(true)

    const autoNext = () => {
        if (indexPlayer === list.records.length - 1) {
            setIndexPlayer(0)
        } else {
            setIndexPlayer(indexPlayer + 1)
        }
        if (indexPlayer <= 0) {
            setIndexPlayer(indexPlayer + 1)
        }
    }

    const nextSong = () => {
        if (indexPlayer === list.records.length - 1) {
            setIndexPlayer(0)
        } else (
            setIndexPlayer(indexPlayer + 1)
        )
    }

    const prevSong = () => {
        if (indexPlayer !== 0) {
            setIndexPlayer(indexPlayer - 1)
        }
        else {
            setIndexPlayer(list.records.length - 1)
        }
    }


    return (
        <Container fluid className="Player" key={list && list.records[indexPlayer].fields.id}>
            {anime && (
                <>
                    <Snow />
                    <ParticulesComponent />
                </>
            )}
            <img src={list.records[indexPlayer].fields.image[0].url ? list.records[indexPlayer].fields.image[0].url : '/banner.png'} className="img-songs mb-3" alt="" />
            <br />
            <h4 className=''>{list && list.records[indexPlayer].fields.title}</h4>
            <small className=''>{list && list.records[indexPlayer].fields.artist}</small><br />
            {list.records[indexPlayer].fields.lyrics &&
                (showBtnLyrics ? (
                    <Button className='mt-3 lyrics-btn' onClick={() => setShowBtnLyrics(false)}>Afficher les lyrics</Button>
                )
                    : (
                        <>
                            <p className='new-line mt-3'>
                                {list && list.records[indexPlayer].fields.lyrics}
                            </p>
                            <Button className='mt-3 lyrics-btn' onClick={() => setShowBtnLyrics(true)}>Cacher les lyrics</Button>
                        </>
                    )
                )
            }
            <br />

            <ReactAudioPlayer className="player-audio p-2"
                src={list && list.records[indexPlayer].fields.songfile[0].url}
                autoPlay
                controls
                onPlay={() => setAnime(true)}
                onPause={() => setAnime(false)}
                onEnded={() => autoNext()}
            />
            <div className='text-center'>
                <Button className='mx-3' onClick={() => prevSong()}>
                    <FontAwesomeIcon icon={faAnglesLeft} />
                </Button>
                <Button className='mx-3' onClick={() => nextSong()}><FontAwesomeIcon icon={faAnglesRight} /></Button>
            </div>
        </Container >
    )
}

export default Player
