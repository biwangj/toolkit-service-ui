import { motion } from "framer-motion";

export default function FileTypeSelector({ type, setType, darkMode }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="mb-4 flex flex-col items-center"
    >
      <motion.label
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-sm font-medium mb-2"
      >
        Select Template
      </motion.label>

      <motion.select
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileFocus={{ scale: 1.01 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        value={type}
        onChange={(e) => setType(e.target.value)}
        className={`w-90 rounded-lg px-4 py-3 hover:cursor-pointer transition-all duration-200
                    ${darkMode ? "bg-blue-900 border border-blue-800" : "bg-white border border-blue-800"}`}
      >
        {!type && (
          <option className="text-center text-white" value="" disabled>
            -- Select Type --
          </option>
        )}
        <option value="DOCX">UTSOF</option>
        <option value="XLSX">DEVOPS FORM</option>
      </motion.select>
    </motion.div>
  );
}
