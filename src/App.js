import React from "react";
import "./App.css";

import Question from "./components/Question";
import Intro from "./components/Intro";

async function fetchQuestions() {
    let response = await fetch("data/questions.json");
    if (!response.ok) {
        throw new Error("Failed to fetch questions");
    }
    const data = await response.json();
    return data;
}

var questions = [];

document.addEventListener("DOMContentLoaded", async () => {
    questions = await fetchQuestions();
});

function App() {
    let [idx, setIndex] = React.useState(0);
    let [score, setScore] = React.useState(0);
    let [question, setQuestion] = React.useState({
        question: "",
        options: [],
    });
    let [mode, setMode] = React.useState(1);

    let seen = new Set();
    const nextQuestion = () => {
        if (idx < questions.length - 1) {
            do {
                idx = Math.floor(Math.random() * questions.length);
            } while (seen.has(idx) && seen.size < questions.length);

            setIndex(idx + 1);
            setQuestion({
                question: questions[idx].question,
                options: questions[idx].options,
            });
        } else {
            setMode(0);
        }
    };

    const judge = (answer) => {
        if (answer === questions[idx].answer) {
            setScore(score + 1);
        }
        seen.add(idx);
        nextQuestion();
    };

    return (
        <div>
            {mode === 0 && <Intro mode={mode} setMode={setMode} />}
            {mode === 1 && (
                <Question idx={idx} Question={question} judge={judge} />
            )}
        </div>
    );
}

export default App;
