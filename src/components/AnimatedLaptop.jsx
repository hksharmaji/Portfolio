import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedLaptop = () => {
  const laptopRef = useRef();
  const codeRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      laptopRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.to(codeRef.current, {
      opacity: 0.6,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <svg
        ref={laptopRef}
        width="280"
        height="180"
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <rect x="30" y="30" width="240" height="140" rx="10" fill="#1f1f1f" />
        <rect
          x="40"
          y="40"
          width="220"
          height="100"
          rx="5"
          fill="#0f0f0f"
          stroke="#00ffe1"
          strokeWidth="2"
        />
        <text
          ref={codeRef}
          x="55"
          y="90"
          fill="#00ffe1"
          fontSize="14"
          fontFamily="monospace"
        >
          {"</> Frontend Developer"}
        </text>
        <rect x="20" y="170" width="260" height="10" rx="5" fill="#444" />
      </svg>
    </div>
  );
};

export default AnimatedLaptop;
