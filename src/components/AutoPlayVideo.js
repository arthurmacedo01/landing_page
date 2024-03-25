import React, { useState } from "react";
import YouTube from "react-youtube";
import unmuteImg from "../assets/img/unmute.png";
import classes from "./AutoPlayVideo.module.css";

function AutoPlayVideo({ videoURL }) {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState(null);

  const onReady = (event) => {
    // Access to the player in all event handlers via event.target
    setPlayer(event.target);
    event.target.mute();
    event.target.playVideo();
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
      // YouTube's IFrame player can take a number of parameters.
      autoplay: 1, // Auto-play the video on load
      controls: 0, // Do not show video controls
      disablekb: 1,
      loop: 1, // Loop the video
      modestbranding: 1, // Hide the YouTube logo on the control bar
      rel: 0, // Do not show related videos after the video ends
      showinfo: 0,
    },
  };

  return (
    <div className={classes.video_wrapper}>
      <YouTube
        videoId={extractYouTubeID(videoURL)}
        opts={opts}
        onReady={onReady}
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
    </div>
  );
}

function extractYouTubeID(url) {
  // Extract the YouTube ID from the URL
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
}

export default AutoPlayVideo;
