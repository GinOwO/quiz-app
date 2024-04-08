import "./Intro.css";

function Intro(props) {
    return (
        <div className="intro-container">
            <div className="intro-inner-container">
                <h1>Quiz App</h1>
                <div className="description">
                    <span>This is a simple quiz app. </span>
                    <span>Try to answer as many questions as you can.</span>
                    <span>
                        You have 3 lives. If you answer a question incorrectly,
                        you lose a life.
                    </span>
                    <span>If you lose all 3 lives, the game ends.</span>
                </div>

                <button onClick={() => props.setMode(1)}>Start</button>
            </div>
        </div>
    );
}

export default Intro;
