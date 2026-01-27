"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface InteractivePointProps {
  id: number;
  image: string;
  title: string;
  videoSrc: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  onHover: (id: number, isHovering: boolean) => void;
  onVideoPlay: (videoSrc: string) => void;
}

export function InteractivePoint({
  id,
  image,
  title,
  videoSrc,
  position,
  onHover,
  onVideoPlay,
}: InteractivePointProps) {
  const [isHovered, setIsHovered] = useState(false);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(id, true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(id, false);
  };

  const handleClick = () => {
    onVideoPlay(videoSrc);
  };

  return (
    <>
      <div
        className="absolute interactive-point"
        style={position}
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
            <p className="text-sm font-medium text-white bg-black/70 px-2 py-1 rounded shadow-md">
              {title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
