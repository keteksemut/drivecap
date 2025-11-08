import Tempus from "tempus";
import { useEffect } from "react";

export function useFrame(callback, priority = 0) {
  useEffect(() => {
    if (!callback) return
    return Tempus.add(callback, { priority })
  }, [callback, priority])
}
