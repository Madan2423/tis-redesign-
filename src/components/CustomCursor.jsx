import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia(
      "(min-width: 1024px)"
    ).matches;

    if (!isDesktop) {
      return undefined;
    }

    document.documentElement.classList.add("custom-cursor");

    const cursor = cursorRef.current;

    if (!cursor) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;

      setIsVisible(true);
    };

    const handleMouseOver = (event) => {
      const interactiveElement = event.target.closest(
        "a, button, input, textarea, select, [data-cursor]"
      );

      if (interactiveElement) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (event) => {
      const interactiveElement = event.target.closest(
        "a, button, input, textarea, select, [data-cursor]"
      );

      if (interactiveElement) {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.documentElement.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    return () => {
      document.documentElement.classList.remove("custom-cursor");

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-[10000] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-900/50 transition-[width,height,opacity,transform,background-color] duration-200 lg:flex ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${
        isHovering
          ? "h-14 w-14 bg-neutral-900/10"
          : "h-8 w-8 bg-transparent"
      }`}
      aria-hidden="true"
    >
      <span
        className={`h-1 w-1 rounded-full bg-neutral-900 transition-transform duration-200 ${
          isHovering ? "scale-0" : "scale-100"
        }`}
      />
    </div>
  );
}

export default CustomCursor;