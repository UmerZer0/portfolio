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
    title: "Best Lost Love Astrologer",
    description:
      "Astrology specialist in the USA helping clients reignite lost love and love marriage guidance.",
    href: "https://bestlostloveastrologer.com/",
    tags: ["Laravel", "MySQL"],
  },
  {
    title: "Basic Banking App",
    description: "A responsive web application to mimic banking operations.",
    href: "https://basic-banking-app-kuxou.mongodbstitch.com/",
    tags: ["React.js", "Node.js", "MongoDB"],
  },
];
