import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const faculty = defineCollection({ loader: glob({ pattern: "**/*.json", base: "src/content/faculty" }) });
const research = defineCollection({ loader: glob({ pattern: "**/*.json", base: "src/content/research" }) });
const resources = defineCollection({ loader: glob({ pattern: "**/*.json", base: "src/content/resources" }) });
const site = defineCollection({ loader: glob({ pattern: "**/*.json", base: "src/content/site" }) });
const updates = defineCollection({ loader: glob({ pattern: "**/*.json", base: "src/content/updates" }) });

export const collections = { faculty, research, resources, site, updates };
