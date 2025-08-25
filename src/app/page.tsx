import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import TiltImage from "@/components/TiltImage";

export default function Home() {
  return (
    <div className="font-sans bg-cosmic grid-overlay">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-12">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Build delightful products
              <br />
              with <span className="text-gradient">clarity and speed</span>.
            </h1>
            <p className="mt-4 text-foreground/80 max-w-xl">
              I am eager to apply my problem-solving abilities and collaborative
              mindset in a growth-oriented environment
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="rounded-md btn-gradient px-4 py-2 text-sm "
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-md border px-4 py-2 text-sm hover:bg-black/[.05] dark:hover:bg-white/[.06]"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="justify-self-center">
            <TiltImage
              src="/icon.jpg"
              alt="Hero"
              className="size-56 sm:size-64 md:size-72"
              maxRotateDeg={5}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <h2 className="text-xl font-semibold tracking-tight">About</h2>
        <p className="mt-3 text-sm sm:text-base text-foreground/80 max-w-3xl">
          I craft interactive experiences and scalable systems. I enjoy working
          across the stack, from product thinking and UX to APIs and
          infrastructure. I’m currently focused on building with Next.js,
          Typescript, Tailwind and edge-first architectures.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 text-sm sm:text-base text-foreground/80">
          Email:{" "}
          <a
            className="underline underline-offset-4"
            href="mailto:raoumar.dev@gmail.com"
          >
            raoumar.dev@gmail.com
          </a>
        </p>
        <div className="mt-3 flex gap-3 text-sm">
          <a
            className="underline underline-offset-4"
            href="https://github.com/UmerZer0"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="underline underline-offset-4"
            href="https://www.linkedin.com/in/rao-umar/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="underline underline-offset-4"
            href="CV - Rao Umar.pdf"
            // TODO: Add resume
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </section>
    </div>
  );
}
