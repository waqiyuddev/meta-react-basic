import ReactPlayer from "react-player";

function VideoPlayer() {
    const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    return (
        <ReactPlayer
            src={videoUrl}
            controls
            width="400px"
            height="300px"
            playing={false}
            loop={true}
            muted={true}
        // controls={true}
        />
    );
}

export default VideoPlayer;
