import { useState } from "react";

export function useHashConverter() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [hash, setHash] = useState("");
  const [algorithm, setAlgorithm] = useState("");

  const generateHash = async () => {
    if (!text) return;
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8001/toolkit/hash", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          algorithm,
        }),
      });
      const data = await response.text();
      setHash(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { generateHash, text, setText, loading, hash, setHash, algorithm, setAlgorithm }
}
