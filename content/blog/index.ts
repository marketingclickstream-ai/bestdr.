import type { BlogPost } from "../types";
import { posts as baseStubs } from "./base";
import * as gynecomastia from "./gynecomastia";
import * as liposuction from "./liposuction";

// The blog list. Written guides (gynecomastia.ts, liposuction.ts) replace the stub with the same slug;
// stubs without a written guide stay as drafts. Any exported array of posts in those two files is picked up.

const isPost = (x: unknown): x is BlogPost => typeof x === "object" && x !== null && "slug" in x && "body" in x && "title" in x;
const fromModule = (mod: Record<string, unknown>): BlogPost[] => Object.values(mod).flatMap((v) => (Array.isArray(v) ? v.filter(isPost) : isPost(v) ? [v] : []));

const written = [...fromModule(gynecomastia), ...fromModule(liposuction)];
const writtenSlugs = new Set(written.map((p) => p.slug));

export const posts: BlogPost[] = [...baseStubs.filter((p) => !writtenSlugs.has(p.slug)), ...written];
