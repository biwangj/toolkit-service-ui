import { useState } from "react";

export function useEncode() {
  const [text, setText] = useState("");
  const [encoded, setEncoded] = useState("");
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState("");
  const [encoder, setEncoder] = useState("");

  const encode = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8001/toolkit/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          method,
          encoder,
        }),
      });
      console.log("STATUS:", response.status);

      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.text();
      setEncoded(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { text, setText, encode, encoded, setEncoded, loading, method, setMethod, encoder, setEncoder }
}
