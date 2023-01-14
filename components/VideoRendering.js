import styles from "../styles/VideoRendering.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { motion, useViewportScroll } from "framer-motion";

const VideoRendering = ({ setVideoState, videoState }) => {
  const handleClose = () => {
    setVideoState((prev) => !prev);
  };
  const ref = useRef(null);
  useClickAway(ref, () => {
    setVideoState(false);
  });
  return (
    <>
      <div className={styles.VideoRendering}>
        <iframe
          src="https://www.youtube.com/embed/Cgxv2-HP5xI"
          title="Pacifists Reacts To MMA Knockouts"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.videoYt}
          ref={ref}
          style={{
            width: 1000,
            height: 600,
          }}
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
