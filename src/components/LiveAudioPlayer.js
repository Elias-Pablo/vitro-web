"use client";

import { useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Image from "next/image";

export default function LiveAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-4xl flex flex-col items-center">
      {/* Texto dinámico */}
      <h1 className="font-extrabold text-xs lg:text-lg animate-bounce text-center">
        {isPlaying ? (
          <>🎶 Estás escuchando la transmisión en vivo de "El Vitrola" 📻 🎶</>
        ) : (
          "⬇ Dale Play a la señal EN VIVO ⬇"
        )}
      </h1>

      {/* Animación de monitos bailando cuando está en reproducción */}
      {isPlaying && (
        <div className="flex space-x-2 my-2">
          <Image
            src="/bailarin1.gif"
            alt="Monito bailando"
            width={25}
            height={25}
          />
          <Image
            src="/bailarin1.gif"
            alt="Monito bailando"
            width={25}
            height={25}
          />
          <Image
            src="/bailarin1.gif"
            alt="Monito bailando"
            width={25}
            height={25}
          />
        </div>
      )}

      {/* Animación de ondas cuando está en reproducción */}
      <div className="h-8 flex items-end justify-center mb-2 space-x-1">
        {isPlaying ? (
          <>
            <span className="w-1 h-6 bg-yellow-400 animate-wave1"></span>
            <span className="w-1 h-6 bg-yellow-400 animate-wave2"></span>
            <span className="w-1 h-6 bg-yellow-400 animate-wave3"></span>
            <span className="w-1 h-6 bg-yellow-400 animate-wave2"></span>
            <span className="w-1 h-6 bg-yellow-400 animate-wave1"></span>
          </>
        ) : (
          <span className="text-gray-400 text-lg">...</span>
        )}
      </div>

      {/* Reproductor de audio */}
      <AudioPlayer
        src="https://servers58.com/proxy/sc_elvitrola?mp=/;"
        autoPlay={false}
        customProgressBarSection={[
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.CURRENT_TIME,
          <div className="text-white">/</div>,
          RHAP_UI.DURATION,
        ]}
        showJumpControls={false}
        showDownloadProgress={true}
        showFilledProgress={false}
        autoPlayAfterSrcChange={false}
        hasDefaultKeyBindings={false}
        preload="none"
        layout="vertical"
        className="w-full text-white rounded-xl shadow-lg p-4"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Estilos personalizados */}
      <style>
        {`
          .rhap_container {
            background: #1a1a1a !important;
            color: white;
            border-radius: 12px;
          }
          .rhap_time {
            color: #f2f2f2 !important;
          }
          .rhap_progress-bar {
            background: #444 !important;
          }
          .rhap_progress-indicator {
            background: #fbb043 !important;
          }
          .rhap_play-pause-button {
            color: #fbb043 !important;
          }
          .rhap_volume-indicator {
            background: #fbb043 !important;
          }
          .rhap_volume-bar {
            background: #444 !important;
          }
          /* Animaciones de ondas que suben desde abajo */
          @keyframes wave1 {
            0%, 100% { transform: scaleY(0.3); }
            50% { transform: scaleY(1); }
          }
          @keyframes wave2 {
            0%, 100% { transform: scaleY(0.5); }
            50% { transform: scaleY(1); }
          }
          @keyframes wave3 {
            0%, 100% { transform: scaleY(0.7); }
            50% { transform: scaleY(1); }
          }
          .animate-wave1 {
            animation: wave1 1s infinite ease-in-out;
          }
          .animate-wave2 {
            animation: wave2 1s infinite ease-in-out;
          }
          .animate-wave3 {
            animation: wave3 1s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
