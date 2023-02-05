import React from "react";
import Image from "next/image";

const SkillsInText = () => {
  const SKILLS = [
    "Web Developer",
    "Designer",
    "Creator",
    "Full-Stack Development",
    "React.js",
    "Coder",
    "Next.js",
    "TypeScript",
    "Codelance Devs",
    "Entrepreneur",
    "Frontend",
    "Programmer",
    "Leader",
    "Blogger",
    "kunalkeshan.dev",
    "Node.js",
    "Express.js",
    "Backend",
  ];

  return (
    <div className="mt-20 w-full overflow-x-clip">
      <div className="mx-auto block w-[120%] -translate-x-16 -rotate-[8deg] bg-themes-txt_primary px-10 py-8">
        <div className="animate-marquee whitespace-nowrap text-xl text-themes-bg_primary">
          {SKILLS.map((skill, index) => (
            <>
              <span
                key={index}
                className="mx-5 inline-block lg:mx-16"
                title={skill}
              >
                {skill}
              </span>{" "}
              <span>•</span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsInText;
