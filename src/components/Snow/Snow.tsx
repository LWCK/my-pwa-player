import React from 'react'
import { faBiohazard, faBolt, faBoltLightning, faBurst, faCapsules, faChild, faFaceGrinTongueWink, faFlagUsa, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { render } from "@testing-library/react"


const Snow: React.FC<any> = () => {


    return (
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

    )

}




export default Snow
