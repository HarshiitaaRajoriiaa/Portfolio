import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiTerminal,
  FiExternalLink,
  FiCheckCircle,
} from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-[#30363d] bg-[#0d1117]"
    >
      {/* Editor header */}
      <div className="border-b border-[#30363d] bg-[#161b22]">
        <div className="flex h-9 items-center gap-2 px-4 font-mono text-xs text-[#8b949e] md:ml-[272px]">
          <FiTerminal size={14} className="text-[#dcdcaa]" />
          <span>contact.py</span>
          <span className="text-[#484f58]">•</span>
          <span className="text-[#6e7681]">connect</span>
        </div>
      </div>

      <div className="md:ml-[272px]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">

          {/* Intro */}
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 flex items-center gap-2 font-mono text-base text-[#6e7681]">
              <span className="text-[#484f58]">01</span>
              <span>contact/</span>
              <span className="text-[#8b949e]">connect.py</span>
            </div>

            {/* <h2 className="text-3xl font-semibold tracking-tight text-[#e6edf3] sm:text-4xl">
              Let's Connect
            </h2> */}

            <p className="mt-4 leading-7 text-[#8b949e]">
              Interested in data analytics, business intelligence or
              data-driven projects? Feel free to reach out.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">

            {/* Contact card */}
            <div className="border border-[#30363d] bg-[#161b22]">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#30363d] bg-[#0d1117] px-4 py-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#8b949e]">
                  <FiTerminal size={13} className="text-[#dcdcaa]" />
                  contact.py
                </div>

                <div className="flex items-center gap-2 font-mono text-[10px] text-[#3fb950]">
                  <FiCheckCircle size={12} />
                  Available
                </div>
              </div>

              <div className="p-6 lg:p-8">

                <div className="mb-8">
                  <p className="font-mono text-xs text-[#6e7681]">
                    def contact():
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold text-[#e6edf3]">
                    Let's build something meaningful.
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#8b949e]">
                    Whether it's an analytics role, a business intelligence
                    project, or an opportunity to work with data, I'd be happy
                    to connect.
                  </p>
                </div>

                {/* Contact details */}
                <div className="space-y-3">

                  <a
                    href="mailto:harshitarajoria02@gmail.com"
                    className="group flex items-center gap-4 border border-[#30363d] bg-[#0d1117] p-4 transition hover:border-[#58a6ff]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center border border-[#30363d] bg-[#161b22]">
                      <FiMail
                        size={15}
                        className="text-[#58a6ff]"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="font-mono text-[10px] text-[#6e7681]">
                        email
                      </p>
                      <p className="mt-1 truncate text-sm text-[#c9d1d9] group-hover:text-white">
                        harshitarajoria02@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+919654424376"
                    className="group flex items-center gap-4 border border-[#30363d] bg-[#0d1117] p-4 transition hover:border-[#58a6ff]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center border border-[#30363d] bg-[#161b22]">
                      <FiPhone
                        size={15}
                        className="text-[#4ec9b0]"
                      />
                    </div>

                    <div>
                      <p className="font-mono text-[10px] text-[#6e7681]">
                        phone
                      </p>
                      <p className="mt-1 text-sm text-[#c9d1d9] group-hover:text-white">
                        +91 9654424376
                      </p>
                    </div>
                  </a>

                </div>

                {/* Socials */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-[#30363d] bg-[#0d1117] px-4 py-2.5 text-xs font-medium text-[#c9d1d9] transition hover:border-[#58a6ff] hover:text-white"
                  >
                    <FiLinkedin size={14} />
                    LinkedIn
                    <FiExternalLink size={11} />
                  </a>

                  <a
                    href="https://github.com/HarshiitaaRajoriiaa"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-[#30363d] bg-[#0d1117] px-4 py-2.5 text-xs font-medium text-[#c9d1d9] transition hover:border-[#58a6ff] hover:text-white"
                  >
                    <FiGithub size={14} />
                    GitHub
                    <FiExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>

            {/* Terminal */}
            <div className="flex flex-col border border-[#30363d] bg-[#161b22]">

              <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#0d1117] px-4 py-3 font-mono text-xs text-[#8b949e]">
                <FiTerminal size={13} className="text-[#3fb950]" />
                terminal
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 font-mono text-xs">

                <div className="space-y-4">
                  <p>
                    <span className="text-[#3fb950]">
                      harshita@portfolio
                    </span>
                    <span className="text-[#6e7681]">:</span>
                    <span className="text-[#58a6ff]">~</span>
                    <span className="text-[#e6edf3]">$</span>{" "}
                    <span className="text-[#c9d1d9]">
                      open opportunities
                    </span>
                  </p>

                  <div className="border-l-2 border-[#238636] pl-4">
                    <p className="text-[#3fb950]">
                      ✓ Ready to connect
                    </p>

                    <p className="mt-2 leading-6 text-[#8b949e]">
                      Data Analytics
                      <br />
                      Business Intelligence
                      <br />
                      SQL & Python
                      <br />
                      Power BI & Reporting
                    </p>
                  </div>

                  <p>
                    <span className="text-[#3fb950]">
                      harshita@portfolio
                    </span>
                    <span className="text-[#6e7681]">:</span>
                    <span className="text-[#58a6ff]">~</span>
                    <span className="text-[#e6edf3]">$</span>{" "}
                    <span className="animate-pulse text-[#c9d1d9]">
                      _
                    </span>
                  </p>
                </div>

                <div className="mt-10 border-t border-[#30363d] pt-5">
                  <p className="text-[#6e7681]">
                    # open to opportunities and collaborations
                  </p>

                  <a
                    href="mailto:harshitarajoria02@gmail.com"
                    className="mt-4 inline-flex items-center gap-2 border border-[#238636] bg-[#238636] px-4 py-2.5 font-sans text-xs font-medium text-white transition hover:bg-[#2ea043]"
                  >
                    <FiMail size={13} />
                    Start a Conversation
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="mt-8 flex flex-wrap items-center gap-3 border border-dashed border-[#30363d] bg-[#161b22] px-5 py-4 font-mono text-xs">
            <span className="flex items-center gap-2 text-[#3fb950]">
              <span className="h-2 w-2 rounded-full bg-[#3fb950]" />
              Available
            </span>

            <span className="text-[#484f58]">|</span>

            <span className="text-[#6e7681]">
              Open to Data Analyst, Business Analyst & analytics opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;