import {
  WrenchScrewdriverIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

interface HeaderProps {
  setSelectedPage: (page: string) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Header({
  setSelectedPage,
  darkMode,
  setDarkMode,
}: HeaderProps) {

  return (
    <header
      className={`relative w-full px-8 py-4 transition-colors duration-300
       ${darkMode ? "bg-blue-950 border-blue-800 text-white" : "bg-white border-gray-300 text-gray-900"}`}>

      <div className="flex items-center justify-between">
      
        <div className="flex items-center gap-3">
          <WrenchScrewdriverIcon className="h-8 w-8 shrink-0" />
          <h1
            onClick={() => setSelectedPage("")}
            className="inline-flex text-3xl font-bold cursor-pointer"
          >
            TOOLKIT
          </h1>
        </div>
       
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`relative h-6 w-12 cursor-pointer rounded-full p-1 transition-all duration-300
           ${darkMode ? "bg-slate-950" : "bg-gray-300"}`}
        >
          <div className={`relative h-4 w-4 rounded-full transition-all duration-300
              ${darkMode
                  ? "bg-gray-100 shadow-[0_0_50px_rgba(255,255,255,1)]"
                  : "bg-yellow-300 shadow-[0_0_50px_rgba(249,240,104,1)] translate-x-6"}`}>
          </div>
        </div>
      </div>
    </header>
  );
}
