interface HeadingProps {
    firstName: string;
}

function Heading(props: HeadingProps) {
    return (
        <h1>Hello, {props.firstName}</h1>
    )
}

export default Heading;