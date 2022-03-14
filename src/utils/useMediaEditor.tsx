/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'

const useMediaPlayer = (mediaElement: any) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  })

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    })
  }

  useEffect(() => {
    // playerState.isPlaying
    //   ? mediaElement.current.play()
    //   : mediaElement.current.pause()
    if (mediaElement.current !== null)
      playerState.isPlaying
        ? mediaElement.current.play()
        : mediaElement.current.pause()
  }, [playerState.isPlaying, mediaElement, mediaElement.current])

  const handleOnTimeUpdate = () => {
    // const progress =
    //   (mediaElement.current.currentTime / mediaElement.current.duration) * 100
    // setPlayerState({
    //   ...playerState,
    //   progress,
    // })
    if (mediaElement.current !== null) {
      const progress =
        (mediaElement.current.currentTime / mediaElement.current.duration) * 100
      setPlayerState({
        ...playerState,
        progress,
      })
    }
  }

  const handleVideoProgress = (event: any) => {
    // const manualChange = Number(event.target.value)
    // mediaElement.current.currentTime =
    //   (mediaElement.current.duration / 100) * manualChange
    // setPlayerState({
    //   ...playerState,
    //   progress: manualChange,
    // })
    if (mediaElement.current !== null) {
      const manualChange = Number(event.target.value)
      mediaElement.current.currentTime =
        (mediaElement.current.duration / 100) * manualChange
      setPlayerState({
        ...playerState,
        progress: manualChange,
      })
    }
  }

  const handleVideoSpeed = (event: any) => {
    // const speed = Number(event.target.value)
    // mediaElement.current.playbackRate = speed
    // setPlayerState({
    //   ...playerState,
    //   speed,
    // })
    if (mediaElement.current !== null) {
      const speed = Number(event.target.value)
      mediaElement.current.playbackRate = speed
      setPlayerState({
        ...playerState,
        speed,
      })
    }
  }

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    })
  }

  useEffect(() => {
    if (mediaElement.current !== null) {
      playerState.isMuted
        ? (mediaElement.current.muted = true)
        : (mediaElement.current.muted = false)
    }
  }, [playerState.isMuted, mediaElement])

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  }
}

export default useMediaPlayer
