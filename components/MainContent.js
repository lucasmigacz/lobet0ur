import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import videoImage from "../public/Video.jpg";
import styles from "../styles/MainContent.module.css";
import VideoRendering from "./VideoRendering";

const MainContent = () => {
  const [videoState, setVideoState] = useState(false);
  const handleVideo = () => {
    setVideoState((prev) => !prev);
    console.log(videoState);
  };

  return (
    <div className={styles.MainContentWrapper}>
      <h1>
        Lobe <span className={styles.TourH1}>Tour</span>
      </h1>
      <p>
        Build your first machine learning model in ten
        <br />
        minutes. No code or experience required.
        testee
        asdasdas
        asdasdasd
        asdasdasdasdasda
        asdasdasdadasdas
      </p>

      <div className={styles.imageContainer}>
        <Image
          src={videoImage}
          fill
          sizes="1400px"
          alt="Image Video"
          onClick={handleVideo}
          placeholder="blur"
          className={styles.videoImage}
        />
      </div>
      <h1>
        Train your app <br /> with Lobe
      </h1>
      <a href="https://lobeprod.azureedge.net/downloads/windows/Lobe.exe">
        <button className={styles.buttonDownload}>Download</button>
      </a>
      {videoState ? <VideoRendering setVideoState={setVideoState} /> : null}
    </div>
  );
};
export default MainContent;
