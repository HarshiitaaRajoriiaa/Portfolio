import {
  FiUser,
  FiCode,
  FiTarget,
  FiTrendingUp,
  FiDatabase,
} from "react-icons/fi";

function About() {
  return (
    <section
      id="about"
      className="border-b border-[#30363d] bg-[#0d1117]"
    >
      {/* Editor header */}
      <div className="border-b border-[#30363d] bg-[#161b22]">
        <div className="flex h-9 items-center gap-2 px-4 font-mono text-xs text-[#8b949e] md:ml-[272px]">
          <FiUser size={14} className="text-[#4ec9b0]" />
          <span>about.md</span>
          <span className="text-[#484f58]">•</span>
          <span className="text-[#6e7681]">profile</span>
        </div>
      </div>

      <div className="md:ml-[272px]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">

          {/* Intro */}
          <div className="mb-12 max-w-3xl">
            <div className="mb-2 flex items-center gap-2 font-mono text-base text-[#6e7681]">
              <span className="text-[#484f58]">01</span>
              <span>about/</span>
              <span className="text-[#8b949e]">profile.md</span>
            </div>

            {/* <h2 className="text-3xl font-semibold tracking-tight text-[#e6edf3] sm:text-4xl">
              About Me
            </h2> */}

            <p className="mt-4 leading-7 text-[#8b949e]">
              A data-focused profile with a foundation in computer science
              and artificial intelligence.
            </p>
          </div>

          {/* Main content */}
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">

            {/* About card */}
            <div className="border border-[#30363d] bg-[#161b22]">
              <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#0d1117] px-4 py-3 font-mono text-xs text-[#8b949e]">
                <FiCode size={13} className="text-[#4ec9b0]" />
                about_me.md
              </div>

              <div className="p-6 lg:p-8">
                <div className="space-y-5 text-sm leading-7 text-[#c9d1d9]">
                  <p>
                    I’m <span className="text-[#58a6ff]">Harshita Rajoria</span>,
                    a B.Tech Computer Science & Engineering student specializing
                    in Artificial Intelligence at IGDTUW.
                  </p>

                  <p>
                    My primary focus is{" "}
                    <span className="text-[#4ec9b0]">
                      Data Analytics and Business Intelligence
                    </span>
                    . I enjoy working with data to identify patterns, build
                    meaningful KPIs, and turn complex datasets into dashboards
                    that are easier to understand and act on.
                  </p>

                  <p>
                    Through internships at HSBC and Survetrics, I’ve worked
                    with Power BI, Excel, SQL and data validation, while also
                    developing Python-based analytics projects independently.
                  </p>

                  <p>
                    I’m particularly interested in the connection between
                    <span className="text-[#dcdcaa]">
                      {" "}data, technology and business decisions
                    </span>
                    — not just producing reports, but understanding what the
                    numbers mean.
                  </p>
                </div>

                {/* Current focus */}
                <div className="mt-8 border-t border-[#30363d] pt-6">
                  <p className="mb-4 font-mono text-xs text-[#6e7681]">
                    // current_focus
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Analytics",
                      "Business Intelligence",
                      "SQL",
                      "Power BI",
                      "Python",
                    ].map((item) => (
                      <span
                        key={item}
                        className="border border-[#30363d] bg-[#0d1117] px-3 py-1.5 font-mono text-[10px] text-[#8b949e]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-6">

              <div className="border border-[#30363d] bg-[#161b22]">
                <div className="border-b border-[#30363d] bg-[#0d1117] px-4 py-3 font-mono text-xs text-[#8b949e]">
                  profile.json
                </div>

                <div className="space-y-5 p-6">
                  <div className="flex gap-4">
                    <FiTarget
                      size={18}
                      className="mt-0.5 shrink-0 text-[#f2cc60]"
                    />
                    <div>
                      <p className="text-sm font-medium text-[#e6edf3]">
                        Approach
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#8b949e]">
                        Start with the business question, then work backwards
                        through the data.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <FiDatabase
                      size={18}
                      className="mt-0.5 shrink-0 text-[#58a6ff]"
                    />
                    <div>
                      <p className="text-sm font-medium text-[#e6edf3]">
                        Data First
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#8b949e]">
                        Clean, validate and understand the data before building
                        insights.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <FiTrendingUp
                      size={18}
                      className="mt-0.5 shrink-0 text-[#3fb950]"
                    />
                    <div>
                      <p className="text-sm font-medium text-[#e6edf3]">
                        Outcome
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#8b949e]">
                        Build clear reporting that helps people understand
                        performance and trends.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-[#30363d] bg-[#161b22] p-5">
                  <p className="font-mono text-2xl font-semibold text-[#58a6ff]">
                    2
                  </p>
                  <p className="mt-1 text-xs text-[#8b949e]">
                    Analytics Internships
                  </p>
                </div>

                <div className="border border-[#30363d] bg-[#161b22] p-5">
                  <p className="font-mono text-2xl font-semibold text-[#4ec9b0]">
                    8.33
                  </p>
                  <p className="mt-1 text-xs text-[#8b949e]">
                    CGPA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing line */}
          <div className="mt-8 border border-dashed border-[#30363d] bg-[#161b22] px-5 py-4 font-mono text-xs text-[#6e7681]">
            <span className="text-[#4ec9b0]">#</span>{" "}
            Turning data into insights, dashboards and decisions.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;