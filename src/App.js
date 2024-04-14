import React from "react";
import "./App.css";

import Question from "./components/Question";
import Intro from "./components/Intro";
import Lives from "./components/Lives";
import Scores from "./components/Scores";
import Results from "./components/Results";

async function fetchQuestions() {
    let response = await fetch("data/questions.json");
    if (!response.ok) {
        throw new Error("Failed to fetch questions");
    }
    const data = await response.json();
    return data;
}

var pos = 0;
var questions = [];

document.addEventListener("DOMContentLoaded", async () => {
    let temp = await fetchQuestions();
    questions = temp.quiz;
});

function App() {
    let [idx, setIndex] = React.useState(-1);
    let [score, setScore] = React.useState(0);
    let [question, setQuestion] = React.useState({
        question: "Loading...",
        options: ["Loading...", "Loading...", "Loading...", "Loading..."],
    });
    let [mode, setMode] = React.useState(0);
    let [lives, setLives] = React.useState(3);

    let seen = new Set();
    const nextQuestion = () => {
        if (questions.length === 0) {
            setTimeout(() => {
                nextQuestion();
            }, 1000);
            return;
        }

        if (idx < questions.length - 1) {
            do {
                pos = Math.floor(Math.random() * questions.length);
            } while (
                seen.has(pos) &&
                seen.size < questions.length &&
                (pos < 0 || pos >= questions.length)
            );

            setIndex(idx + 1);
            setQuestion({
                question: questions[pos].question,
                options: questions[pos].options,
            });
        } else {
            setMode(2);
        }
    };

    const judge = (answer) => {
        if (answer === questions[pos].answer) {
            setScore(score + 1);
        } else {
            setLives(lives - 1);
        }
        seen.add(pos);

        setTimeout(() => {
            nextQuestion();
        }, 100);
    };

    const restart = () => {
        setIndex(-1);
        setScore(0);
        setMode(0);
        setLives(3);
        pos = 0;
        seen.clear();
    };

    return (
        <div>
            {mode === 0 && (
                <Intro
                    mode={mode}
                    setMode={setMode}
                    nextQuestion={nextQuestion}
                />
            )}
            {mode === 1 && lives > 0 && (
                <div className="question-frame">
                    <Scores score={score} />
                    <Lives lives={lives} />
                    <Question idx={idx} Question={question} judge={judge} />
                </div>
            )}
            {(mode === 2 || lives <= 0) && (
                <Results score={score} lives={lives} restart={restart} />
            )}
        </div>
    );
}

export default App;
