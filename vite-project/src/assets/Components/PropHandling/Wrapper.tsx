import Button from "./Button";

type WrapperProps = {
    msg: string;
};

function Wrapper(props: WrapperProps) {
    return (
        <div style={{ border: "10px solid lightgray" }}>
            <h2>Wrapper here</h2>
            <Button msg={props.msg} />
        </div>
    );
}

export default Wrapper;
