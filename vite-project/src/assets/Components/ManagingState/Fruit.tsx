export type Fruit = {
    id: number;
    fruitName: string;
};

type FruitsProps = {
    fruits: Fruit[];
};

function Fruits(props: FruitsProps) {
    return (
        <div>
            {props.fruits.map((f) => (
                <p key={f.id}>{f.fruitName}</p>
            ))}
        </div>
    );
}

export default Fruits;
