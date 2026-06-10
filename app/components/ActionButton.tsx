import { motion } from "framer-motion";

type Props = {
  onDownload?: () => void;
  onClear?: () => void;
  onGenerateHash?: () => void;
  onBack?: () => void;
  onGenerateId?: () => void;
  onEncodeDecode?: () => void;
  loading?: boolean;
  disabled?:boolean;
  showDownload?: boolean;
  showGenerate?: boolean;
  showClear?: any;
  showGenerateId?: boolean;
  showEncodeDecode?: boolean;
  darkMode?: boolean;
}

export default function ActionButtons({
  onDownload,
  onClear,
  onGenerateHash,
  onGenerateId,
  onEncodeDecode,
  loading = false,
  disabled = false,
  showDownload = false,
  showGenerate = false,
  showClear = false,
  showGenerateId = false,
  showEncodeDecode = false,
  darkMode
}: Props) {
  
  return (
    <div className="flex flex-col items-center gap-3">

      {/* Download */}
      {showDownload && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onDownload}
          disabled={loading}
          className={`py-2 w-100 content-center rounded-2xl text-white cursor-pointer
                    ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-amber-500 hover:bg-amber-600"}`}
        >
          {loading ? "Downloading..." : "Download"}
        </motion.button>
      )}

      {/* Hash */}
      {showGenerate && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onGenerateHash}
          disabled={disabled}
          className={`w-100 py-3 rounded-2xl mb-2 hover:cursor-pointer transition-colors
              ${darkMode
                    ? disabled
                      ? "bg-gray-600 cursor-not-allowed opacity-60"
                      : "bg-blue-600 hover:bg-blue-700"
                    : disabled
                      ? "bg-gray-400 cursor-not-allowed opacity-60"
                      : "bg-amber-500 hover:bg-amber-600"
                }
              `}>
          {loading ? "Generating..." : "Generate"}
        </motion.button>
      )}

      {/* UUID */}
      {showGenerateId && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onGenerateId}
          className={`w-100 py-3 rounded-2xl mb-2 mt-6 ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-amber-500 hover:bg-amber-600"} hover:cursor-pointer`}>
          {loading ? "Generating..." : "Generate"}
        </motion.button>
      )}

      {/* Encode/Decode */}
      {showEncodeDecode && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onEncodeDecode}
          disabled={disabled}
          className={`w-100 py-3 rounded-2xl mb-2 hover:cursor-pointer transition-colors
              ${darkMode
                    ? disabled
                      ? "bg-gray-600 cursor-not-allowed opacity-60"
                      : "bg-blue-600 hover:bg-blue-700"
                    : disabled
                      ? "bg-gray-400 cursor-not-allowed opacity-60"
                      : "bg-amber-500 hover:bg-amber-600"
                }
              `}>
          {loading ? "Processing..." : "Process"}
        </motion.button>
      )}

      {/* Clear */}
      {showClear && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClear}
          className={`py-2 rounded-2xl w-100 border ${darkMode ? "border-gray-400 hover:bg-gray-700"
                      : "border-gray-400 bg-gray-200 hover:bg-gray-400"} cursor-pointer`}>
          Clear
        </motion.button>
      )}
    </div>
  );
}