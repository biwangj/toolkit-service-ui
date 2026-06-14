import { useState } from "react";
import { useEncode } from "~/hooks/useEncode";
import ActionButtons from "~/components/ActionButton";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

type Method = "" | "encode" | "decode";
type Encoder = "" | "base64" | "url";

interface EncodeDecodeProps {
  darkMode: boolean;
}

export default function EncodeDecode({darkMode}: EncodeDecodeProps) {
    const { text, setText, encoded, setEncoded, loading, encode, method, setMethod, encoder, setEncoder } = useEncode();
    const [bounce, setBounce] = useState(false);
    const [copied, setCopied] = useState(false);

    const copyCode = async () => {
    await navigator.clipboard.writeText(encoded);

    setBounce(true);
    setTimeout(() => setBounce(false), 300);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setText("");
    setEncoded("");
    setMethod("");
    setEncoder("");
  };

  const isDisabled = !text.trim() || !method.trim() || loading || !encoder.trim();
  const showClear = text.trim() || method.trim();

  return (
    <div className={`${darkMode ? "bg-blue-950 border-blue-900" : "bg-white border-gray-400 text-black"} border-1 p-8 rounded-3xl shadow-2xl w-[700px]`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Text Encoder / Decoder</h1>
        </div>
      </div>

      {/* Method/Encoder */}
      <div className="flex mb-5 gap-6">
        <div className="flex flex-col">
            <label className="block mb-2 text-sm">Method</label>
            <select
            value={method}
            onChange={(e) => setMethod(e.target.value as Method)}
            className={`w-50 rounded-xl px-4 py-3 hover:cursor-pointer gap-20
                        ${darkMode ? "bg-blue-900 border border-blue-800" : "bg-white border border-blue-800"}`}>
            {!method && (
            <option className="text-center text-white" value="" disabled>
                -- Select Method --
            </option>
            )}
            <option value="encode">Encode</option>
            <option value="decode">Decode</option>
            </select>
        </div>
        <div className="flex flex-col">
            <label className="block mb-2 text-sm">Encoder</label>
            <select
            value={encoder}
            onChange={(e) => setEncoder(e.target.value as Encoder)}
            className={`w-50 rounded-xl px-4 py-3 hover:cursor-pointer gap-20
                        ${darkMode ? "bg-blue-900 border border-blue-800" : "bg-white border border-blue-800"}`}>
            {!encoder && (
            <option className="text-center text-white" value="" disabled>
                -- Select Encoder --
            </option>
            )}
            <option value="base64">Base64</option>
            <option value="url">URL</option>
            </select>
        </div>
      </div>

      {/* Input */}
      <div className="mb-5">
        <label className="block mb-2 text-sm">Input Text</label>
        <textarea
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`w-full rounded-2xl px-4 py-3 ${darkMode ? "bg-gray-700 border" : "bg-white border"}`}/>
      </div>

      {/* Result */}
      {encoded && (
        <div
          className={`${darkMode ? "bg-black/30 border border-blue-800" : "bg-white border"} mb-4 rounded-2xl p-5`}>
          <div className="flex justify-between mb-3">
            <h2 className="text-sm">Converted Text</h2>
            <button
              onClick={copyCode}
              className={`flex items-center gap-2 hover:cursor-pointer 
                          ${darkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-900 hover:text-blue-700"}
                          ${bounce ? "animate-bounce" : ""}`}>
              <ClipboardDocumentIcon className="h-5 w-5" />
              Copy
            </button>
          </div>
          <div
            className={`break-all font-mono ${darkMode ? "text-green-400" : "text-green-600"} text-base`}>
            {encoded}
          </div>
        </div>
      )}

      {/* Button */}
      <ActionButtons 
        onEncodeDecode={encode}
        onClear={handleClear}
        loading={loading}
        disabled={isDisabled}
        showEncodeDecode={true}
        showClear={showClear}
        darkMode={darkMode}
      />
    </div>
  )
}