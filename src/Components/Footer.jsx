import {
  FiArrowUp,
  FiCode,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-[#0d1117] md:ml-[272px]">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-10">
        <div className="flex flex-col gap-5 border-t border-[#30363d] pt-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Left */}
          <div className="font-mono text-xs">
            <div className="flex items-center gap-2 text-[#c9d1d9]">
              <FiCode size={13} className="text-[#58a6ff]" />
              <span>Harshita Rajoria</span>
            </div>

            <p className="mt-2 text-[10px] text-[#6e7681]">
              Data Analytics · Business Intelligence · Python · SQL · Power BI
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/HarshiitaaRajoriiaa"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center border border-[#30363d] bg-[#161b22] text-[#8b949e] transition hover:border-[#58a6ff] hover:text-white"
            >
              <FiGithub size={14} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center border border-[#30363d] bg-[#161b22] text-[#8b949e] transition hover:border-[#58a6ff] hover:text-white"
            >
              <FiLinkedin size={14} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 flex h-8 items-center gap-2 border border-[#30363d] bg-[#161b22] px-3 font-mono text-[10px] text-[#8b949e] transition hover:border-[#58a6ff] hover:text-white"
            >
              <FiArrowUp size={13} />
              Top
            </a>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 font-mono text-[10px] text-[#484f58] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Harshita Rajoria</span>
          <span>Built with React · Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;