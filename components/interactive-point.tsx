"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface InteractivePointProps {
  id: number
  image: string
  title: string
  audioSrc: string
  videoSrc: string
  position: {
    top: string
    left: string
  }
  onHover: (id: number, isHovering: boolean) => void
  onVideoPlay: (videoSrc: string) => void
  isAmplified?: boolean
}

export function InteractivePoint({
  id,
  image,
  title,
  audioSrc,
  videoSrc,
  position,
  onHover,
  onVideoPlay,
  isAmplified = false,
}: InteractivePointProps) {
  const [isHovered, setIsHovered] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (isHovered && audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(console.error)
    } else if (audioRef.current) {
      audioRef.current.pause()
    }
  }, [isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHover(id, true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onHover(id, false)
  }

  const handleClick = () => {
    onVideoPlay(videoSrc)
  }

  return (
    <>
      <div
        className={`absolute interactive-point ${isAmplified ? "secondary-amplify amplified" : ""}`}
        style={{ top: position.top, left: position.left }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="relative group">
          <div className="w-20 h-20 rounded-lg overflow-hidden shadow-lg border-2 border-white/80 hover:border-accent transition-all duration-300">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <p className="text-sm font-medium text-foreground bg-card/90 px-2 py-1 rounded shadow-md border">{title}</p>
          </div>
        </div>
      </div>
      <audio ref={audioRef} preload="auto">
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
    </>
  )
}
