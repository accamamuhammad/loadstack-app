"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Logo from "../public/logo.png";

import Button from "../components/ui/selectButton";
import NextButton from "../components/ui/NextButton";

export default function Home() {
  const router = useRouter();
  const [showWarning, setShowWarning] = useState(false);

  const [listOfStack, setListOfStack] = useState<string[]>([]);
  const [listOfMatters, setListOfMatters] = useState<string[]>([]);

  const stacks = [
    "React",
    "Next.js",
    "Vue",
    "Svelte",
    "TypeScript",
    "JavaScript",
    "Python",
    "Go",
    "Rust",
    "Node.js",
    "Prisma",
    "Tailwind",
    "Docker",
    "GraphQL",
    "Django",
    "Laravel",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "Redis",
    "Kubernetes",
    "AWS",
    "Flutter",
    "React Native",
  ];

  const matters = [
    "Productivity",
    "Git & version control",
    "Linting & formatting",
    "Debugging",
    "Themes & UI",
    "AI assistance",
    "Testing",
    "Collaboration",
    "Performance",
    "Accessibility",
    "Code snippets",
    "Refactoring",
    "Database tools",
    "API development",
    "DevOps",
    "Security",
    "Terminal experience",
    "Deployment",
  ];

  const handleToggle = (
    item: string,
    setState: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setState((prevList) => {
      if (prevList.includes(item)) {
        // Remove item if it's already there
        return prevList.filter((i) => i !== item);
      } else {
        // Add item using the fixed 3-dot spread operator syntax
        return [...prevList, item];
      }
    });
  };

  const handleNext = () => {
    if (listOfStack.length === 0 || listOfMatters.length === 0) {
      setShowWarning(true); // show warning
      return; // stop here, don't navigate
    }
    setShowWarning(false);
    router.push("/next-page"); // ✅ all good, go to next page
  };

  return (
    <main className="w-full pb-10 flex items-center flex-col">
      <nav className="w-full px-6 py-7 flex flex-row items-center justify-between">
        <Image src={Logo} alt="logo" width={135} />
      </nav>
      <div className="w-full h-px bg-neutral-400"></div>
      <section className="mt-12 w-[80%] h-full flex gap-14 flex-col items-center justify-start">
        {/* Stack Section */}
        <div className="space-y-1 w-full">
          <p className="uppercase text-neutral-500 font-medium text-sm">
            step 1 of 2
          </p>
          <h1 className="text-2xl font-semibold text-neutral-800">
            What&apos;s your stack?
          </h1>
          <p className="text-neutral-500 font-medium text-sm">
            Pick everything you work with. we&apos;ll find extensions that
            actually fit.
          </p>
          <div className="mt-5 flex gap-2 flex-row flex-wrap">
            {stacks.map((item, index) => {
              return (
                <Button
                  key={index}
                  text={item}
                  isActive={listOfStack.includes(item)}
                  onClick={() => handleToggle(item, setListOfStack)}
                />
              );
            })}
          </div>
        </div>

        {/* What Matters Section */}
        <div className="space-y-1 w-full">
          <h1 className="text-2xl font-semibold text-neutral-800">
            What Is Important to You?
          </h1>
          <p className="text-neutral-500 font-medium text-sm">
            Your workflow preferences shape the recommendation
          </p>
          <div className="mt-5 flex gap-2 flex-row flex-wrap">
            {matters.map((item, index) => {
              return (
                <Button
                  key={index}
                  text={item}
                  isActive={listOfMatters.includes(item)}
                  onClick={() => handleToggle(item, setListOfMatters)}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          {showWarning && (
            <p className="text-red-500 text-sm">
              Please pick at least one stack and one preference before
              continuing.
            </p>
          )}
          <NextButton onClick={handleNext} />
        </div>
      </section>
    </main>
  );
}
