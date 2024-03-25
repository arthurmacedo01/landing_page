import React, { useState } from "react";
import YouTube from "react-youtube";
import unmuteImg from "../assets/img/unmute.png";
import classes from "./AutoPlayVideo.module.css";

function AutoPlayVideo({ videoURL }) {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState(null);
  const [progress, setProgress] = useState(0); // New state for tracking progress

  const onReady = (event) => {
    setPlayer(event.target);
    event.target.mute();
    event.target.playVideo();
  };

  const onStateChange = (event) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      updateProgress();
    }
  };

  const updateProgress = () => {
    if (!player) return;

    const duration = player.getDuration();
    const currentTime = player.getCurrentTime();
    const x = currentTime / duration;
    const y = 1 - 2.72**(-5*x);
    const progress = y * 100;
    setProgress(progress);

    // If the video is playing, continue updating the progress
    if (player.getPlayerState() === YouTube.PlayerState.PLAYING) {
      setTimeout(updateProgress, 1000); // Update progress every second
    }
  };

  const toggleMute = () => {
    if (!player) return;

    if (isMuted) {
      player.unMute();
      player.seekTo(0); // Start the video from the beginning
      player.playVideo();
    } else {
      player.mute();
    }
    setIsMuted(!isMuted);
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      loop: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <div className={classes.video_wrapper}>
      <YouTube
        videoId={extractYouTubeID(videoURL)}
        opts={opts}
        onReady={onReady}
        onStateChange={onStateChange}
        iframeClassName={classes.video_iframe}
      />
      <div className={classes.overlay}>
        {isMuted && (
          <img
            src={unmuteImg}
            className={classes.unmute}
            alt="Click to unmute"
            onClick={toggleMute}
          />
        )}
      </div>
      <div className={classes.progressBarContainer}>
        <div
          className={classes.progressBar}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

function extractYouTubeID(url) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
}

export default AutoPlayVideo;
