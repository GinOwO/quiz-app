import "./Results.css";

function Results(props) {
    return (
        <div className="results">
            <h1>Game Over</h1>
            <span>Score: {props.score}</span>
            <span>Lives Remaining: {props.lives}</span>
            <button onClick={props.restart}>Restart</button>
        </div>
    );
}

export default Results;
