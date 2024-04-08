import "./Scores.css";

function Scores(props) {
    return (
        <div className="scores">
            <span>Score: {props.score}</span>
        </div>
    );
}

export default Scores;
