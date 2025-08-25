type ProjectCardProps = {
  title: string;
  description: string;
  code?: string;
  href?: string;
  tags?: string[];
};

export default function ProjectCard({
  title,
  description,
  code,
  href,
  tags,
}: ProjectCardProps) {
  return (
    <div className="group rounded-xl border border-black/[.08] dark:border-white/[.12] p-5 hover:shadow-lg transition-shadow bg-background/70 glass">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold tracking-tight text-gradient cursor-default">
          {title}
        </h3>
        <div className="flex items-center gap-2">
          {code ? (
            <a
              className="text-xs rounded-full border px-3 py-1 hover:bg-black/[.05] dark:hover:bg-white/[.06] ml-5"
              href={code}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          ) : null}
          {href ? (
            <a
              className="text-xs rounded-full border px-3 py-1 hover:bg-black/[.05] dark:hover:bg-white/[.06]"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          ) : null}
        </div>
      </div>
      <p className="mt-2 text-sm text-foreground/80">{description}</p>
      {tags && tags.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] rounded-full border px-2 py-0.5 text-foreground/80 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
