const experiences = [
  {
    role: "Network Development Intern",
    company: "Algérie Telecom — Skills Center",
    period: "August - September 2026",
    points: [
      "Developed NetWatch, a network monitoring and administration platform, from architecture through implementation.",
      "Worked on a client-server architecture supporting network discovery and device monitoring.",
      "Built security-oriented data collection for identifying and tracking devices on the network.",
      "Contributed to a centralized dashboard for monitoring devices and analyzing network activity.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "SolR Us — Startup",
    period: "July - August 2026",
    points: [
      "Implemented the UI and frontend of the company's landing page.",
      "Built the authentication flow, including login and signup pages.",
      "Spent 5 days with the CRM/PBM team: learned the ticketing workflow, reviewed tickets, and implemented tickets end-to-end.",
    ],
  },
  {
    role: "Frontend Junior Developer",
    company: "El-Awj — Educational Platform Startup",
    period: "August - September 2025",
    points: [
      "Developed responsive UIs for an online educational support platform.",
      "Contributed to frontend development and integration.",
      "Improved user experience and interface responsiveness across the application.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "CDER — Renewable Energy Research Center",
    period: "June - August 2024",
    points: [
      "Trained ML models to predict missing wind speed and direction values.",
      "Processed meteorological datasets with irregular sampling intervals (30 minutes to 3 hours).",
      "Contributed to wind turbine placement site analysis across Algeria.",
      "Presented and reported project findings to supervisors.",
    ],
  },
];

const Experience = () => (
  <div className="w-full min-h-screen px-4 py-24 sm:px-10 sm:py-32 mx-auto flex flex-col gap-12 items-center justify-center">
    <div className="text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#CBACF9]/80">Career path</p>
      <h2 className="text-2xl sm:text-4xl text-center font-bold">
        My <span className="text-[#CBACF9]">experience</span> &amp; internships
      </h2>
    </div>

    <div className="relative w-full max-w-5xl">
      <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-[#CBACF9]/20 via-[#CBACF9]/70 to-[#CBACF9]/20 sm:left-1/2 sm:-translate-x-1/2" />
      <div className="flex flex-col gap-12 sm:gap-16">
        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <article
              key={experience.role}
              className={`relative pl-12 sm:flex sm:w-full sm:items-start sm:pl-0 ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              <span className="absolute left-[11px] top-7 z-10 h-3 w-3 rounded-full bg-[#CBACF9] shadow-[0_0_0_5px_rgba(203,172,249,0.14),0_0_14px_rgba(203,172,249,0.7)] sm:left-1/2 sm:-translate-x-1/2" />

              <div className={`w-full sm:w-[calc(50%-2.5rem)] ${isLeft ? "sm:text-right" : "sm:text-left"}`}>
                <div className={`mb-3 flex items-center gap-3 ${isLeft ? "sm:justify-end" : "sm:justify-start"}`}>
                  <span className="inline-flex rounded-full border border-[#CBACF9]/40 bg-[#CBACF9]/15 px-3 py-1 text-xs font-semibold tracking-wide text-[#CBACF9]">
                    {experience.period}
                  </span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/90 to-gray-950/90 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-colors duration-150 hover:border-[#CBACF9]/45">
                  <h3 className="text-lg font-bold text-white">{experience.role}</h3>
                  <p className="mt-1 text-sm font-medium text-[#CBACF9]">{experience.company}</p>
                  <ul className={`mt-4 flex flex-col gap-2 ${isLeft ? "sm:items-end" : "sm:items-start"}`}>
                    {experience.points.map((point) => (
                      <li key={point} className={`flex max-w-xl gap-2 text-left text-sm leading-relaxed text-white/75 ${isLeft ? "sm:flex-row-reverse" : ""}`}>
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#CBACF9]/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </div>
);

export default Experience;
