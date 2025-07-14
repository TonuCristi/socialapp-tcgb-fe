import { useEffect, type RefObject } from "react";

export function useClickOutside(
  containterRef: RefObject<HTMLDivElement | null>,
  cb: () => void
) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containterRef.current &&
        !containterRef.current.contains(e.target as Node)
      ) {
        cb();
      }
    }

    document.addEventListener("mousedown", (e) => handleClickOutside(e));

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cb, containterRef]);
}
