import "./Question.css";

function Question(props) {
    let { idx, Question, judge } = props;
    let { question, options, answer } = Question;
    return (
        <main>
            <div className="container">
                <span className="question">
                    {idx + 1}. {question}
                </span>
                <ul className="options">
                    <li className="option" onClick={() => judge(options[0])}>
                        {options[0]}
                    </li>
                    <li className="option" onClick={() => judge(options[1])}>
                        {options[1]}
                    </li>
                    <li className="option" onClick={() => judge(options[2])}>
                        {options[2]}
                    </li>
                    <li className="option" onClick={() => judge(options[3])}>
                        {options[3]}
                    </li>
                </ul>
                <span id="status">{answer}</span>
            </div>
        </main>
    );
}

export default Question;
