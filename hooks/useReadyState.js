import { useState, useEffect } from "react";

/**
 * Custom React hook that tracks the document's readyState.
 * It returns the current `document.readyState` value and updates
 * whenever it changes.
 */
export function useDocumentReadyState() {
  const [readyState, setReadyState] = useState();

  useEffect(() => {
    function handleChange() {
      setReadyState(document.readyState);
    }

    document.addEventListener("readystatechange", handleChange, false);

    handleChange();

    return () => {
      document.removeEventListener("readystatechange", handleChange, false);
    };
  }, []);

  return readyState;
}
