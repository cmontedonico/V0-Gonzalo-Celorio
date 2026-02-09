"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { InteractivePoint } from "@/components/interactive-point";
import { VideoPlayer } from "@/components/video-player";
import { MusicPlayer, type MusicPlayerRef } from "@/components/music-player";

const interactivePoints = [
  {
    id: 1,
    image: "/images/curriculum.jpg",
    title: "Ese Montón de espejos rotos (memorias)",
    videoSrc: "https://youtu.be/PYM8SST6gTA",
    position: { top: "65%", right: "15%" }, // Right side, top
  },
  {
    id: 2,
    image: "/images/bibliografia.jpg",
    title: "Bibliografía",
    videoSrc: "https://www.youtube.com/watch?v=xS4sjxa2wX8",
    position: { top: "15%", right: "15%" }, // Right side, below Curriculum
  },
  {
    id: 3,
    image: "/images/autoficcion.jpg",
    title: "Sobre la Auto-ficción",
    videoSrc: "https://www.youtube.com/watch?v=SrKyy7MQlc0",
    position: { top: "65%", left: "35%" }, // Center top, above Gonzalo's head
  },
  {
    id: 4,
    image: "/images/tres-lindas-cubanas.jpg",
    title: "Tres Lindas Cubanas (línea materna)",
    videoSrc: "https://youtu.be/rM_PV6fZKB0",
    position: { top: "15%", left: "10%" }, // Left side, top
  },
  {
    id: 5,
    image: "/images/el-metal-y-la-escoria.jpg",
    title: "El metal y la escoria (línea paterna)",
    videoSrc: "https://youtu.be/DdutUpMxpBE",
    position: { top: "40%", left: "10%" }, // Left side, middle
  },
  {
    id: 6,
    image: "/images/los-apostatas.jpg",
    title: "Los apostatas (hermanos)",
    videoSrc: "https://youtu.be/6mFesry3JNg",
    position: { top: "65%", left: "10%" }, // Left side, bottom
  },
];

export default function HomePage() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const musicPlayerRef = useRef<MusicPlayerRef>(null);

  useEffect(() => {
    if (currentVideo) {
      // Pause music when video opens
      musicPlayerRef.current?.pause();
    } else {
      // Resume music when video closes
      musicPlayerRef.current?.play();
    }
  }, [currentVideo]);

  const handlePointHover = (id: number, isHovering: boolean) => {
    setHoveredPoint(isHovering ? id : null);
  };

  const handleVideoPlay = (videoSrc: string) => {
    setCurrentVideo(videoSrc);
  };

  const handleVideoClose = () => {
    setCurrentVideo(null);
  };

  const isBackgroundBlurred = hoveredPoint !== null;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <MusicPlayer
        ref={musicPlayerRef}
        audioSrc="/music/gonzalo.mp3"
        autoPlay
      />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/library-background.jpg"
          alt="Gonzalo Celorio Library"
          fill
          className={`object-cover transition-all duration-300 ${isBackgroundBlurred ? "blur-background" : ""}`}
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Interactive Points */}
      <div className="relative z-10 w-full h-screen">
        {interactivePoints.map((point) => (
          <InteractivePoint
            key={point.id}
            id={point.id}
            image={point.image}
            title={point.title}
            videoSrc={point.videoSrc}
            position={point.position}
            onHover={handlePointHover}
            onVideoPlay={handleVideoPlay}
          />
        ))}
      </div>

      {/* Title Overlay */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-2xl">
          Gonzalo Celorio
        </h1>
        <p className="text-xl text-white/90 drop-shadow-lg mt-2">
          Premio Cervantes 2025
        </p>
      </div>

      {/* Footer with link to about page */}
      <footer className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <Link
          href="/about"
          className="text-white/80 hover:text-white text-sm transition-colors duration-200 drop-shadow-lg hover:underline"
        >
          Realización Jorge Suárez - UAM México
        </Link>
      </footer>

      {/* Video Player */}
      {currentVideo && (
        <VideoPlayer videoSrc={currentVideo} onClose={handleVideoClose} />
      )}
    </main>
  );
}
