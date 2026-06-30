import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Added for routing
import "./videoCall.css";
import {
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  PhoneOff,
} from "lucide-react";

export default function Video() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate(); // Added navigation hook

  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      alert("Unable to access camera or microphone.");
      console.error(err);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null; // Clear stream reference from DOM
    }
  };

  const toggleCamera = () => {
    const videoTrack = streamRef.current?.getVideoTracks()[0];
    if (!videoTrack) return; // Optional chaining safety guard

    videoTrack.enabled = !videoTrack.enabled;
    setCameraOn(videoTrack.enabled);
  };

  const toggleMic = () => {
    const audioTrack = streamRef.current?.getAudioTracks()[0];
    if (!audioTrack) return; // Optional chaining safety guard

    audioTrack.enabled = !audioTrack.enabled;
    setMicOn(audioTrack.enabled);
  };

  const endCall = () => {
    stopCamera();
    navigate("/messages"); // Redirect back to chat interface
  };

  return (
    <div className="video-call-container">
      <div className="video-screen">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="local-video"
        />
      </div>

      <div className="video-controls">
        <button onClick={toggleMic}>
          {micOn ? <Mic size={22} /> : <MicOff size={22} />}
        </button>

        <button onClick={toggleCamera}>
          {cameraOn ? <VideoIcon size={22} /> : <VideoOff size={22} />}
        </button>

        <button className="end-call" onClick={endCall}>
          <PhoneOff size={22} />
        </button>
      </div>
    </div>
  );
}