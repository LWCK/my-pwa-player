import React from 'react'
import './Player.css'
import { Button, Container } from 'react-bootstrap'
import ReactAudioPlayer from 'react-audio-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faBiohazard, faBolt, faBoltLightning, faBurst, faCapsules, faChild, faCoffee, faFaceGrinTongueWink, faFlagUsa, faStar } from '@fortawesome/free-solid-svg-icons'

const Player: React.FC<any> = ({ list, index }) => {

    const [indexPlayer, setIndexPlayer] = React.useState<any>(index)
    const [snow, setSnow] = React.useState<boolean>(false)
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
        if (indexPlayer != 0) {
            setIndexPlayer(indexPlayer - 1)
        }
        else {
            setIndexPlayer(list.records.length - 1)
        }
    }

    return (
        <Container fluid className="Player" key={list && list.records[indexPlayer].fields.id}>
            {snow && (
                <div className="snowflakes" aria-hidden="true">
                    <div className="snowflake">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="snowflake">
                        <FontAwesomeIcon icon={faFlagUsa} />
                    </div>
                    <div className="snowflake">
                        <FontAwesomeIcon icon={faBiohazard} />
                    </div>
                    <div className="snowflake">
                        <FontAwesomeIcon icon={faBolt} />
                    </div>
                    <div className="snowflake">
                        <FontAwesomeIcon icon={faBoltLightning} />
                    </div>
                    <div className="snowflake">
                        <FontAwesomeIcon icon={faBurst} />
                    </div>
                    <div className="snowflake">
                        <FontAwesomeIcon icon={faCapsules} />
                    </div>
                    <div className="snowflake">
                        <FontAwesomeIcon icon={faChild} />
                    </div>
                    <div className="snowflake">
                        <FontAwesomeIcon icon={faBoltLightning} />
                    </div>
                    <div className="snowflake">
                        <FontAwesomeIcon icon={faFaceGrinTongueWink} />
                    </div>
                </div>
            )}
            <img src={list && list.records[indexPlayer].fields.image[0].url} className="img-songs mb-3" />
            <br />
            <h4>{list && list.records[indexPlayer].fields.title}</h4>
            <small>{list && list.records[indexPlayer].fields.artist}</small> <br />
            {list.records[indexPlayer].fields.lyrics &&
                (showBtnLyrics ? (
                    <Button className='mt-3 lyrics-btn' onClick={() => setShowBtnLyrics(false)} >Afficher les lyrics</Button>
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
                onPlay={() => setSnow(true)}
                onPause={() => setSnow(false)}
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
