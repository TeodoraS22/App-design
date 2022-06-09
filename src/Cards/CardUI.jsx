import React from 'react';
import './card-style.css';
import { useState } from 'react';
import MiniGame from '../components/pages/MiniGame/MiniGame';

const Card = props => {
    const [miniGameStarted, setMiniGameStarted] = useState(false);
    const {title} = props;

    return (
        <>
            <div className="card text-center shadow">
                {
                    miniGameStarted===true && <MiniGame setMiniGameStarted={setMiniGameStarted} title={title} />
                }
                <div className="overflow">
                    <img src={props.imgsrc} alt="Image1" className="card-img-top" />
                </div>

                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.text}</p>

                    <div className='btns'>
                        <button className='btn btn-primary' onClick={() => setMiniGameStarted(true)}>Exercises</button>
                        <a href={props.link} className='btn btn-primary' role="button">Link</a>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Card;