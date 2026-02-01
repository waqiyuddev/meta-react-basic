import { useRef } from "react";

function BirdSounds() {
    const bird1Ref = useRef<HTMLAudioElement | null>(null);
    const bird2Ref = useRef<HTMLAudioElement | null>(null);

    function toggle1() {
        const bird1 = bird1Ref.current;
        if (!bird1) return;

        bird1.paused ? bird1.play() : bird1.pause();
    }

    function toggle2() {
        const bird2 = bird2Ref.current;
        if (!bird2) return;

        bird2.paused ? bird2.play() : bird2.pause();
    }

    return (
        <div>
            <audio
                ref={bird1Ref}
                src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
            />

            <audio
                ref={bird2Ref}
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
            />

            <button onClick={toggle1}>Caspian Tern 1</button>
            <button onClick={toggle2}>Caspian Tern 2</button>
        </div>
    );
}

export default BirdSounds;
