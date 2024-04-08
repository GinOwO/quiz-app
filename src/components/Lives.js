import "./Lives.css";

function Lives(props) {
    return (
        <div className="lives">
            <span>Lives: {props.lives}</span>
            <img src="/public/heart.png" className="heart" alt="test" />
        </div>
    );
}

export default Lives;
