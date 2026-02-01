type MessageProps = {
    isLoggedIn: boolean;
};

function Message({ isLoggedIn }: MessageProps) {
    return (
        <p>
            {isLoggedIn ? "Welcome back!" : "Please log in"}
        </p>
    );
}

export default Message;
