import React, { useRef, useEffect } from "react";

const Line = () => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    pathRef.current!.style.display = "block";
    const pathLength = pathRef?.current?.getTotalLength();
    pathRef.current!.style.strokeDasharray = pathLength + " " + pathLength;
    pathRef.current!.style.strokeDashoffset = `${pathLength}`;

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", function (e) {
        const scrollPercentage =
          (document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);
        const drawLength = pathLength! * scrollPercentage;
        pathRef.current!.style.strokeDashoffset = `${pathLength! - drawLength}`;
        if (scrollPercentage >= 0.99) {
          pathRef.current!.style.strokeDasharray = "none";
        } else {
          pathRef.current!.style.strokeDasharray =
            pathLength + " " + pathLength;
        }
      });
    }
  }, []);

  return (
    <div className="absolute left-1/2 -top-4 z-0 w-44 -translate-x-1/2 md:-top-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="8.42265 0 1.562 19">
        <path
          d="M 9 0 L 9 2 C 7 3 12 5 9 5 C 8 7 11 7 9 9 C 7 10 11 16 9 14 C 7 18 11 13 9 19 C 13 23 4 21 9 25 C 12 26 5 31 9 35 C 11 42 4 35 9 43 C 12 52 4 48 9 52"
          stroke="#000000"
          stroke-width="0.05"
          fill="none"
          ref={pathRef}
          display="none"
        />
      </svg>
    </div>
  );
};

export default Line;
