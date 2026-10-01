import {
  FiBriefcase,
  FiCalendar,
  FiChevronRight,
  FiExternalLink,
  FiFileText,
  FiCode,
} from "react-icons/fi";

const experiences = [
  {
    company: "HSBC",
    role: "Data Analyst Intern",
    period: "Feb 2026 — Aug 2026",
    logo: "/logos/hsbc.png",
    accent: "text-[#dcdcaa]",
    description:
      "Worked on HR analytics and reporting, transforming enterprise learning data into structured reporting views and stakeholder-ready dashboards.",
    highlights: [
      "Built two complex Power BI dashboards using enterprise-wide HSBC Learning data, consolidating HR information into structured reporting views.",
      "Performed data quality validation and gap analysis in Excel, identifying dataset inconsistencies and coordinating their resolution.",
      "Worked as a Power BI developer on an end-to-end HR analytics project, supporting stakeholder reporting and data-driven communication.",
    ],
    tools: ["Power BI", "DAX", "Excel", "Power Query", "Data Modeling"],
    document: "/Document/HSBC-Internship-Letter.pdf",
  },
  {
    company: "Survetrics",
    role: "Quality Analyst Intern",
    period: "Nov 2024 — Feb 2025",
    logo: "/logos/survetrics.png",
    accent: "text-[#4ec9b0]",
    description:
      "Worked on survey data validation, reporting and dashboard development while collaborating with stakeholders on data requirements and updates.",
    highlights: [
      "Validated 15+ live survey datasets using Excel and MySQL, checking data quality and consistency.",
      "Built Power BI and Streamlit dashboards to support survey analysis and reporting.",
      "Participated in client discussions, requirement gathering and reporting updates.",
    ],
    tools: ["Excel", "MySQL", "Power BI", "Streamlit", "Data Validation"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-[#30363d] bg-[#0d1117]"
    >
      {/* Editor header */}
      <div className="border-b border-[#30363d] bg-[#161b22]">
        <div className="flex h-9 items-center gap-2 px-4 font-mono text-xs text-[#8b949e] md:ml-[272px]">
          <FiBriefcase size={14} className="text-[#d7ba7d]" />
          <span>experience.json</span>
          <span className="text-[#484f58]">•</span>
          <span className="text-[#6e7681]">work-history</span>
        </div>
      </div>

      <div className="md:ml-[272px]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">

          {/* Intro */}
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 flex items-center gap-2 font-mono text-base text-[#6e7681]">
              <span className="text-[#484f58]">01</span>
              <span>experience/</span>
              <span className="text-[#8b949e]">work-history</span>
            </div>

            {/* <h2 className="text-3xl font-semibold tracking-tight text-[#e6edf3] sm:text-4xl">
              Experience
            </h2> */}

            <p className="mt-4 leading-7 text-[#8b949e]">
              Hands-on experience in data analytics, business reporting,
              dashboard development, data quality and stakeholder support.
            </p>
          </div>

          {/* Experience cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <article
                key={experience.company}
                className="overflow-hidden border border-[#30363d] bg-[#161b22] transition duration-300 hover:border-[#58a6ff]"
              >
                {/* File header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#30363d] bg-[#0d1117] px-4 py-3">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <FiCode
                      size={14}
                      className={experience.accent}
                    />

                    <span className="text-[#c9d1d9]">
                      {experience.company.toLowerCase()}.json
                    </span>

                    <span className="text-[#484f58]">|</span>

                    <span className="text-[#6e7681]">
                      {index === 0 ? "01" : "02"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px] text-[#8b949e]">
                    <FiCalendar size={12} />
                    {experience.period}
                  </div>
                </div>

                <div className="p-6 lg:p-8">

                  {/* Company / role */}
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-5">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[#30363d] bg-[#0d1117] p-3">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-[#e6edf3]">
                          {experience.company}
                        </h3>

                        <p className="mt-1 font-mono text-sm text-[#58a6ff]">
                          {experience.role}
                        </p>
                      </div>
                    </div>

                    <div className="hidden items-center gap-2 border border-[#30363d] bg-[#0d1117] px-3 py-2 font-mono text-[10px] text-[#3fb950] sm:flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3fb950]" />
                      Internship
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-7 max-w-4xl text-sm leading-7 text-[#8b949e]">
                    {experience.description}
                  </p>

                  {/* Work */}
                  <div className="mt-8">
                    <div className="mb-4 flex items-center gap-2 font-mono text-xs text-[#6e7681]">
                      <span className="text-[#d7ba7d]">
                        {"{"}
                      </span>
                      <span>key_contributions</span>
                      <span className="text-[#d7ba7d]">
                        {"}"}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {experience.highlights.map((highlight, i) => (
                        <div
                          key={highlight}
                          className="flex gap-4 border-l border-[#30363d] pl-4"
                        >
                          <span className="shrink-0 font-mono text-xs text-[#484f58]">
                            0{i + 1}
                          </span>

                          <p className="text-sm leading-6 text-[#c9d1d9]">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="mt-8">
                    <p className="mb-3 font-mono text-xs text-[#6e7681]">
                      // tools_used
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.tools.map((tool) => (
                        <span
                          key={tool}
                          className="border border-[#30363d] bg-[#0d1117] px-3 py-1.5 font-mono text-[10px] text-[#8b949e]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Document */}
                  {experience.document && (
                    <div className="mt-8 border-t border-[#30363d] pt-6">
                      <a
                        href={experience.document}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border border-[#30363d] bg-[#0d1117] px-4 py-2.5 text-xs font-medium text-[#c9d1d9] transition hover:border-[#58a6ff] hover:text-white"
                      >
                        <FiFileText size={14} />
                        View Internship Letter
                        <FiExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-[#30363d] bg-[#0d1117] px-4 py-2.5 font-mono text-[10px] text-[#6e7681]">
                  {`// ${experience.company} — ${experience.role}`}
                </div>
              </article>
            ))}
          </div>

          {/* Timeline note */}
          <div className="mt-8 flex items-center gap-3 border border-dashed border-[#30363d] bg-[#161b22] px-5 py-4 font-mono text-xs text-[#6e7681]">
            <FiChevronRight size={13} className="text-[#58a6ff]" />
            <span>
              experience = ["HSBC", "Survetrics"]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;