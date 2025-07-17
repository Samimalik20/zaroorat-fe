import { ActionIcon } from "@mantine/core";
import React, { useRef, useState } from "react";
import IconMicroPhone from "../../assets/icons/IconMicrophone";
import IconMicroPhoneStop from "../../assets/icons/IconStopMicrophone";

interface AudioRecorderProps {
  onRecordingComplete: (url: string) => void;
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({ onRecordingComplete }) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioURL, setAudioURL] = useState<string>("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null); // keep track of the stream
console.log(audioURL)
  const startRecording = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Your browser does not support microphone access.");
        return;
      }

      if (!window.MediaRecorder) {
        alert("Your browser does not support MediaRecorder API.");
        return;
      }

      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event: BlobEvent) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        handleRecordingStop();
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      if (error instanceof DOMException) {
        switch (error.name) {
          case "NotAllowedError":
          case "PermissionDeniedError":
            alert("Microphone access denied. Please enable it in your browser.");
            break;
          case "NotFoundError":
            alert("No microphone found. Please check your setup.");
            break;
          default:
            alert(`Error: ${error.message}`);
        }
      } else {
        alert("An unexpected error occurred.");
      }
      console.error("Recording error:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleRecordingStop = () => {
    const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
    const url = URL.createObjectURL(audioBlob);
    setAudioURL(url);
    onRecordingComplete(url);

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  return (
    <div>
      {!isRecording ? (
        <ActionIcon onClick={startRecording} variant="subtle">
          <IconMicroPhone />
        </ActionIcon>
      ) : (
        <ActionIcon onClick={stopRecording} variant="subtle">
          <IconMicroPhoneStop />
        </ActionIcon>
      )}
    </div>
  );
};

export default AudioRecorder;
