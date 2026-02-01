import Wrapper from "./Wrapper";

type HeaderProps = {
    msg: string;
};

function Header(props: HeaderProps) {
    return (
        <div style={{ border: "10px solid whitesmoke" }}>
            <h1>Header here</h1>
            <Wrapper msg={props.msg} />
        </div>
    );
}

export default Header;