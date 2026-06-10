import { motion, AnimatePresence } from "framer-motion";

interface SnackbarProps {
  message: string;
  type?: "error" | "success";
}

export default function Snackbar({
  message,
  type = "error",
}: SnackbarProps) {
  const styles = {
    error: "bg-red-500",
    success: "bg-green-500",
  };

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.25 }}
          className={`
            fixed top-5 right-5 text-white px-5 py-3 rounded-xl shadow-lg z-50
            ${styles[type]}
          `}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}