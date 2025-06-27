import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const SuspenseFallback: React.FC = () => {
  const [showSlow, setShowSlow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSlow(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-4 h-screen py-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        aria-label="Cargando"
      >
        <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />
      </motion.div>
      <span className="text-muted-foreground text-sm">Cargando contenido...</span>
      {showSlow && (
        <span className="text-xs text-destructive" aria-live="assertive">
          Esto está tardando demasiado, un momento…
        </span>
      )}
    </div>
  );
};

export default SuspenseFallback;
