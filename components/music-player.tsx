"use client"

import type React from "react"

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react"
import { Volume2, VolumeX } from "lucide-react"

interface MusicPlayerProps {
  audioSrc: string
  autoPlay?: boolean
}

export interface MusicPlayerRef {
  pause: () => void
  play: () => void
}

export const MusicPlayer = forwardRef<MusicPlayerRef, MusicPlayerProps>(({ audioSrc, autoPlay = true }, ref) => {
  const [volume, setVolume] = useState(0.3)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showStartPrompt, setShowStartPrompt] = useState(autoPlay)
  const [isPromptFadingOut, setIsPromptFadingOut] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const playAudio = async () => {
    if (!audioRef.current) {
      return false
    }

    audioRef.current.volume = isMuted ? 0 : volume

    try {
      await audioRef.current.play()
      return true
    } catch (error) {
      console.log("[v0] Background audio autoplay prevented:", error)
      setIsPlaying(false)
      return false
    }
  }

  const hideStartPrompt = () => {
    if (!showStartPrompt) return

    setIsPromptFadingOut(true)
    window.setTimeout(() => {
      setShowStartPrompt(false)
      setIsPromptFadingOut(false)
    }, 300)
  }

  const handleStartMusic = async () => {
    const started = await playAudio()
    if (!started) return

    hideStartPrompt()
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
      if (newVolume === 0) {
        setIsMuted(true)
      } else if (isMuted) {
        setIsMuted(false)
      }
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !isMuted
      setIsMuted(newMuted)
      audioRef.current.volume = newMuted ? 0 : volume
    }
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  useImperativeHandle(ref, () => ({
    pause: () => {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause()
      }
    },
    play: () => {
      if (!audioRef.current) {
        return
      }

      if (audioRef.current.paused) {
        void playAudio().then((started) => {
          if (started) {
            hideStartPrompt()
          }
        })
        return
      }

      hideStartPrompt()
    }
  }))

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-black/80 backdrop-blur-md rounded-full px-4 py-3 shadow-2xl border border-white/10 overflow-hidden min-w-[220px]">
      <audio ref={audioRef} src={audioSrc} loop onPlay={handlePlay} onPause={handlePause} className="hidden" />

      <div className="relative flex items-center gap-3">
        <div
          className={`flex items-center gap-3 transition-opacity duration-300 ${
            showStartPrompt ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Mute Toggle */}
          <button
            onClick={toggleMute}
            className="text-white hover:text-blue-400 transition-colors duration-200"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>

          {/* Volume Slider */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer 
                       [&::-webkit-slider-thumb]:appearance-none 
                       [&::-webkit-slider-thumb]:w-3 
                       [&::-webkit-slider-thumb]:h-3 
                       [&::-webkit-slider-thumb]:rounded-full 
                       [&::-webkit-slider-thumb]:bg-blue-400 
                       [&::-webkit-slider-thumb]:cursor-pointer
                       [&::-webkit-slider-thumb]:hover:bg-blue-300
                       [&::-webkit-slider-thumb]:transition-colors
                       [&::-moz-range-thumb]:w-3 
                       [&::-moz-range-thumb]:h-3 
                       [&::-moz-range-thumb]:rounded-full 
                       [&::-moz-range-thumb]:bg-blue-400 
                       [&::-moz-range-thumb]:cursor-pointer
                       [&::-moz-range-thumb]:hover:bg-blue-300
                       [&::-moz-range-thumb]:border-0"
            aria-label="Volume control"
          />

          {/* Volume Percentage */}
          <span className="text-white text-xs font-medium min-w-10 text-right">
            {Math.round((isMuted ? 0 : volume) * 100)}%
          </span>
        </div>

        {showStartPrompt && (
          <button
            onClick={handleStartMusic}
            className={`absolute inset-0 flex items-center justify-center text-white text-sm font-medium tracking-wide transition-opacity duration-300 ${
              isPromptFadingOut ? "opacity-0" : "opacity-100"
            }`}
            aria-label="Reproducir musica"
          >
            Reproducir musica
          </button>
        )}
      </div>
    </div>
  )
})

MusicPlayer.displayName = "MusicPlayer"
