import {
  FiBookOpen,
  FiCalendar,
  FiCode,
  FiMapPin,
  FiAward,
  FiImage,
} from "react-icons/fi";

function Education() {
  return (
    <section
      id="education"
      className="border-b border-[#30363d] bg-[#0d1117]"
    >
      {/* Editor header */}
      <div className="border-b border-[#30363d] bg-[#161b22]">
        <div className="flex h-9 items-center gap-2 px-4 font-mono text-xs text-[#8b949e] md:ml-[272px]">
          <FiBookOpen size={14} className="text-[#d7ba7d]" />
          <span>education.json</span>
          <span className="text-[#484f58]">•</span>
          <span className="text-[#6e7681]">academic-background</span>
        </div>
      </div>

      <div className="md:ml-[272px]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">

          {/* Intro */}
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 flex items-center gap-2 font-mono text-base text-[#6e7681]">
              <span className="text-[#484f58]">01</span>
              <span>education/</span>
              <span className="text-[#8b949e]">academic-background</span>
            </div>

            {/* <h2 className="text-3xl font-semibold tracking-tight text-[#e6edf3] sm:text-4xl">
              Education
            </h2> */}

            <p className="mt-4 leading-7 text-[#8b949e]">
              Academic foundation in computer science, artificial intelligence
              and data-focused technologies.
            </p>
          </div>

          {/* Main education card */}
          <article className="overflow-hidden border border-[#30363d] bg-[#161b22]">

            {/* File header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#30363d] bg-[#0d1117] px-4 py-3">
              <div className="flex items-center gap-3 font-mono text-xs">
                <FiCode size={14} className="text-[#d7ba7d]" />
                <span className="text-[#c9d1d9]">
                  igdtuw.json
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[10px] text-[#8b949e]">
                <FiCalendar size={12} />
                2022 — 2026
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

              {/* Details */}
              <div className="p-6 lg:p-8">

                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[#30363d] bg-[#0d1117] p-2">
                    <img
                      src="/logos/College.jpg"
                      alt="IGDTUW"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold leading-7 text-[#e6edf3]">
                      Indira Gandhi Delhi Technical University for Women
                    </h3>

                    <p className="mt-2 font-mono text-sm text-[#58a6ff]">
                      B.Tech — Computer Science & Engineering (Artificial Intelligence)
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs text-[#8b949e]">
                      <FiMapPin size={13} />
                      Delhi, India
                    </div>
                  </div>
                </div>

                {/* Academic info */}
                <div className="mt-8 grid gap-px bg-[#30363d] sm:grid-cols-2">

                  <div className="bg-[#161b22] p-5">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-[#6e7681]">
                      <FiAward size={12} />
                      CGPA
                    </div>

                    <p className="mt-2 font-mono text-2xl font-semibold text-[#4ec9b0]">
                      8.33
                    </p>
                  </div>

                  <div className="bg-[#161b22] p-5">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-[#6e7681]">
                      <FiCalendar size={12} />
                      PROGRAM
                    </div>

                    <p className="mt-2 text-sm text-[#c9d1d9]">
                      2022 — 2026
                    </p>
                  </div>
                </div>

                {/* Focus areas */}
                <div className="mt-8">
                  <p className="mb-4 font-mono text-xs text-[#6e7681]">
                    // focus_areas
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Computer Science",
                      "Artificial Intelligence",
                      "Data Analytics",
                      "Database Systems",
                      "Programming",
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

              {/* Photos */}
              <div className="border-t border-[#30363d] bg-[#0d1117] lg:border-l lg:border-t-0">
                <div className="flex items-center gap-2 border-b border-[#30363d] px-4 py-3 font-mono text-xs text-[#6e7681]">
                  <FiImage size={13} />
                  college/
                </div>

                <div className="grid h-full ">
                  <div className="overflow-hidden border border-[#30363d]">
                    <img
                      src="/College/Self.jpg"
                      alt="Harshita at IGDTUW"
                      className="h-full min-h-[220px] w-full object-cover"
                    />
                  </div>

                  {/* <div className="overflow-hidden border border-[#30363d]">
                    <img
                      src="/College/group.jpg"
                      alt="IGDTUW college group"
                      className="h-full min-h-[220px] w-full object-cover"
                    />
                  </div> */}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-[#30363d] bg-[#0d1117] px-4 py-2.5 font-mono text-[10px] text-[#6e7681]">
              // academic foundation → data & technology
            </div>
          </article>

          {/* Note */}
          <div className="mt-8 border border-dashed border-[#30363d] bg-[#161b22] px-5 py-4 font-mono text-xs text-[#6e7681]">
            <span className="text-[#d7ba7d]">education.status</span>
            <span className="text-[#e6edf3]"> = </span>
            <span className="text-[#a5d6ff]">
              "B.Tech completed — 2026"
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;