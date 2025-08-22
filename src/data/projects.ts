export type Project = {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: "Featured Project One",
    description:
      "A short, high-impact description of what this does, the stack, and your role.",
    href: "https://example.com",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Open Source Library",
    description:
      "A utility/package you built or contributed to. Mention downloads, stars, or adoption.",
    href: "https://github.com/your-handle/your-repo",
    tags: ["Node.js", "OSS"],
  },
  {
    title: "Case Study",
    description:
      "A client project or case study with measurable outcomes (performance, revenue, UX).",
    tags: ["React", "Design", "Performance"],
  },
];
