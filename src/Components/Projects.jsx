import {
  FiBarChart2,
  FiDatabase,
  FiExternalLink,
  FiGithub,
  FiPlay,
  FiCode,
} from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Growth & Customer Analytics Dashboard",
    file: "ecommerce.pbix",
    date: "Aug 2026",
    type: "Power BI",
    image: "/Projects/E-Commerce.png",
    video: "/Projects/ECommerce.mp4",
    github: "https://github.com/HarshiitaaRajoriiaa/E-Commerce-Growth-Customer-Analytics-PowerBI-Project",
    description:
      "Interactive Power BI dashboard analyzing revenue, customer behavior, product performance, marketing channels, and conversion trends.",
    highlights: [
      "Built DAX measures for revenue, YoY growth, conversion and time-based analysis",
      "Created customer funnel analysis from product views to cart and purchases",
      "Used bookmarks, buttons and field parameters for interactive reporting",
    ],
    tools: ["Power BI", "DAX", "Power Query", "Data Modeling"],
  },
  {
    title: "SaaS Product Analytics Solution",
    file: "saas_analytics.py",
    date: "Sep 2026",
    type: "Python · SQL",
    image: "/Projects/SaaS.png",
    video: "/Projects/Saas.mp4",
    github: "https://github.com/HarshiitaaRajoriiaa/Saas-project",
    description:
      "End-to-end analytics solution covering customer, subscription, product usage, churn, revenue and support data across 500 customers.",
    highlights: [
      "Performed data cleaning, EDA, KPI analysis, segmentation and trend analysis",
      "Analyzed MRR, ARR, customer engagement, churn and feature adoption",
      "Built an interactive Streamlit dashboard with Plotly visualizations",
    ],
    tools: ["Python", "SQL", "Excel", "Streamlit", "Plotly"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-[#30363d] bg-[#0d1117]"
    >
      {/* Section header */}
      <div className="border-b border-[#30363d] bg-[#161b22]">
        <div className="flex h-9 items-center gap-2 px-4 font-mono text-xs text-[#8b949e] md:ml-[272px]">
          <FiBarChart2 size={14} className="text-[#f2cc60]" />
          <span>projects</span>
          <span className="text-[#484f58]">•</span>
          <span className="text-[#6e7681]">analytics-workspace</span>
        </div>
      </div>

      <div className="md:ml-[272px]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">

          {/* Intro */}
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 flex items-center gap-2 font-mono text-base text-[#6e7681]">
              <span className="text-[#484f58]">01</span>
              <span>projects/</span>
              <span className="text-[#8b949e]">analytics</span>
            </div>

            {/* <h2 className="text-3xl font-semibold tracking-tight text-[#e6edf3] sm:text-4xl">
              Projects
            </h2> */}

            <p className="mt-4 leading-7 text-[#8b949e]">
              A selection of analytics projects focused on business reporting,
              customer behavior, KPIs, dashboards and data-driven insights.
            </p>
          </div>

          {/* Project cards */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="overflow-hidden border border-[#30363d] bg-[#161b22] transition duration-300 hover:border-[#58a6ff]"
              >
                {/* File header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#30363d] bg-[#0d1117] px-4 py-3">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <FiCode
                      size={14}
                      className={
                        index === 0
                          ? "text-[#f2cc60]"
                          : "text-[#dcdcaa]"
                      }
                    />

                    <span className="text-[#c9d1d9]">
                      {project.file}
                    </span>

                    <span className="text-[#484f58]">|</span>

                    <span className="text-[#6e7681]">
                      {project.date}
                    </span>
                  </div>

                  <span className="border border-[#30363d] px-2 py-1 font-mono text-[10px] text-[#8b949e]">
                    {project.type}
                  </span>
                </div>

                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

                  {/* Visual */}
                  <div className="border-b border-[#30363d] bg-[#0d1117] lg:border-b-0 lg:border-r">
                    <div className="relative h-full min-h-[280px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-contain bg-[#0d1117] opacity-90 transition duration-500 hover:scale-[1.01]"
                      />

                      {/* Video preview button */}
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute bottom-4 right-4 flex items-center gap-2 border border-[#30363d] bg-[#0d1117]/90 px-3 py-2 font-mono text-xs text-[#c9d1d9] backdrop-blur transition hover:border-[#58a6ff] hover:text-white"
                        >
                          <FiPlay size={13} />
                          Preview
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl font-semibold leading-7 text-[#e6edf3]">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[#8b949e]">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6">
                      <p className="mb-3 font-mono text-xs text-[#6e7681]">
                        // key_implementation
                      </p>

                      <ul className="space-y-3">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-6 text-[#c9d1d9]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#58a6ff]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="flex items-center gap-1.5 border border-[#30363d] bg-[#0d1117] px-2.5 py-1.5 font-mono text-[10px] text-[#8b949e]"
                        >
                          {tool === "SQL" ? (
                            <FiDatabase size={11} />
                          ) : (
                            <FiCode size={11} />
                          )}
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 border border-[#30363d] px-4 py-2 text-xs font-medium text-[#c9d1d9] transition hover:border-[#58a6ff] hover:text-white"
                        >
                          <FiGithub size={14} />
                          GitHub
                        </a>
                      )}

                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 border border-[#30363d] px-4 py-2 text-xs font-medium text-[#c9d1d9] transition hover:border-[#58a6ff] hover:text-white"
                        >
                          <FiExternalLink size={14} />
                          View Preview
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project footer */}
                <div className="border-t border-[#30363d] bg-[#0d1117] px-4 py-2.5 font-mono text-[10px] text-[#6e7681]">
                  {`// ${project.title} — analytics project`}
                </div>
              </article>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-10 border border-dashed border-[#30363d] bg-[#161b22] p-5 font-mono text-xs text-[#6e7681]">
            <span className="text-[#3fb950]">✓</span>{" "}
            More projects and case studies can be added here as the portfolio
            grows.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;