import { useEffect, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiRotateCcw,
  FiSearch,
  FiMoreHorizontal,
  FiX,
  FiCode,
  FiBarChart2,
} from "react-icons/fi";

const tabs = [
  {
    id: "home",
    name: "profile.py",
    icon: FiCode,
    color: "text-[#dcdcaa]",
  },
  {
    id: "about",
    name: "about.md",
    icon: FiCode,
    color: "text-[#4ec9b0]",
  },
  {
    id: "skills",
    name: "skills.py",
    icon: FiCode,
    color: "text-[#dcdcaa]",
  },
  {
    id: "experience",
    name: "experience.json",
    icon: FiCode,
    color: "text-[#d7ba7d]",
  },
  {
    id: "projects",
    name: "projects",
    icon: FiBarChart2,
    color: "text-[#f2cc60]",
  },
  {
    id: "education",
    name: "education.json",
    icon: FiCode,
    color: "text-[#d7ba7d]",
  },
  {
    id: "contact",
    name: "contact.py",
    icon: FiCode,
    color: "text-[#dcdcaa]",
  },
];

function EditorBar() {
  const [activeSection, setActiveSection] = useState("home");

 useEffect(() => {
  const handleScroll = () => {
    const offset = 180;

    let currentSection = "home";
    let closestDistance = Infinity;

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const distance = Math.abs(rect.top - offset);

      if (rect.top <= offset + 250 && distance < closestDistance) {
        closestDistance = distance;
        currentSection = tab.id;
      }
    });

    setActiveSection(currentSection);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div className="fixed left-0 right-0 top-10 z-30 hidden md:block md:pl-[272px]">
      {/* =====================================================
          TOOLBAR
      ===================================================== */}
      <div className="flex h-9 items-center border-b border-[#21262d] bg-[#0d1117] px-2">
        <div className="flex items-center gap-1">
          <ToolbarButton icon={FiChevronLeft} />
          <ToolbarButton icon={FiChevronRight} />
          <ToolbarButton icon={FiRotateCcw} />
        </div>

        <div className="mx-auto flex h-6 w-[280px] items-center justify-center gap-2 rounded border border-[#30363d] bg-[#161b22] text-[10px] text-[#6e7681] lg:w-[360px]">
          <FiSearch size={12} />
          <span>Search portfolio</span>
        </div>

        <div className="flex items-center gap-1">
          <ToolbarButton icon={FiSearch} />
          <ToolbarButton icon={FiMoreHorizontal} />
        </div>
      </div>

      {/* =====================================================
          TABS
      ===================================================== */}
      <div className="flex h-9 overflow-x-auto border-b border-[#30363d] bg-[#161b22] scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;

          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`group flex h-full shrink-0 items-center gap-2 border-r border-[#30363d] px-4 text-[11px] transition ${
                isActive
                  ? "border-t border-t-[#58a6ff] bg-[#0d1117] text-[#e6edf3]"
                  : "text-[#8b949e] hover:bg-[#1c2128] hover:text-[#c9d1d9]"
              }`}
            >
              <Icon size={13} className={tab.color} />

              <span>{tab.name}</span>

              <FiX
                size={11}
                className={`ml-1 text-[#484f58] transition ${
                  isActive
                    ? "opacity-60"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

function ToolbarButton({ icon: Icon }) {
  return (
    <button
      type="button"
      className="flex h-7 w-7 items-center justify-center rounded text-[#6e7681] transition hover:bg-[#161b22] hover:text-[#c9d1d9]"
    >
      <Icon size={14} />
    </button>
  );
}

export default EditorBar;