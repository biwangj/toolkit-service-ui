import { useIdGenerator } from "../hooks/useIdGenerator";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ActionButtons from "~/components/ActionButton";

interface IdProps {
  darkMode: boolean;
}

export default function UuidGenerator({darkMode}: IdProps) {
  const { generateUuid, uuid, setUuid, loading } = useIdGenerator();
  const [copied, setCopied] = useState(false);
  const [bounce, setBounce] = useState(false);

  const copyId = async () => {
    await navigator.clipboard.writeText(uuid);

    setBounce(true);
    setTimeout(() => setBounce(false), 300);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setUuid("");
  }

  const showClear = uuid.trim();

  return (
    <div className={`${darkMode ? "bg-blue-950 border-blue-900" : "bg-white border-gray-400 text-black"} border-1 p-8 rounded-3xl shadow-2xl w-[700px]`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold">UUID Generator</h1>
        </div>
      </div>

      {/* Result */}
      {uuid && (
        <div className={`${darkMode ? "bg-black/30 border border-blue-800" : "bg-white border"} mb-4 rounded-2xl p-5`}>
          <div className="flex justify-between mb-3">
            <h2 className="text-sm">Generated Hash</h2>
            <button
              onClick={copyId}
              className={`flex items-center gap-2 hover:cursor-pointer 
                          ${darkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-900 hover:text-blue-700"}
                          ${bounce ? "animate-bounce" : ""}`}>
              <ClipboardDocumentIcon className="h-5 w-5" />
              Copy
            </button>
          </div>
          <div className={`break-all font-mono ${darkMode ? "text-green-400" : "text-green-600"} text-base`}>
            {uuid}
          </div>
        </div>
      )}

      {/* Button */}
      <ActionButtons 
        onGenerateId={generateUuid}
        onClear={handleClear}
        showGenerateId={true}
        showClear={showClear}
        darkMode={darkMode}
      />

    </div>
  );
}
