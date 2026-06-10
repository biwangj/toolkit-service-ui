import { useState } from "react";

export function useDownloader() {
  const [loading, setLoading] = useState(false);

  const download = async (payload: any, fileName: string, type: string) => {

    try {
      
      setLoading(true);

      const response = await fetch("http://localhost:8001/toolkit/docs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${fileName}.${type.toLowerCase()}`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  };

  return { download, loading };
}