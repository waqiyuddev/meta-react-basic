import React from "react";
import Bowl from "./Bowl";

type KittenProps = {
    name: string;
    foodType: string;
    bowlStatus: string;
};

function Kitten(props: KittenProps) {
    return (
        <div>
            {props.name} eats{" "}
            <Bowl
                foodType={props.foodType}
                bowlStatus={props.bowlStatus}
            />
        </div>
    );
}

export default Kitten;
