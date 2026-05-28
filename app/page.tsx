"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

import Logo from "../public/logo.png";
import { Button } from "@/components/ui/button";

/**
 * CHIP COMPONENT
 */
type ChipProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

const Chip = ({ text, isActive, onClick }: ChipProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 flex items-center gap-2
        ${
          isActive
            ? "bg-black text-white border-black shadow-md"
            : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:shadow-sm"
        }`}
    >
      {isActive && <CheckCircle2 size={14} />}
      {text}
    </motion.button>
  );
};

export default function Home() {
  const router = useRouter();

  const [listOfStack, setListOfStack] = useState<string[]>([]);
  const [listOfMatters, setListOfMatters] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [selectedGoal, setSelectedGoal] = useState<string[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<string>("");
  const [showWarning, setShowWarning] = useState(false);

  const stacks = [
    "React",
    "Next.js",
    "Vue",
    "TypeScript",
    "Node.js",
    "Python",
    "Go",
    "PostgreSQL",
    "Docker",
    "AWS",
  ];

  const matters = [
    "Productivity",
    "Debugging",
    "AI assistance",
    "Performance",
    "Security",
    "Testing",
    "Themes & UI",
    "DevOps",
  ];

  const experience = ["Beginner", "Intermediate", "Advanced"];

  const goals = [
    "Productivity",
    "AI Coding",
    "Debugging",
    "Performance",
    "Minimal Setup",
    "Full Dev Environment",
  ];

  const device = [
    "Low-end laptop",
    "Mid-range machine",
    "High-end machine",
  ];

  const toggle = (
    item: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setState(
      state.includes(item)
        ? state.filter((i) => i !== item)
        : [...state, item]
    );
  };

  const handleNext = () => {
    if (
      !listOfStack.length ||
      !listOfMatters.length ||
      !selectedExperience ||
      !selectedGoal.length ||
      !selectedDevice
    ) {
      setShowWarning(true);
      return;
    }

    router.push("/next-page");
  };

  const isDisabled =
    !listOfStack.length ||
    !listOfMatters.length ||
    !selectedExperience ||
    !selectedGoal.length ||
    !selectedDevice;

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">

      {/* NAVBAR */}
      <nav className="w-full px-6 py-5 flex items-center justify-between border-b border-neutral-200 bg-white/70 backdrop-blur-md">
        <Image src={Logo} alt="logo" width={130} />

        <p className="text-xs text-neutral-500">
          AI Dev Setup Generator
        </p>
      </nav>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-14">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Step 1 of 2
          </p>

          <h1 className="text-2xl font-semibold">
            Build your perfect dev setup
          </h1>

          <p className="text-sm text-neutral-500">
            Select your preferences — we’ll generate a personalized VS Code environment.
          </p>
        </motion.div>

        {/* STACK */}
        <motion.section className="space-y-4">
          <h2 className="text-sm font-bold text-neutral-900">
            Your Stack
          </h2>

          <div className="flex flex-wrap gap-2">
            {stacks.map((item) => (
              <Chip
                key={item}
                text={item}
                isActive={listOfStack.includes(item)}
                onClick={() =>
                  toggle(item, listOfStack, setListOfStack)
                }
              />
            ))}
          </div>
        </motion.section>

        {/* MATTERS */}
        <motion.section className="space-y-4">
          <h2 className="text-sm font-bold text-neutral-900">
            What Matters to You
          </h2>

          <div className="flex flex-wrap gap-2">
            {matters.map((item) => (
              <Chip
                key={item}
                text={item}
                isActive={listOfMatters.includes(item)}
                onClick={() =>
                  toggle(item, listOfMatters, setListOfMatters)
                }
              />
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section className="space-y-4">
          <h2 className="text-sm font-bold text-neutral-900">
            Experience Level
          </h2>

          <div className="flex flex-wrap gap-2">
            {experience.map((item) => (
              <Chip
                key={item}
                text={item}
                isActive={selectedExperience === item}
                onClick={() => setSelectedExperience(item)}
              />
            ))}
          </div>
        </motion.section>

        {/* GOALS */}
        <motion.section className="space-y-4">
          <h2 className="text-sm font-bold text-neutral-900">
            Your Goal
          </h2>

          <div className="flex flex-wrap gap-2">
            {goals.map((item) => (
              <Chip
                key={item}
                text={item}
                isActive={selectedGoal.includes(item)}
                onClick={() =>
                  toggle(item, selectedGoal, setSelectedGoal)
                }
              />
            ))}
          </div>
        </motion.section>

        {/* DEVICE */}
        <motion.section className="space-y-4">
          <h2 className="text-sm font-bold text-neutral-900">
            Device Power
          </h2>

          <div className="flex flex-wrap gap-2">
            {device.map((item) => (
              <Chip
                key={item}
                text={item}
                isActive={selectedDevice === item}
                onClick={() => setSelectedDevice(item)}
              />
            ))}
          </div>
        </motion.section>

        {/* FOOTER CTA */}
        <div className="flex items-center justify-between pt-4">

          {showWarning ? (
            <p className="text-sm text-red-500">
              Please complete all sections before continuing
            </p>
          ) : (
            <div />
          )}

          <Button
            onClick={handleNext}
            disabled={isDisabled}
            className="rounded-full px-6 flex items-center gap-2"
          >
            Continue
            <ArrowRight size={16} />
          </Button>

        </div>
      </div>
    </main>
  );
}