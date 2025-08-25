export type Project = {
  title: string;
  description: string;
  code?: string;
  href?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: "My Genshin List",
    description:
      "A web application to track your Genshin Impact characters and artifacts.",

    code: "https://github.com/UmerZer0/my-genshin-list",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Basic Banking App",
    description: "A responsive web application to mimic banking operations.",
    code: "https://github.com/UmerZer0/basic-banking-system",
    href: "https://basic-banking-app-kuxou.mongodbstitch.com/",
    tags: ["React.js", "Node.js", "MongoDB"],
  },
  {
    title: "Best Lost Love Astrologer",
    description:
      "Astrology specialist in the USA helping clients reignite lost love and love marriage guidance.",
    // code: "EXAMPLE.COM",
    href: "https://bestlostloveastrologer.com/",
    tags: ["Laravel", "PHP", "MySQL"],
  },
];
