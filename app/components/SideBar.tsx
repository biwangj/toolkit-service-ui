import { DocumentTextIcon, LockClosedIcon, Bars3Icon, HomeIcon, ShieldCheckIcon, HashtagIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, hover, motion } from "framer-motion";
import { useState } from "react";

interface SidebarProps {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  darkMode: boolean;
}

export default function Sidebar({
  selectedPage,
  setSelectedPage,
  darkMode
}: SidebarProps) {

  const [collapsed, setCollapsed] = useState(false);
  const buttonStyle = (active: boolean) =>
    `w-full flex items-center gap-10 px-3 py-3
      rounded-xl transition-all overflow-hidden
      ${active 
            ? darkMode
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-900"
              : darkMode
                ? "hover:bg-blue-800 text-white"
                : "hover:bg-gray-400 text-gray-900"}
  `;

  return (
    <aside className={`relative h-full p-4 overflow-hidden border-r transition-all duration-300 ease-in-out shirnk-0 ${collapsed ? "w-20" : "w-64"}
                     ${darkMode ? "bg-blue-950 border-blue-800 text-white" : "bg-gray-200 border-gray-400 text-gray-900"}`}>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`mb-8 p-2 rounded-lg ${darkMode ? "hover:bg-blue-800 text-white" : "hover:bg-gray-200"} transition absolute bottom-0 left-5 cursor-pointer`}
      >
        <Bars3Icon className="h-6 w-6 cursor-pointer shrink-0"></Bars3Icon>
      </button>

      <button
        onClick={() => setSelectedPage("")}
        className={`w-full flex items-center gap-10 hover:cursor-pointer
         px-3 py-3 rounded-xl transition-all mb-8 ${darkMode ? "hover:bg-blue-800 text-white" : "hover:bg-gray-200"}`}>
        <HomeIcon className="h-6 w-6 shrink-0"/>
        
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10}}
              animate={{ opacity: 1, x: 0}}
              exit={{ opacity: 1, x: -10}}
              transition={{ duration: 0.15}}
              className="text-2xl font-bold h-7"
              >
                HOME
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <button
        onClick={() => setSelectedPage(selectedPage === "documents" ? "" : "documents")}
        className={`${buttonStyle(selectedPage === "documents")} mb-3 cursor-pointer`}>

        <DocumentTextIcon className="h-6 w-6 shrink-0" />

        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -5}}
              animate={{ opacity: 1, x: 0}}
              exit={{ opacity: 1, x: -5}}
              transition={{ duration: 0.15}}
            >
              Documents
          </motion.span>)}
        </AnimatePresence>
      </button>

      <button
        onClick={() => setSelectedPage(selectedPage === "hash" ? "" : "hash")}
        className={`${buttonStyle(selectedPage === "hash")} mb-3 cursor-pointer`}>

        <LockClosedIcon className="h-6 w-6 shrink-0" />
        
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -5}}
              animate={{ opacity: 1, x: 0}}
              exit={{ opacity: 1, x: -5}}
              transition={{ duration: 0.15}}
            >
              HASH
          </motion.span>)}
        </AnimatePresence>
      </button>

      <button
        onClick={() => setSelectedPage(selectedPage === "id" ? "" : "id")}
        className={`${buttonStyle(selectedPage === "id")} mb-3 cursor-pointer`}>

        <ShieldCheckIcon className="h-6 w-6 shrink-0" />
        
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -5}}
              animate={{ opacity: 1, x: 0}}
              exit={{ opacity: 1, x: -5}}
              transition={{ duration: 0.15}}
            >
              UUID
          </motion.span>)}
        </AnimatePresence>
      </button>

      <button
        onClick={() => setSelectedPage(selectedPage === "encode" ? "" : "encode")}
        className={`${buttonStyle(selectedPage === "encode")} mb-3 cursor-pointer`}>

        <HashtagIcon className="h-6 w-6 shrink-0" />
        
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -5}}
              animate={{ opacity: 1, x: 0}}
              exit={{ opacity: 1, x: -5}}
              transition={{ duration: 0.15}}
            >
              Encode/Decode
          </motion.span>)}
        </AnimatePresence>
      </button>
    </aside>
  );
}
