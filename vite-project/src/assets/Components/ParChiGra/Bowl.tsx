type BowlProps = {
    foodType: string;
    bowlStatus: string;
};

function Bowl(props: BowlProps) {
    return (
        <span>
            {props.foodType} and the bowl is {props.bowlStatus}
        </span>
    );
}

export default Bowl;
