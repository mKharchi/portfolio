"use client";

import Link from "next/link";

const Card = ({
  title,
  technologies,
  description,
  link,
  role,
  featured = false,
}) => (
  <article
    className={`project-card relative w-11/12 md:w-full rounded-2xl overflow-hidden flex flex-col sm:flex-row transition-transform duration-200 ease-out hover:-translate-y-1 ${
      featured
        ? "ring-1 ring-[#CBACF9]/50 shadow-[0_8px_32px_rgba(203,172,249,0.18)]"
        : "shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
    }`}
  >
    {/* ── Left zone: identity ── */}
    <div className="relative flex flex-col justify-between gap-6 bg-gradient-to-br from-[#1a0f2e] to-[#2a1650] p-6 sm:w-2/5 sm:min-w-[160px]">
      {/* Featured badge */}
      {featured && (
        <span className="absolute bottom-6 right-3 rounded-full bg-[#CBACF9] px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-gray-900 shadow">
          ★ Latest
        </span>
      )}

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-extrabold leading-snug text-white">
          {title}
        </h2>
        {role && (
          <p className="text-xs font-medium tracking-wide text-[#CBACF9]/80">
            {role}
          </p>
        )}
      </div>

      {/* GitHub link */}
      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on GitHub`}
          className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-[#CBACF9]/30 bg-[#CBACF9]/10 px-3 py-1.5 text-xs font-semibold text-[#CBACF9] transition-colors duration-150 hover:bg-[#CBACF9]/20"
        >
          <svg
            className="h-3.5 w-3.5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
            />
          </svg>
          GitHub
        </Link>
      )}
    </div>

    {/* ── Thin divider ── */}
    <div className="hidden sm:block w-px self-stretch bg-gradient-to-b from-transparent via-[#CBACF9]/30 to-transparent" />

    {/* ── Right zone: details ── */}
    <div className="flex flex-col justify-between gap-4 bg-gradient-to-br from-[#0d1117] to-[#111827] p-6 sm:flex-1">
      {description && (
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
      )}

      {/* Tech badges */}
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </article>
);

export default Card;
