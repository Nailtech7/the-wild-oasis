import { useCallback, useEffect, useRef } from "react";

export function useCloseWindow(handler) {
  const ref = useRef();
  const stableHandler = useCallback(handler, [handler]);
  useEffect(
    function () {
      function handleClick(e) {
        console.log("you clicked");
        // console.log(e);
        console.log(ref.current);
        if (ref.current && !ref.current.contains(e.target)) stableHandler();
      }

      function handleKeyDown(e) {
        console.log("esc pressed");
        if (e.key === "Escape") stableHandler();
      }
      document.addEventListener("click", handleClick, true);
      document.addEventListener("keydown", handleKeyDown, true);

      return () => {
        console.log("cleaned up");
        document.removeEventListener("click", handleClick, true);
        document.removeEventListener("keydown", handleKeyDown, true);
      };
    },
    [stableHandler]
  );

  return ref;
}
