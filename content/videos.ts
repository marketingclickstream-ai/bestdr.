import type { VideoItem } from "./types";

// Both videos are sample entries: no file exists yet, the YouTube id is empty and the
// transcript is a draft for the reviewer. NEEDS REAL DATA: script, recording, upload date.
export const videos: VideoItem[] = [
  {
    slug: "gynecomastia-explained",
    title: "Gynecomastia explained: grades, causes and when to see a doctor",
    duration: "4:30",
    isoDuration: "PT4M30S",
    description: "A short sample video on how doctors describe the grades of gynecomastia, common causes, and when to see a doctor.",
    transcript:
      "Gynecomastia is growth of breast gland tissue in boys and men. Doctors describe the size on a four-point scale. Some cases settle on their own, especially in teenagers. Others are linked to medicines or weight change. Only an examination can tell gland from fat. See a doctor early if there is a hard lump, one-sided change, pain or discharge.",
    poster: "grades",
    posterAlt: "Animated chest diagram showing the four grades",
    youtubeId: null,
    uploadDate: "2026-11-09",
    isSample: true,
  },
  {
    slug: "gynecomastia-recovery-weeks",
    title: "Recovery week by week: what to expect after chest surgery",
    duration: "5:10",
    isoDuration: "PT5M10S",
    description: "A short sample video on what most people notice and do in each week after chest surgery, from day one to week twelve.",
    transcript:
      "Day one is for rest at home with a compression garment on. Swelling and bruising peak in the first week and ease in the second. Many people return to desk work after about a week. Driving usually follows at about two weeks, and chest training after six weeks or more, if the surgeon agrees. Swelling takes months to settle.",
    poster: "recovery",
    posterAlt: "Calendar graphic with weeks 1 to 12 marked",
    youtubeId: null,
    uploadDate: "2026-11-09",
    isSample: true,
  },
];
