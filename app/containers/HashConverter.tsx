import { motion } from "framer-motion";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useHashConverter } from "../hooks/useHashConverter";
import ActionButtons from "~/components/ActionButton";
import { useState } from "react";

type HashAlgorithm = "" | "MD5" | "SHA-1" | "SHA-256" | "SHA-512";

interface HashProps {
  darkMode: boolean;
}

export default function HashConverter({darkMode}: HashProps) {
  const { text, setText, loading, hash, setHash, generateHash, algorithm, setAlgorithm } = useHashConverter();
  const [copied, setCopied] = useState(false);
  const [bounce, setBounce] = useState(false);

  const copyHash = async () => {
    await navigator.clipboard.writeText(hash);

    setBounce(true);
    setTimeout(() => setBounce(false), 300);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setText("");
    setAlgorithm("");
    setHash("");
  };

  const isDisabled = !text.trim() || !algorithm.trim() || loading;
  const showClear = text.trim() || algorithm.trim();

  return (
    <div
      className={`${darkMode ? "bg-blue-950 border-blue-900" : "bg-white border-gray-400 text-black"} border-1 p-8 rounded-3xl shadow-2xl w-[700px]`}>
        
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Hash Generator</h1>
        </div>
      </div>

      {/* Algorithm */}
      <div className="mb-5 flex flex-col items-center">
        <label className="block mb-2 text-sm">Algorithm</label>
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value as HashAlgorithm)}
          className={`w-100 rounded-xl px-4 py-3 hover:cursor-pointer
                    ${darkMode ? "bg-blue-900 border border-blue-800" : "bg-white border border-blue-800"}`}>
          {!algorithm && (
          <option className="text-center text-white" value="" disabled>
            -- Select Type --
          </option>
        )}
          <option value="MD5">MD5</option>
          <option value="SHA-1">SHA-1</option>
          <option value="SHA-256">SHA-256</option>
          <option value="SHA-512">SHA-512</option>
        </select>
      </div>

      {/* Text Input */}
      <div className="mb-5">
        <label className="block mb-2 text-sm">Input Text</label>
        <textarea
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`w-full rounded-2xl px-4 py-3 ${darkMode ? "bg-gray-700 border" : "bg-white border"}`}/>
      </div>

      {/* Result */}
      {hash && (
        <div
          className={`${darkMode ? "bg-black/30 border border-blue-800" : "bg-white border"} mb-4 rounded-2xl p-5`}>
          <div className="flex justify-between mb-3">
            <h2 className="text-sm">Generated Hash</h2>
            <button
              onClick={copyHash}
              className={`flex items-center gap-2 hover:cursor-pointer 
                          ${darkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-900 hover:text-blue-700"}
                          ${bounce ? "animate-bounce" : ""}`}>
              <ClipboardDocumentIcon className="h-5 w-5" />
              Copy
            </button>
          </div>
          <div
            className={`break-all font-mono ${darkMode ? "text-green-400" : "text-green-600"} text-base`}>
            {hash}
          </div>
        </div>
      )}

      {/* Button */}
      <ActionButtons 
        onGenerateHash={generateHash}
        onClear={handleClear}
        loading={loading}
        disabled={isDisabled}
        showGenerate={true}
        showClear={showClear}
        darkMode={darkMode}
      />
      
    </div>
  );
}
