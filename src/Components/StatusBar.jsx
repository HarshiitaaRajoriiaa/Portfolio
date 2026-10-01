import {
  FiGitBranch,
  FiCheckCircle,
  FiBell,
  FiWifi,
} from "react-icons/fi";

function StatusBar() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-[70] hidden h-6 border-t border-[#30363d] bg-[#161b22] font-mono text-[10px] text-[#8b949e] md:flex">
      {/* Left */}
      <div className="flex h-full items-center">
        <div className="flex h-full items-center gap-1.5 bg-[#238636] px-3 text-white">
          <FiGitBranch size={11} />
          main
        </div>

        <div className="flex items-center gap-1.5 px-3">
          <FiCheckCircle size={11} className="text-[#3fb950]" />
          Available
        </div>

        <div className="hidden items-center gap-1.5 border-l border-[#30363d] px-3 lg:flex">
          <FiWifi size={11} />
          Open to opportunities
        </div>
      </div>

      {/* Right */}
      <div className="ml-auto flex h-full items-center">
        <span className="border-l border-[#30363d] px-3">
          Python
        </span>

        <span className="border-l border-[#30363d] px-3">
          SQL
        </span>

        <span className="border-l border-[#30363d] px-3">
          Power BI
        </span>

        <span className="hidden border-l border-[#30363d] px-3 sm:block">
          Excel
        </span>

        <span className="border-l border-[#30363d] px-3">
          UTF-8
        </span>

        <span className="border-l border-[#30363d] px-3">
          LF
        </span>

        <span className="flex items-center gap-1.5 border-l border-[#30363d] px-3">
          <FiBell size={11} />
        </span>
      </div>
    </footer>
  );
}

export default StatusBar;