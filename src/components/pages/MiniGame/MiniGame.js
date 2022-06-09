import "./MiniGame.css"
import { miniGameQuestions } from "./miniGameQuestions";
import { useState, useEffect } from "react";

const MiniGame = ({ setMiniGameStarted, title }) => {
    const [miniGameScore, setMiniGameScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentQuestionContent, setCurrentQuestionContent] = useState(miniGameQuestions[currentQuestion]['question']);

    const answerHandler = (id) => {

        if (miniGameQuestions[currentQuestion]['answers'][id]['correct'] == true) {
            setMiniGameScore((prevScore) => prevScore + 1);
        }

        if (currentQuestion < 9) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        } 
        // else {
        //     <div className= "miniGameScore" > You answered {miniGameScore}/10 questions correctly </div>
        //     </div>
            
        //     <button onclick="location.reload()">Reload</button>
        //  }
        
    };

    useEffect(() => {
        setCurrentQuestionContent(miniGameQuestions[currentQuestion]['question']);
        console.log(currentQuestionContent)
        console.log(currentQuestion)
        console.log(miniGameQuestions[currentQuestion]['question'])
        console.log(miniGameQuestions[2])
    }, [currentQuestion])


    return (
        <div id="MiniGame">
            <button className="buttom-exit" onClick={() => setMiniGameStarted(false)}>X</button>
            <h4>{`Quizz for ${title} items`}</h4>
            <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
            <div className = "progress-bar">
                   <div className = "step">
                    <p> Question 1</p>
                    < div className = "bullet">
                        <span>1</span>
                        <div className = "check fas fa-check"></div>
                    </div>
                    </div>

                    <div className = "step">
                    <p> Question 2 </p>
                    < div className = "bullet">
                        <span>2</span>
                        <div className = "check fas fa-check"></div>
                    </div>
                    </div>

                    <div className = "step">
                    <p> Question 3 </p>
                    < div className = "bullet">
                        <span>3</span>
                        <div className = "check fas fa-check"></div>
                    </div>
                    </div>

                    <div className = "step">
                    <p> Question 4 </p>
                    < div className = "bullet">
                        <span>4</span>
                        <div className = "check fas fa-check"></div>
                    </div>
                    </div>

                    <div className = "step">
                    <p> Question 5 </p>
                    < div className = "bullet">
                        <span>5</span>
                        <div className = "check"></div>
                    </div>
                    </div>

                    <div className = "step">
                    <p> Question 6 </p>
                    < div className = "bullet">
                        <span>6</span>
                        <div className = "check"></div>
                    </div>
                    </div>

                    <div className = "step">
                    <p> Question 7 </p>
                    < div className = "bullet">
                        <span>7</span>
                        <div className = "check"></div>
                    </div>
                    </div>

                    <div className = "step">
                    <p> Question 8 </p>
                    < div className = "bullet">
                        <span>8</span>
                        <div className = "check"></div>
                    </div>
                    </div>

                    <div className = "step">
                    <p> Question 9 </p>
                    < div className = "bullet">
                        <span>9</span>
                        <div className = "check"></div>
                    </div>
                    </div>

                    <div className = "step">
                    <p> Question 10 </p>
                    < div className = "bullet">
                        <span>10</span>
                        <div className = "check"></div>
                    </div>
                    </div>

                </div>

            <div>
                <h4>{currentQuestionContent}</h4>

                <h2>Possible answers:</h2>
                {
                    
                    miniGameQuestions[currentQuestion]['answers'].map((question, id) =>
                       
                    
                       <div key = {id}>
                            <button className = "buttom-answer" onClick={() => { answerHandler(id) }}>{question['text'] }</button>
                        </div>
                    )
                }
                <div className= "miniGameScore" > You answered {miniGameScore}/10 questions correctly </div>
            </div>
            

            </div>  
    );
};

export default MiniGame;