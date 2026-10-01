import {
  FiCode,
  FiDatabase,
  FiBarChart2,
  FiFileText,
  FiLayers,
  FiTool,
} from "react-icons/fi";

const skillGroups = [
  {
    title: "Data Analytics",
    icon: FiDatabase,
    color: "text-[#58a6ff]",
    skills: [
      "SQL",
      "Python",
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Data Validation",
      "EDA",
      "Statistical Analysis",
      "KPI Development",
    ],
  },
  {
    title: "Business Intelligence",
    icon: FiBarChart2,
    color: "text-[#f2cc60]",
    skills: [
      "Power BI",
      "DAX",
      "Power Query",
      "Advanced Excel",
      "Pivot Tables",
      "Data Modeling",
      "Dashboard Development",
      "Reporting",
    ],
  },
  {
    title: "Visualization & Apps",
    icon: FiLayers,
    color: "text-[#4ec9b0]",
    skills: [
      "Plotly",
      "Streamlit",
      "Interactive Dashboards",
      "Data Visualization",
    ],
  },
  {
    title: "Databases & Tools",
    icon: FiTool,
    color: "text-[#d7ba7d]",
    skills: [
      "MySQL",
      "Git",
      "GitHub",
      "VS Code",
      "Google Colab",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-[#30363d] bg-[#0d1117]"
    >
      {/* Editor header */}
      <div className="border-b border-[#30363d] bg-[#161b22]">
        <div className="flex h-9 items-center gap-2 px-4 font-mono text-xs text-[#8b949e] md:ml-[272px]">
          <FiCode size={14} className="text-[#dcdcaa]" />
          <span>skills.py</span>
          <span className="text-[#484f58]">•</span>
          <span className="text-[#6e7681]">technical-stack</span>
        </div>
      </div>

      <div className="md:ml-[272px]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">

          {/* Intro */}
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 flex items-center gap-2 font-mono text-base text-[#6e7681]">
              <span className="text-[#484f58]">01</span>
              <span>skills/</span>
              <span className="text-[#8b949e]">technical-stack.py</span>
            </div>

            {/* <h2 className="text-3xl font-semibold tracking-tight text-[#e6edf3] sm:text-4xl">
              Skills
            </h2> */}

            <p className="mt-4 leading-7 text-[#8b949e]">
              Tools and technologies I use to clean, analyze, visualize and
              communicate data.
            </p>
          </div>

          {/* Skill groups */}
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="border border-[#30363d] bg-[#161b22] transition duration-300 hover:border-[#58a6ff]"
                >
                  {/* Card header */}
                  <div className="flex items-center justify-between border-b border-[#30363d] bg-[#0d1117] px-4 py-3">
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <Icon size={14} className={group.color} />
                      <span className="text-[#c9d1d9]">
                        {group.title}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-[#484f58]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="border border-[#30363d] bg-[#0d1117] px-3 py-2 font-mono text-[11px] text-[#c9d1d9] transition hover:border-[#58a6ff] hover:text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Core stack */}
          <div className="mt-8 border border-[#30363d] bg-[#161b22]">
            <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#0d1117] px-4 py-3 font-mono text-xs text-[#8b949e]">
              <FiFileText size={13} className="text-[#4ec9b0]" />
              core_analyst_stack.json
            </div>

            <div className="grid gap-px bg-[#30363d] sm:grid-cols-4">
              {[
                {
                  name: "SQL",
                  detail: "Queries & Analysis",
                },
                {
                  name: "Python",
                  detail: "Data Analysis",
                },
                {
                  name: "Power BI",
                  detail: "BI & Reporting",
                },
                {
                  name: "Excel",
                  detail: "Analysis & MIS",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-[#161b22] p-5"
                >
                  <p className="font-mono text-sm font-medium text-[#e6edf3]">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs text-[#6e7681]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-8 border border-dashed border-[#30363d] bg-[#161b22] px-5 py-4 font-mono text-xs text-[#6e7681]">
            <span className="text-[#dcdcaa]">skills</span>
            <span className="text-[#e6edf3]"> = </span>
            <span className="text-[#a5d6ff]">
              "learn → apply → build → improve"
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;