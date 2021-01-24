import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface AudioVisualizerProps {
  audio?: HTMLAudioElement;
}

const AudioCanvas = styled.canvas`
  position: absolute;
  width: 100%;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 80%;
`;

const AudioVisualizer = ({ audio }: AudioVisualizerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // useEffect(() => {
  //   if (!audio) {
  //     return;
  //   }
  //   const canvas = canvasRef.current;
  //   const audioCtx = new AudioContext();
  //   const source = audioCtx.createMediaElementSource(audio);
  //   const analyser = audioCtx.createAnalyser();
  //   audio.onplay = () => {
  //     audioCtx.resume();
  //   };
  //   analyser.fftSize = 2048;
  //   source.connect(analyser);
  //   source.connect(audioCtx.destination);
  //   let data = new Uint8Array(analyser.frequencyBinCount);

  //   const loopingFunction = () => {
  //     requestAnimationFrame(loopingFunction);
  //     analyser.getByteFrequencyData(data);
  //     draw(data);
  //   };

  //   const draw = (data: Uint8Array) => {
  //     const temp = Array.from(data);
  //     if (canvas) {
  //       const ctx = canvas.getContext('2d');
  //       if (ctx) {
  //         ctx.clearRect(0, 0, canvas.width, canvas.height);
  //         let space = canvas.width / temp.length;
  //         temp.forEach((value, i) => {
  //           ctx.beginPath();
  //           ctx.moveTo(space * i, canvas.height); //x,y
  //           ctx.lineTo(space * i, canvas.height - value); //x,y
  //           ctx.stroke();
  //         });
  //       }
  //     }
  //   };
  // }, []);

  return <AudioCanvas ref={canvasRef} />;
};

export default AudioVisualizer;
