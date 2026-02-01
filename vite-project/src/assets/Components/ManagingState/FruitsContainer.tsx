import { useState } from "react";
import Fruits from "./Fruit";
import FruitsCounter from "./FruitsCounter";
import { Fruit } from "./Fruit";

function FruitsContainer() {
    const [fruits] = useState<Fruit[]>([
        { fruitName: "apple", id: 1 },
        { fruitName: "apple", id: 2 },
        { fruitName: "plum", id: 3 },
    ]);

    return (
        <div className="App">
            <h1>Where should the state go?</h1>
            <Fruits fruits={fruits} />
            <FruitsCounter fruits={fruits} />
        </div>
    );
}

export default FruitsContainer;
