import { useRef, useState, useEffect, useCallback } from "react";

/**
 * useIntersectionObserver
 *
 * A custom React hook that uses the IntersectionObserver API.
 *
 * @param {Object} options
 * @param {Element|null} options.root - The root element for the observer (default: null)
 * @param {string} options.rootMargin - Margin around the root (default: "0px")
 * @param {number|number[]} options.threshold - Intersection threshold (default: 0)
 * @param {boolean} options.once - Whether to disconnect after first intersection (default: false)
 * @param {boolean} options.lazy - Whether to store intersection data lazily (default: false)
 * @param {Function} options.callback - Callback when intersection changes
 * @param {Array} deps - Optional dependency array for re-initializing the observer
 *
 * @returns {[React.RefCallback<Element>, IntersectionObserverEntry | (() => IntersectionObserverEntry | undefined)]}
 *   Returns a ref setter and either the intersection entry or a getter (if lazy)
 */
export function useIntersectionObserver(
  {
    root = null,
    rootMargin = "0px",
    threshold = 0,
    once = false,
    lazy = false,
    callback = () => {},
  } = {},
  deps = []
) {
  const entryRef = useRef({});
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (lazy) {
          entryRef.current = entry;
        } else {
          setEntry(entry);
        }

        callback(entry);

        if (once && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node, root, rootMargin, threshold, lazy, once, ...deps]);

  const getEntry = useCallback(() => entryRef.current, []);

  return [setNode, lazy ? getEntry : entry];
};
