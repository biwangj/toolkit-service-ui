import { useState } from "react";

export function useIdGenerator() {
  const [uuid, setUuid] = useState("");
  const [loading, setLoading] = useState(false);

  const generateUuid = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8001/toolkit/id", {
        method: "POST",
      });
      const data = await response.text();
      setUuid(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { generateUuid, uuid, setUuid, loading }
}
