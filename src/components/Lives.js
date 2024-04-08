import "./Lives.css";

function Heart() {
    return <img src="heart.png" className="heart" alt="test" />;
}

function Lives(props) {
    return (
        <div className="lives">
            {Array.from({ length: props.lives }, (_, i) => (
                <Heart key={i} />
            ))}
        </div>
    );
}

export default Lives;
