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
        if (pathRef.current) {
          if (scrollPercentage >= 0.99) {
            pathRef.current.style.strokeDasharray = "none";
          } else {
            pathRef.current.style.strokeDasharray =
              pathLength + " " + pathLength;
          }
        }
      });
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", () => {});
      }
    };
  }, []);

  return (
    <div className="absolute left-1/2 top-52 z-0 w-1/12 -translate-x-1/2 md:top-40">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="8.42265 0 1.5 106">
        <path
          d="M9 0 9 2C7 3 12 5 9 5 8 7 11 7 9 9 7 10 11 16 9 14 7 18 11 13 9 19 13 23 4 21 9 25 12 26 5 31 9 35 11 42 4 35 9 43 12 52 4 48 9 52 11 55 6 58 9 62 13 66 2 66 9 72 14 72 1 94 9 85 18 81 1 94 9 100 15 117 2 96 9 115 15 120 1 125 9 131 13 136 2 147 8 145 16 152-1 156 9 157 17 166-1 165 9 171 18 175-9 197 9 186 27 207-13 182 9 199 17 210 3 212 9 216 15 242-3 217 9 231 13 234-6 252 8 251 21 240-5 268 9 265 24 264-3 272 9 292 15 303 0 303 9 309 19 317-1 319 9 327 17 334 2 328 9 348 18 371 0 345 9 369 24 385-7 391 11 393-3 413 25 423 10 441-2 428 22 483 10 480-3 478 28 512 10 497"
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
