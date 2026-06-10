import { useState, useEffect } from "react";
import { useDownloader } from "../hooks/useDownloader";
import { buildFileName } from "../utils/fileNameBuilder";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import DocxForm from "./DocxForm";
import XlsxForm from "./XlsxForm";
import FileTypeSelector from "./FileTypeSelector";
import Snackbar from "../components/SnackBar";
import ActionButtons from "../components/ActionButton";

type TemplateType = "DOCX" | "XLSX" | "";

interface DocumentProps {
  darkMode: boolean;
}

export default function DocumentDownloader({darkMode}: DocumentProps) {
  const [type, setType] = useState<TemplateType>("");
  const [projName, setProjName] = useState("");
  const [author, setAuthor] = useState("");
  const [env, setEnv] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"error" | "success">("error");
  const { download, loading } = useDownloader();
  const [reviewer, setReviewer] = useState("");
  const [approver, setApprover] = useState("");

  const handleDownload = async () => {
    if (type === "DOCX" && (!projName || !author || !reviewer || !approver)) {
      setMessageType("error");
      return setMessage("All Fields are Required");
    }

    if (type === "XLSX" && (!env || !projName || !author)) {
      setMessageType("error");
      return setMessage("All Fields are Required");
    }

    try {
      const fileName = buildFileName(type, projName, env);

      await download({ type, author, projName, env }, fileName, type);

      setMessageType("success");
      setMessage("Template Generated Successfully");
    } catch (err) {
      setMessageType("error");
      setMessage("Download Failed");
    }
  };

  const handleClear = () => {
    setAuthor("");
    setProjName("");
    setEnv("");
    setMessage("");
    setReviewer("");
    setApprover("");
  };

  const handleBack = () => {
    setType("");
    setProjName("");
    setAuthor("");
    setEnv("");
    setMessage("");
    setReviewer("");
    setApprover("");
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const showClear = projName.trim() || author.trim() || reviewer.trim() || approver.trim() || env.trim();

  return (
    <div>
      <div className={`${darkMode ? "bg-blue-950" : "bg-white text-black"} p-8 rounded-3xl shadow-2xl transition-all duration-300 ease-in-out 
                       overflow-hidden ${type === "DOCX" ? "w-[800px]" : "w-[500px]"} ${type === "XLSX" ? "w-[600px]" : "w-[500px]"}`}>
        {type && (
          /* Back */
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBack}
            className="absolute p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white shadow-md hover:cursor-pointer"
          >
            <ArrowLeft size={18} />
          </motion.button>
        )}

        <Snackbar message={message} type={messageType} />

        <AnimatePresence mode="wait">
          <motion.div
            key={type || "default"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity : 0 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-2xl font-bold text-center mb-6">
              Template Downloader
            </h1>
          </motion.div>

          <FileTypeSelector type={type} setType={setType} darkMode={darkMode} />

          {type === "DOCX" && (
            <motion.div
              key="docx"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity:0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <DocxForm
                author={author}
                setAuthor={setAuthor}
                projName={projName}
                setProjName={setProjName}
                reviewer={reviewer}
                setReviewer={setReviewer}
                approver={approver}
                setApprover={setApprover}
                darkMode={darkMode}
              />
            </motion.div>
          )}

          {type === "XLSX" && (
            <motion.div
              key="xlsx"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity:0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <XlsxForm
                author={author}
                setAuthor={setAuthor}
                projName={projName}
                setProjName={setProjName}
                env={env}
                setEnv={setEnv}
                reviewer={reviewer}
                setReviewer={setReviewer}
                approver={approver}
                setApprover={setApprover}
                darkMode={darkMode}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {type && (
          <ActionButtons
            loading={loading}
            onDownload={handleDownload}
            onClear={handleClear}
            onBack={handleBack}
            showDownload={true}
            showClear={showClear}
            darkMode={darkMode}
          />
        )}
      </div>
    </div>
  );
}
