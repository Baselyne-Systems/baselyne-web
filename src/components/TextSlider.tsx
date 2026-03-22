import { useState, useEffect, useCallback } from "react";

interface TextSliderProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export function TextSlider({
  texts,
  interval = 4000,
  className = "",
}: TextSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [state, setState] = useState<"visible" | "exiting" | "entering">("visible");

  const advance = useCallback(() => {
    setState("exiting");

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      setState("entering");
    }, 500);

    setTimeout(() => {
      setState("visible");
    }, 1000);
  }, [texts.length]);

  useEffect(() => {
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [advance, interval]);

  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <span
        className={`inline-block transition-all duration-500 ease-in-out ${
          state === "exiting"
            ? "-translate-y-[110%] opacity-0"
            : state === "entering"
              ? "translate-y-0 opacity-100"
              : "translate-y-0 opacity-100"
        }`}
        style={state === "entering" ? { animation: "slideUp 500ms ease-out" } : undefined}
      >
        {texts[currentIndex]}
      </span>
    </span>
  );
}
