import Image from "next/image";
import Logo from "../public/logo.png";

import Button from "../components/ui/selectButton";
import NextButton from "../components/ui/NextButton";

export default function Home() {

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

  return (
    <main className="w-full pb-10 flex items-center flex-col">
      <nav className="w-full px-6 py-7 flex flex-row items-center justify-between">
        <Image src={Logo} alt="logo" width={135} />
      </nav>
      <div className="w-full h-px bg-neutral-400"></div>
      <section className="mt-12 w-[80%] h-full flex gap-14 flex-col items-center justify-start">
        {/* Stack */}
        <div className="space-y-1">
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
              return <Button key={index} text={item} />;
            })}
          </div>
        </div>
        {/* What Matter */}
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-neutral-800">
            What Matters Most?
          </h1>
          <p className="text-neutral-500 font-medium text-sm">
            Your workflow preferences shape the recommendation
          </p>
          <div className="mt-5 flex gap-2 flex-row flex-wrap">
            {matters.map((item, index) => {
              return <Button key={index} text={item} />;
            })}
          </div>
        </div>
        <div className="w-full flex items-center  justify-end">
          <NextButton />
        </div>
      </section>
    </main>
  );
}
