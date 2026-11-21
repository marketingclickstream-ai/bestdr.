import type { BlogPost } from "../types";
import { posts as baseStubs } from "./base";
import * as gynecomastia from "./gynecomastia";
import * as liposuction from "./liposuction";
import * as acne from "./acne";
import * as hydrafacial from "./hydrafacial";
import * as botulinumToxin from "./botulinum-toxin";
import * as antiAging from "./anti-aging";
import * as prp from "./prp";
import * as hairTransplant from "./hair-transplant";

// The blog list. Written guides (gynecomastia.ts, liposuction.ts and the six skin, hair and anti-aging files) replace
// the stub with the same slug; stubs without a written guide stay as drafts. Any exported array of posts in those files is picked up.

const isPost = (x: unknown): x is BlogPost => typeof x === "object" && x !== null && "slug" in x && "body" in x && "title" in x;
const fromModule = (mod: Record<string, unknown>): BlogPost[] => Object.values(mod).flatMap((v) => (Array.isArray(v) ? v.filter(isPost) : isPost(v) ? [v] : []));

const written = [
  ...fromModule(gynecomastia),
  ...fromModule(liposuction),
  ...fromModule(acne),
  ...fromModule(hydrafacial),
  ...fromModule(botulinumToxin),
  ...fromModule(antiAging),
  ...fromModule(prp),
  ...fromModule(hairTransplant),
];
const writtenSlugs = new Set(written.map((p) => p.slug));

export const posts: BlogPost[] = [...baseStubs.filter((p) => !writtenSlugs.has(p.slug)), ...written];
