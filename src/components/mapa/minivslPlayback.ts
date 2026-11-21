/** Keep user-initiated playback synchronous with the tap for mobile browsers. */
export function playMiniVslFromStart(video: HTMLVideoElement): Promise<void> {
  video.currentTime = 0;
  video.muted = false;
  return video.play();
}

export function toggleMiniVsl(video: HTMLVideoElement): Promise<void> {
  if (video.paused || video.ended) return video.play();
  video.pause();
  return Promise.resolve();
}
