"use client"

import { useState } from "react"
import Image from "next/image"
import { InteractivePoint } from "@/components/interactive-point"
import { VideoPlayer } from "@/components/video-player"

const interactivePoints = [
  {
    id: 1,
    image: "/images/curriculum.jpg",
    title: "Curriculum",
    audioSrc: "/audio/musica1.mp3",
    videoSrc: "/videos/video1.mp4",
    position: { top: "15%", left: "15%" },
  },
  {
    id: 2,
    image: "/images/bibliografia.jpg",
    title: "Bibliografía",
    audioSrc: "/audio/musica2.mp3",
    videoSrc: "/videos/video2.mp4",
    position: { top: "15%", left: "75%" },
  },
  {
    id: 3,
    image: "/images/autoficcion.jpg",
    title: "Sobre la Auto-ficción",
    audioSrc: "/audio/musica3.mp3",
    videoSrc: "/videos/video3.mp4",
    position: { top: "55%", left: "25%" },
  },
  {
    id: 4,
    image: "/images/tres-lindas-cubanas.jpg",
    title: "Tres Lindas Cubanas (línea materna)",
    audioSrc: "/audio/musica4.mp3",
    videoSrc: "/videos/video4.mp4",
    position: { top: "35%", left: "15%" },
  },
  {
    id: 5,
    image: "/images/el-metal-y-la-escoria.jpg",
    title: "El metal y la escoria (línea paterna)",
    audioSrc: "/audio/musica5.mp3",
    videoSrc: "/videos/video5.mp4",
    position: { top: "35%", left: "45%" },
  },
  {
    id: 6,
    image: "/images/los-apostatas.jpg",
    title: "Los apostatas (hermanos)",
    audioSrc: "/audio/musica6.mp3",
    videoSrc: "/videos/video6.mp4",
    position: { top: "35%", left: "75%" },
  },
]

export default function HomePage() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)

  const handlePointHover = (id: number, isHovering: boolean) => {
    setHoveredPoint(isHovering ? id : null)
  }

  const handleVideoPlay = (videoSrc: string) => {
    setCurrentVideo(videoSrc)
  }

  const handleVideoClose = () => {
    setCurrentVideo(null)
  }

  const isBackgroundBlurred = hoveredPoint !== null

  return (
    <main className="relative min-h-screen overflow-hidden">
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
            audioSrc={point.audioSrc}
            videoSrc={point.videoSrc}
            position={point.position}
            onHover={handlePointHover}
            onVideoPlay={handleVideoPlay}
            isAmplified={hoveredPoint === 3 && [4, 5, 6].includes(point.id)}
          />
        ))}
      </div>

      {/* Title Overlay */}
      <div className="absolute top-8 left-8 z-20">
        <h1 className="text-4xl font-bold text-white drop-shadow-2xl">Gonzalo Celorio</h1>
        <p className="text-xl text-white/90 drop-shadow-lg mt-2">Obra Literaria Interactiva</p>
      </div>

      {/* Video Player */}
      {currentVideo && <VideoPlayer videoSrc={currentVideo} onClose={handleVideoClose} />}
    </main>
  )
}
