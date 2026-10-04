import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      const currentProgress =
        (scrollTop / documentHeight) * 100;

      setProgress(currentProgress);
    };

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[9999] h-[2px] bg-white transition-[width] duration-100"
      style={{
        width: `${progress}%`,
      }}
      aria-hidden="true"
    />
  );
}

export default ScrollProgress;