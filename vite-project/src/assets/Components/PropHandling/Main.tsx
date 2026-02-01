import Header from "./Header";

type MainProps = {
    msg: string;
};

function Main(props: MainProps) {
    return <Header msg={props.msg} />;
}

export default Main;
