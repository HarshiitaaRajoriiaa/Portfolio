import { useEffect, useRef, useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiFileText,
  FiBarChart2,
  FiBriefcase,
  FiMail,
  FiMenu,
  FiX,
  FiSearch,
  FiSettings,
  FiFolder,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const files = [
  {
    name: "profile.py",
    href: "#home",
    icon: FiCodeIcon,
    type: "python",
  },
  {
    name: "about.md",
    href: "#about",
    icon: FiFileText,
    type: "markdown",
  },
  {
    name: "skills.py",
    href: "#skills",
    icon: FiBarChart2,
    type: "python",
  },
  {
    name: "experience.json",
    href: "#experience",
    icon: FiBriefcase,
    type: "json",
  },
  {
    name: "projects",
    icon: FiFolder,
    type: "folder",
    children: [
      {
        name: "ecommerce.pbix",
        href: "#projects",
        icon: FiBarChart2,
        type: "powerbi",
      },
      {
        name: "saas_analytics.py",
        href: "#projects",
        icon: FiBarChart2,
        type: "python",
      },
    ],
  },
  {
    name: "education.json",
    href: "#education",
    icon: FiFileText,
    type: "json",
  },
  {
    name: "contact.py",
    href: "#contact",
    icon: FiMail,
    type: "python",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const profileRef = useRef(null);
  const settingsRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }

      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target)
      ) {
        setSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };

  const toggleProfile = () => {
    setProfileOpen((value) => !value);
    setSettingsOpen(false);
  };

  const toggleSettings = () => {
    setSettingsOpen((value) => !value);
    setProfileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          TITLE BAR
      ===================================================== */}
      <header className="fixed left-0 right-0 top-0 z-[60] h-10 border-b border-[#30363d] bg-[#161b22]">
        <div className="flex h-full items-center">
          <a
            href="#home"
            className="flex h-full items-center gap-2 px-3 text-xs text-[#c9d1d9] transition hover:bg-[#21262d]"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#007acc] text-[9px] font-bold text-white">
              HR
            </span>

            <span className="hidden sm:block">
              Harshita Rajoria
            </span>
          </a>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[11px] text-[#8b949e] md:flex">
            <span>Harshita Rajoria</span>
            <span>—</span>
            <span>Portfolio</span>
          </div>

          <div className="ml-auto flex h-full items-center">
            <div className="mr-4 hidden items-center gap-2 text-[10px] text-[#6e7681] sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3fb950]" />
              Available
            </div>

            <button
              className="flex h-full w-11 items-center justify-center text-[#8b949e] transition hover:bg-[#21262d] hover:text-white"
              aria-label="Minimize"
            >
              −
            </button>

            <button
              className="flex h-full w-11 items-center justify-center text-[#8b949e] transition hover:bg-[#21262d] hover:text-white"
              aria-label="Maximize"
            >
              □
            </button>

            <button
              className="flex h-full w-11 items-center justify-center text-[#8b949e] transition hover:bg-[#da3633] hover:text-white"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          ACTIVITY BAR
      ===================================================== */}
      <aside className="fixed bottom-0 left-0 top-10 z-50 hidden w-12 border-r border-[#30363d] bg-[#0d1117] md:flex md:flex-col">
        <div className="flex flex-col items-center pt-2">
          <ActivityButton
            icon={FiFileText}
            label="Explorer"
            active
          />

          <ActivityButton
            icon={FiSearch}
            label="Search"
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          />

          <ActivityButton
            icon={FiBarChart2}
            label="Projects"
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          />

          <ActivityButton
            icon={FiBriefcase}
            label="Experience"
            onClick={() =>
              document
                .querySelector("#experience")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          />
        </div>

        <div className="relative mt-auto flex flex-col items-center pb-2">
          {/* SETTINGS */}
          <div ref={settingsRef}>
            <ActivityButton
              icon={FiSettings}
              label="Settings"
              active={settingsOpen}
              onClick={toggleSettings}
            />

            {settingsOpen && <SettingsPopup />}
          </div>

          {/* PROFILE */}
          <div ref={profileRef}>
            <button
              onClick={toggleProfile}
              className={`relative flex h-11 w-12 items-center justify-center border-l-2 transition ${
                profileOpen
                  ? "border-[#58a6ff] bg-[#161b22] text-[#e6edf3]"
                  : "border-transparent text-[#6e7681] hover:bg-[#161b22] hover:text-[#c9d1d9]"
              }`}
              aria-label="Profile"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#484f58] bg-[#21262d] text-[10px] font-semibold text-[#79c0ff]">
                HR
              </div>
            </button>

            {profileOpen && <ProfilePopup />}
          </div>
        </div>
      </aside>

      {/* =====================================================
          EXPLORER
      ===================================================== */}
      <aside className="fixed bottom-0 left-12 top-10 z-40 hidden w-56 border-r border-[#30363d] bg-[#0d1117] md:block">
        <div className="flex h-10 items-center justify-between border-b border-[#21262d] px-3">
          <span className="text-[10px] font-medium uppercase tracking-wider text-[#8b949e]">
            Explorer
          </span>

          <button className="text-[#6e7681] transition hover:text-[#c9d1d9]">
            •••
          </button>
        </div>

        <div className="px-2 py-3">
          <div className="mb-1 flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8b949e]">
            <FiChevronDown size={13} />

            <span className="text-[#79c0ff]">
              <FiFolder size={13} />
            </span>

            HARSHITA_RAJORIA
          </div>

          <div className="ml-2 border-l border-[#21262d] pl-1">
            {files.map((file) => {
              if (file.type === "folder") {
                return (
                  <div key={file.name}>
                    <button
                      onClick={() =>
                        setProjectsOpen(!projectsOpen)
                      }
                      className="flex w-full items-center gap-1 rounded px-2 py-1.5 text-xs text-[#c9d1d9] transition hover:bg-[#161b22]"
                    >
                      {projectsOpen ? (
                        <FiChevronDown size={13} />
                      ) : (
                        <FiChevronRight size={13} />
                      )}

                      <FiFolder
                        size={14}
                        className="text-[#79c0ff]"
                      />

                      <span>{file.name}</span>
                    </button>

                    {projectsOpen && (
                      <div className="ml-5 border-l border-[#21262d] pl-1">
                        {file.children.map((child) => (
                          <ExplorerFile
                            key={child.name}
                            file={child}
                            onClick={handleClick}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <ExplorerFile
                  key={file.name}
                  file={file}
                  onClick={handleClick}
                />
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-[#21262d] px-3 py-2">
          <p className="font-mono text-[9px] uppercase tracking-wider text-[#484f58]">
            Analytics Workspace
          </p>
        </div>
      </aside>

      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}
      <header className="fixed left-0 right-0 top-0 z-[60] flex h-12 items-center border-b border-[#30363d] bg-[#161b22] px-3 md:hidden">
        <a
          href="#home"
          onClick={handleClick}
          className="flex items-center gap-2 text-xs font-medium text-[#e6edf3]"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-[#007acc] text-[9px] font-bold text-white">
            HR
          </span>

          Harshita Rajoria
        </a>

        <div className="ml-auto flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3fb950]" />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded p-1.5 text-[#8b949e] transition hover:bg-[#21262d] hover:text-white"
            aria-label="Toggle navigation"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE EXPLORER
      ===================================================== */}
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-12 z-50 overflow-y-auto border-b border-[#30363d] bg-[#0d1117] p-3 md:hidden">
          <div className="mb-3 flex items-center gap-2 border-b border-[#21262d] pb-3">
            <FiFileText
              size={14}
              className="text-[#4ec9b0]"
            />

            <span className="font-mono text-xs text-[#c9d1d9]">
              Explorer
            </span>
          </div>

          {files.map((file) => {
            if (file.type === "folder") {
              return (
                <div key={file.name}>
                  <div className="flex items-center gap-2 px-3 py-2 text-sm text-[#c9d1d9]">
                    <FiFolder
                      size={15}
                      className="text-[#79c0ff]"
                    />

                    {file.name}
                  </div>

                  <div className="ml-5">
                    {file.children.map((child) => (
                      <ExplorerFile
                        key={child.name}
                        file={child}
                        onClick={handleClick}
                        mobile
                      />
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <ExplorerFile
                key={file.name}
                file={file}
                onClick={handleClick}
                mobile
              />
            );
          })}

          <div className="mt-5 border-t border-[#21262d] pt-4">
            <a
              href="https://www.linkedin.com/in/harshita-rajoria-68110b24/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded px-3 py-3 text-sm text-[#8b949e] hover:bg-[#161b22] hover:text-[#e6edf3]"
            >
              <FiLinkedin size={16} />
              LinkedIn
            </a>

            <a
              href="https://github.com/HarshiitaaRajoriiaa"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded px-3 py-3 text-sm text-[#8b949e] hover:bg-[#161b22] hover:text-[#e6edf3]"
            >
              <FiGithub size={16} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================================
   EXPLORER FILE
========================================================= */

function ExplorerFile({ file, onClick, mobile = false }) {
  const Icon = file.icon;

  return (
    <a
      href={file.href}
      onClick={onClick}
      className={`group flex items-center gap-2 rounded px-2 py-1.5 text-xs text-[#8b949e] transition hover:bg-[#161b22] hover:text-[#e6edf3] ${
        mobile ? "py-2.5 text-sm" : ""
      }`}
    >
      <Icon
        size={mobile ? 15 : 13}
        className={
          file.type === "python"
            ? "text-[#dcdcaa]"
            : file.type === "json"
            ? "text-[#d7ba7d]"
            : file.type === "powerbi"
            ? "text-[#f2cc60]"
            : "text-[#79c0ff]"
        }
      />

      <span>{file.name}</span>
    </a>
  );
}

/* =========================================================
   ACTIVITY BAR BUTTON
========================================================= */

function ActivityButton({
  icon: Icon,
  label,
  active = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`relative flex h-11 w-12 items-center justify-center border-l-2 transition ${
        active
          ? "border-[#58a6ff] text-[#e6edf3]"
          : "border-transparent text-[#6e7681] hover:bg-[#161b22] hover:text-[#c9d1d9]"
      }`}
    >
      <Icon size={20} strokeWidth={1.5} />
    </button>
  );
}

/* =========================================================
   PROFILE POPUP
========================================================= */

function ProfilePopup() {
  return (
    <div className="absolute bottom-12 left-12 w-64 rounded-md border border-[#30363d] bg-[#161b22] p-4 shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#484f58] bg-[#21262d] text-xs font-semibold text-[#79c0ff]">
          HR
        </div>

        <div>
          <p className="text-sm font-medium text-[#e6edf3]">
            Harshita Rajoria
          </p>

          <p className="text-[10px] text-[#8b949e]">
            Data Analyst
          </p>
        </div>
      </div>

      <div className="my-4 border-t border-[#30363d]" />

      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-[#6e7681]">Status</span>

          <span className="flex items-center gap-1.5 text-[#3fb950]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3fb950]" />
            Available
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#6e7681]">Focus</span>
          <span className="text-[#c9d1d9]">Analytics</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SETTINGS POPUP
========================================================= */

function SettingsPopup() {
  return (
    <div className="absolute bottom-12 left-12 w-72 rounded-md border border-[#30363d] bg-[#161b22] shadow-2xl">
      <div className="border-b border-[#30363d] px-4 py-3">
        <p className="text-xs font-medium text-[#e6edf3]">
          Settings
        </p>

        <p className="mt-1 text-[10px] text-[#6e7681]">
          Portfolio preferences
        </p>
      </div>

      <div className="p-4">
        {/* Appearance */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#6e7681]">
            Appearance
          </p>

          <div className="mt-2 rounded border border-[#30363d] bg-[#0d1117] px-3 py-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#c9d1d9]">
                Theme
              </span>

              <span className="text-[10px] text-[#79c0ff]">
                Dark
              </span>
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="mt-5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#6e7681]">
            Editor
          </p>

          <div className="mt-2 space-y-1">
            <SettingRow
              label="Line numbers"
              enabled
            />

            <SettingRow
              label="Explorer"
              enabled
            />

            <SettingRow
              label="Status bar"
              enabled
            />

            <SettingRow
              label="Animations"
              enabled
            />
          </div>
        </div>

        {/* About */}
        <div className="mt-5 border-t border-[#30363d] pt-4">
          <p className="text-[10px] leading-5 text-[#6e7681]">
            Harshita Rajoria&apos;s analytics portfolio
          </p>

          <p className="mt-1 font-mono text-[9px] text-[#484f58]">
            v1.0.0 · workspace
          </p>
        </div>
      </div>
    </div>
  );
}

function SettingRow({ label, enabled }) {
  return (
    <div className="flex items-center justify-between rounded px-3 py-2 hover:bg-[#21262d]">
      <span className="text-xs text-[#8b949e]">
        {label}
      </span>

      <span
        className={`flex h-3.5 w-6 items-center rounded-full p-0.5 ${
          enabled ? "bg-[#238636]" : "bg-[#30363d]"
        }`}
      >
        <span
          className={`h-2.5 w-2.5 rounded-full bg-white transition ${
            enabled ? "translate-x-2.5" : ""
          }`}
        />
      </span>
    </div>
  );
}

/* =========================================================
   PYTHON FILE ICON
========================================================= */

function FiCodeIcon({ size = 13, className = "" }) {
  return (
    <span
      className={`font-mono text-[10px] font-bold ${className}`}
      style={{ fontSize: size }}
    >
      &lt;/&gt;
    </span>
  );
}

export default Navbar;