import React from 'react'
import'./Learn.css'
import { useState, useEffect, useMemo } from 'react';
import { Divider } from '@mui/material';
import Trivia from './Trivia';
import Timer from "../Learn/Timer";
import Start from "./Start";
import Nav from '../../Nav/nav'

function Learn() {
    const [username, setUsername] = useState(null);
    const [stop, setStop] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [earned, setEarned] = useState("$ 0");

    const data = [

        {
          id: 1,
          // category: "bucatarie",
          question: "Rolex is a company that specializes in what type of product?",
          answers: [
            {
              text: "Phone",
              correct: false,
            },
            {
              text: "Watches",
              correct: true,
            },
            {
              text: "Food",
              correct: false,
            },
            {
              text: "Cosmetic",
              correct: false,
            },
          ],
        },

        {
          id: 2,
          question: "When did the website `Facebook` launch?",
          answers: [
            {
              text: "2004",
              correct: true,
            },
            {
              text: "2005",
              correct: false,
            },
            {
              text: "2006",
              correct: false,
            },
            {
              text: "2007",
              correct: false,
            },
          ],
        },

        {
          id: 3,
          question: "Who played the character of harry potter in movie?",
          answers: [
            {
              text: "Johnny Deep",
              correct: false,
            },
            {
              text: "Leonardo Di Caprio",
              correct: false,
            },
            {
              text: "Denzel Washington",
              correct: false,
            },
            {
              text: "Daniel Red Cliff",
              correct: true,
            },
          ],
        },

        {
          id: 4,
          question: "Rolex is a company that specializes in what type of product?",
          answers: [
            {
              text: "Phone",
              correct: false,
            },
            {
              text: "Watches",
              correct: true,
            },
            {
              text: "Food",
              correct: false,
            },
            {
              text: "Cosmetic",
              correct: false,
            },
          ],
        },

        {
          id: 5,
          question: "Rolex is a company that specializes in what type of product?",
          answers: [
            {
              text: "Phone",
              correct: false,
            },
            {
              text: "Watches",
              correct: true,
            },
            {
              text: "Food",
              correct: false,
            },
            {
              text: "Cosmetic",
              correct: false,
            },
          ],
        },

      ];
    
    const moneyPyramid = useMemo(
      () => 
      [
        {id:1, amount:"$100"},
        {id:2, amount:"$200"},
        {id:3, amount:"$300"},
        {id:4, amount:"$400"},
        {id:5, amount:"$500"},
        {id:6, amount:"$600"},
        {id:7, amount:"$700"},
        {id:8, amount:"$800"},
        {id:9, amount:"$900"},
        {id:10, amount:"$1000"},
        {id:11, amount:"$1100"},
        {id:12, amount:"$1200"},
        {id:13, amount:"$1300"},
        {id:14, amount:"$1400"},
        {id:15, amount:"$1500"},
    ].reverse(),
    []);

    useEffect(() => {
      questionNumber > 1 &&
        setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }, [questionNumber, moneyPyramid]);

  return (
  //buton inapoi nu nav
<learn>
  <Nav/>
    <div className='app'>

      {username ? (
        <>
                <div className='main'>
          {stop ? (
          <h1 className="endText" > You earned: {earned} </h1> 
          ) : (
            <>
           <div className="top">
               <div className="timer">
               <Timer
                      setStop={setStop}
                      questionNumber={questionNumber}
                    />
               </div>
           </div>
           <div className="bottom">
               <Trivia 
               data={data} 
               setStop = {setStop}
               questionNumber={questionNumber}
               setQuestionNumber={setQuestionNumber}/>
               </div>
               </>
               )}
           </div>
        <div className= "pyramid">
        <ul className="moneyList">
            {moneyPyramid.map((m)=> (
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}> 
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
            </li>
            ))}
        </ul>
    </div>
        </>
      ) : <Start setUsername = {setUsername}/>}
 </div>
 </learn>
  );
}

export default Learn