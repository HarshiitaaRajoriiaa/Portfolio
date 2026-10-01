import {
  FiChevronRight,
  FiCode,
  FiDatabase,
  FiBarChart2,
  FiFileText,
  FiMapPin,
  FiMail,
} from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen border-b border-[#30363d] bg-[#0d1117] pt-[100px]"
    >
      <div className="md:ml-[272px]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_0.8fr]">
            
            {/* LEFT */}
            <div>
              {/* Breadcrumb */}
              <div className="mb-7 flex items-center gap-2 font-mono text-xs text-[#6e7681]">
                <span>portfolio</span>
                <FiChevronRight size={12} />
                <span className="text-[#8b949e]">profile.py</span>
              </div>

              {/* Code-style intro */}
              <div className="mb-6 flex gap-4 font-mono text-sm">
                <span className="select-none text-[#484f58]">01</span>
                <span className="text-[#ff7b72]">class</span>
                <span className="text-[#79c0ff]">DataAnalyst</span>
                <span className="text-[#e6edf3]">:</span>
              </div>

              <div className="ml-8">
                <div className="mb-2 font-mono text-sm text-[#8b949e]">
                  name =
                </div>

                <h1 className="text-4xl font-semibold tracking-tight text-[#e6edf3] sm:text-5xl lg:text-6xl">
                  Harshita Rajoria
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-sm">
                  <span className="text-[#ff7b72]">role</span>
                  <span className="text-[#e6edf3]">=</span>
                  <span className="text-[#a5d6ff]">
                    "Data Analyst"
                  </span>
                </div>

                <p className="mt-7 max-w-2xl text-base leading-7 text-[#8b949e] sm:text-lg">
                  B.Tech CSE (Artificial Intelligence) graduate from IGDTUW,
                  focused on turning data into clear insights, dashboards,
                  and business decisions.
                </p>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    ["Python", FiCode],
                    ["SQL", FiDatabase],
                    ["Power BI", FiBarChart2],
                    ["Excel", FiFileText],
                  ].map(([label, Icon]) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 border border-[#30363d] bg-[#161b22] px-3 py-2 font-mono text-xs text-[#c9d1d9]"
                    >
                      <Icon size={13} className="text-[#58a6ff]" />
                      {label}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="flex items-center gap-2 border border-[#238636] bg-[#238636] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#2ea043]"
                  >
                    View Projects
                    <FiChevronRight size={15} />
                  </a>

                  <a
                    href="#contact"
                    className="flex items-center gap-2 border border-[#30363d] bg-[#161b22] px-5 py-2.5 text-sm font-medium text-[#c9d1d9] transition hover:border-[#58a6ff] hover:text-white"
                  >
                    <FiMail size={14} />
                    Contact Me
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT — PROFILE CARD */}
            <div className="relative">
              <div className="border border-[#30363d] bg-[#161b22] shadow-2xl">
                
                {/* Window header */}
                <div className="flex items-center justify-between border-b border-[#30363d] px-4 py-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#8b949e]">
                    <FiCode className="text-[#dcdcaa]" size={14} />
                    profile.py
                  </div>

                  <span className="flex items-center gap-2 font-mono text-[11px] text-[#3fb950]">
                    <span className="h-2 w-2 rounded-full bg-[#3fb950]" />
                    Available
                  </span>
                </div>

                {/* Profile */}
                <div className="p-5">
                  <div className="overflow-hidden border border-[#30363d] bg-[#0d1117]">
                    <img
                      src="/profile.jpg"
                      alt="Harshita Rajoria"
                      className="h-64 w-full object-cover object-top"
                    />
                  </div>

                  <div className="mt-5 space-y-4 font-mono text-xs">
                    <div className="flex items-start gap-3">
                      <span className="text-[#6e7681]">01</span>

                      <div>
                        <p className="text-[#6e7681]">location</p>
                        <p className="mt-1 text-[#a5d6ff]">
                          <FiMapPin className="mr-1 inline" size={12} />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-[#6e7681]">02</span>

                      <div>
                        <p className="text-[#6e7681]">
                          specialization
                        </p>
                        <p className="mt-1 text-[#c9d1d9]">
                          Data Analytics · BI · SQL
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-[#6e7681]">03</span>

                      <div>
                        <p className="text-[#6e7681]">experience</p>
                        <p className="mt-1 text-[#c9d1d9]">
                          HSBC · Survetrics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-[#30363d] px-5 py-3 font-mono text-[11px] text-[#6e7681]">
                  # open to data & analytics opportunities
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;