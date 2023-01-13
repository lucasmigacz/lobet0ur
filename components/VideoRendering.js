import styles from "../styles/VideoRendering.module.css";
import { IoCloseOutline } from "react-icons/io5";

const VideoRendering = ({ setVideoState, videoState }) => {
  const handleClose = () => {
    setVideoState((prev) => !prev);
  };
  return (
    <>
      <div className={styles.VideoRendering}>
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/Cgxv2-HP5xI"
          title="Pacifists Reacts To MMA Knockouts"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.videoYt}
        />
        <IoCloseOutline
          size={50}
          className={styles.closeIcon}
          onClick={handleClose}
        />
      </div>
    </>
  );
};

export default VideoRendering;
