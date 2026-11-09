import type { VideoItem } from "@/content/types";
import Link from "next/link";
import { PosterGrades, PosterRecovery } from "../illustrations/Plates";
import { VideoFacade } from "../media/VideoFacade";
import { SampleChip } from "../ui/SampleChip";
import { SectionHead } from "../ui/SectionHead";
import { isLinkVisible } from "@/lib/pages";
import styles from "../media/VideoFacade.module.css";

export function VideoCard({ video }: { video: VideoItem }) {
  return (
    <figure className={styles.vid}>
      <VideoFacade title={video.title} duration={video.duration} youtubeId={video.youtubeId}>
        {video.poster === "grades" ? <PosterGrades /> : <PosterRecovery />}
      </VideoFacade>
      <h3>{video.title}</h3>
      <p>{video.duration} min. {video.isSample && <SampleChip />}</p>
      <details>
        <summary>Read the transcript</summary>
        <p>{video.transcript} {video.isSample && <SampleChip />}</p>
      </details>
    </figure>
  );
}

export function VideosSection({ videos }: { videos: VideoItem[] }) {
  if (videos.length === 0) return null;
  return (
    <section className="sec" id="videos">
      <SectionHead>Two short videos on what happens next</SectionHead>
      <p className="lead">Both answer the same question: what happens after the first visit. The player loads only after you press play. <SampleChip /></p>
      <div className={`${styles.vgrid} full`}>
        {videos.map((v) => <VideoCard key={v.slug} video={v} />)}
      </div>
      {isLinkVisible("/videos") && <p style={{ marginTop: 18 }}><Link className="lk" href="/videos">All videos</Link></p>}
    </section>
  );
}
