import "./MiniGame.css"
import { miniGameQuestions } from "./miniGameQuestions";
import { useState, useEffect } from "react";

const MiniGame = ({ setMiniGameStarted, title }) => {
    const [miniGameScore, setMiniGameScore] = useState(0);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [currentQuestionContent, setCurrentQuestionContent] = useState(miniGameQuestions[title][currentQuestion]['question']);

    const [gameisFinished, setGameIsFinished] = useState(false);

    const [bulletColorHandler, setBulletColorHandler] = useState(["initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial", "initial"]);
    const answerHandler = (id) => {
        console.log(bulletColorHandler)
        if (!gameisFinished) {
            if (miniGameQuestions[title][currentQuestion]['answers'][id]['correct'] == true) {
                setMiniGameScore((prevScore) => prevScore + 1);
                console.log(bulletColorHandler)
                setBulletColorHandler((prevState) =>  prevState.map((element, index) => { if (currentQuestion === index) {return element = 'blue';} return element; }) );
            }
            else {
                setBulletColorHandler((prevState) =>  prevState.map((element, index) => { if (currentQuestion === index) {return element = 'red';}return element; }) );
            }

            if (currentQuestion < 9) {
                setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            }
            else {
                setGameIsFinished(true);
            }
        }

    };

    useEffect(() => {
        setCurrentQuestionContent(miniGameQuestions[title][currentQuestion]['question']);
        console.log('question context :', currentQuestionContent)
        console.log('current question number: ', currentQuestion)
        console.log(bulletColorHandler[0])
    }, [currentQuestion])

    return (
        <div id="MiniGame">
            <button className="buttom-exit" onClick={() => setMiniGameStarted(false)}>X</button>
            <h4>{`Quizz for ${title} items`}</h4>
            <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
            <div className="progress-bar">
                {
                    [0,0,0,0,0,0,0,0,0,0].map((elem, index) => {
                        console.log(index);
                        console.log( bulletColorHandler[index]);
                        return (
                            <div className="step" key={`bullet${index}`}>
                                <p> Question {index + 1}</p>
                                < div className="bullet" style={{ background: bulletColorHandler[index] }} >
                                    <span>{index + 1}</span>
                                    <div className="check fas fa-check"></div>
                                </div>
                            </div>)
                    })

                }

                {/* <div className="step">
                    <p> Question 1</p>
                    < div className="bullet" style={{ background: bulletColorHandler[0] }} >
                        <span>1</span>
                        <div className="check fas fa-check"></div>
                    </div>
                </div>

                <div className="step">
                    <p> Question 2 </p>
                    < div className="bullet">
                        <span>2</span>
                        <div className="check fas fa-check"></div>
                    </div>
                </div>

                <div className="step">
                    <p> Question 3 </p>
                    < div className="bullet">
                        <span>3</span>
                        <div className="check fas fa-check"></div>
                    </div>
                </div>
                <div className="step">
                    <p> Question 4 </p>
                    < div className="bullet">
                        <span>4</span>
                        <div className="check fas fa-check"></div>
                    </div>
                </div>

                <div className="step">
                    <p> Question 5 </p>
                    < div className="bullet">
                        <span>5</span>
                        <div className="check"></div>
                    </div>
                </div>

                <div className="step">
                    <p> Question 6 </p>
                    < div className="bullet">
                        <span>6</span>
                        <div className="check"></div>
                    </div>
                </div>

                <div className="step">
                    <p> Question 7 </p>
                    < div className="bullet">
                        <span>7</span>
                        <div className="check"></div>
                    </div>
                </div>

                <div className="step">
                    <p> Question 8 </p>
                    < div className="bullet">
                        <span>8</span>
                        <div className="check"></div>
                    </div>
                </div>

                <div className="step">
                    <p> Question 9 </p>
                    < div className="bullet">
                        <span>9</span>
                        <div className="check"></div>
                    </div>
                </div>

                <div className="step">
                    <p> Question 10 </p>
                    < div className="bullet">
                        <span>10</span>
                        <div className="check"></div>
                    </div>
                </div> */}
            </div>

            <div>

                {gameisFinished === false ?
                    <div>
                        <h4>{currentQuestionContent}</h4>
                        <h2>Possible answers:</h2>
                        {
                            miniGameQuestions[title][currentQuestion]['answers'].map((question, id) =>
                                <div key={id}>
                                    <button className="buttom-answer" onClick={() => { answerHandler(id) }}>{question['text']}</button>
                                </div>
                            )
                        }
                    </div>
                    :
                    <div className="miniGameScore" > You answered {miniGameScore}/10 questions correctly </div>
                }

            </div>


        </div>
    );
};

export default MiniGame;