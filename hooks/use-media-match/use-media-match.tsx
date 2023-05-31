import { useEffect, useMemo, useState } from "react";

export const useMediaMatch = (query: string): boolean | undefined => {
  const [DOM, setDOM] = useState<Window | undefined>(undefined);

  // Set window on mount to avoid undefined errors
  useEffect(() => {
    setDOM(window);
  }, []);

  const matchMedia = useMemo<MediaQueryList | undefined>(
    () => DOM?.matchMedia(query),
    [query, DOM]
  );

  const [matches, setMatches] = useState<boolean | undefined>(
    () => matchMedia?.matches || undefined
  );

  useEffect(() => {
    setMatches(matchMedia?.matches);

    const listener = (event: MediaQueryListEventMap["change"]) =>
      setMatches(event.matches);

    matchMedia?.addEventListener("change", listener);

    return () => {
      matchMedia?.removeEventListener("change", listener);
    };
  }, [matchMedia]);

  return matches;
};
