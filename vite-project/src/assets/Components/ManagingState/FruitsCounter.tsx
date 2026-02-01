type Fruit = {
    id: number;
    fruitName: string;
};

type FruitsCounterProps = {
    fruits: Fruit[];
};

function FruitsCounter(props: FruitsCounterProps) {
    return <h2>Total fruits: {props.fruits.length}</h2>;
}

export default FruitsCounter;
