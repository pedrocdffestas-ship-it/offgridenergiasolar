import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { playMiniVslFromStart, toggleMiniVsl } from "./minivslPlayback";

function media(paused = false) {
  let plays = 0;
  let pauses = 0;
  const video = {
    currentTime: 12,
    muted: true,
    paused,
    ended: false,
    play: () => {
      plays++;
      video.paused = false;
      return Promise.resolve();
    },
    pause: () => {
      pauses++;
      video.paused = true;
    },
  };
  return { video: video as unknown as HTMLVideoElement, calls: () => ({ plays, pauses }) };
}

describe("miniVSL playback rules", () => {
  it("sound activation resets to zero and unmutes before playing", async () => {
    const { video, calls } = media(true);
    await playMiniVslFromStart(video);
    assert.equal(video.currentTime, 0);
    assert.equal(video.muted, false);
    assert.equal(calls().plays, 1);
  });
  it("a tap pauses without changing the position", async () => {
    const { video, calls } = media();
    await toggleMiniVsl(video);
    assert.equal(calls().pauses, 1);
    assert.equal(video.currentTime, 12);
  });
  it("another tap resumes without restarting", async () => {
    const { video, calls } = media(true);
    await toggleMiniVsl(video);
    assert.equal(calls().plays, 1);
    assert.equal(video.currentTime, 12);
  });
});
