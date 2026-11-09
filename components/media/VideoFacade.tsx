"use client";

import { useRef, useState } from "react";
import styles from "./VideoFacade.module.css";

/**
 * Click-to-load video. Until the button is pressed there is only a drawn poster: no YouTube
 * script, no iframe, no request to a third party. After the click the privacy-enhanced
 * player (youtube-nocookie.com) is inserted. A sample video has no id, so it shows a note.
 */
export function VideoFacade({ title, duration, youtubeId, children }: { title: string; duration: string; youtubeId: string | null; children: React.ReactNode }) {
  const [active, setActive] = useState(false);
  const playRef = useRef<HTMLButtonElement>(null);

  function close() {
    setActive(false);
    requestAnimationFrame(() => playRef.current?.focus());
  }

  return (
    <div className={styles.vf}>
      {children}
      {!active && (
        <>
          <button ref={playRef} className={styles.vplay} type="button" aria-label={`Play video: ${title}`} onClick={() => setActive(true)}>
            <i></i>Play video
          </button>
          <span className={styles.vdur}>{duration}</span>
        </>
      )}
      {active && youtubeId && (
        <iframe
          className={styles.frame}
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
      {active && !youtubeId && (
        <div className={styles.vmsg}>
          <b>Sample video</b>
          <span>The real recording is not uploaded yet. When it is, the player loads here only after the click, from youtube-nocookie.com.</span>
          <button className="btn btn-line" type="button" style={{ marginTop: 10, color: "#fff", borderColor: "#fff", minHeight: 44 }} onClick={close} autoFocus>Close</button>
        </div>
      )}
    </div>
  );
}
