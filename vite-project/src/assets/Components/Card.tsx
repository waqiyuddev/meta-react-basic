interface CardProps {
    h2: string;
    h3: string;
}

function Card(props: CardProps) {

    const stylesCard = {
        border: "1px solid #ddd",
        padding: "8px"
    }

    return (
        <div className="card" style={stylesCard}>
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    );
};

export default Card;