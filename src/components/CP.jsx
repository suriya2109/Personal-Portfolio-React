import React, { memo, useMemo } from "react";
import { ExternalLink, Swords } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants (The "Staggered Entrance" Pattern) ---
// Master container for the entire section
const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Nested container for lists/grids inside the section
const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Single variant for all items that animate in
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


// --- Child Components (Unchanged) ---
const PlatformCard = React.memo(({ platform }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col items-center text-center w-[400px]"
  >
    <div className="w-20 h-20 rounded-xl overflow-hidden flex items-center justify-center bg-background shadow border border-border/60 mb-4">
      <img
        src={platform.logo}
        alt={`${platform.name} Logo`}
        className={`w-full h-full object-contain ${
          platform.name === "CodeChef" ? "dark:invert" : ""
        }`}
        loading="lazy"
      />
    </div>
    <div className="text-2xl font-semibold text-foreground mb-2">{platform.name}</div>
    <div className="text-base text-muted-foreground mt-1 mb-2">
      <span className="text-foreground/80">Handle:</span>{" "}
      <a href={platform.profileUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline dark:hover:text-primary-foreground/70 transition">
        {platform.handle}
      </a>
    </div>
    <div className="flex flex-col gap-1 text-base text-muted-foreground mb-3">
      {platform.stats.map((stat, i) => (
        <div key={i} className="py-0.5">
          {stat.label}:{" "}
          <span className="font-medium text-foreground/80">{stat.value}</span>
        </div>
      ))}
    </div>
    <a href={platform.profileUrl} target="_blank" rel="noopener noreferrer" className="mt-auto pt-3 flex items-center gap-1 text-primary font-medium text-sm hover:underline dark:hover:text-primary-foreground/70 transition">
      <ExternalLink className="w-4 h-4" />
      View Profile
    </a>
  </motion.div>
));
PlatformCard.displayName = "PlatformCard";

const HighlightItem = React.memo(({ item }) => (
  <motion.li variants={itemVariants}>
    {item.text}
    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline dark:hover:text-primary-foreground/70 font-medium transition">
      {item.linkText}
    </a>
    {item.rest}
  </motion.li>
));
HighlightItem.displayName = "HighlightItem";


// --- Main Component ---
function CompetitiveProgrammingComponent() {
  const cpPlatforms = useMemo(() => [
    { name: "LeetCode", logo: "https://assets.leetcode.com/static_assets/others/lg2550.png", handle: "Suriya21072109", profileUrl: "https://leetcode.com/Suriya21072109/", stats: [
      { label: "Problems Solved", value: "106/3735" },
      { label: "Acceptance Rate", value: "71.79%" },
      { label: "Easy Problems", value: "78/910" },
      { label: "Medium Problems", value: "28/1944" },
      { label: "Hard Problems", value: "0/881" },
      { label: "Global Rank", value: "1,287,813" }
    ] },
  ], []);

  const highlights = useMemo(() => [
    { text: "Earned prestigious ", linkText: "100 Days Badge 2025", href: "https://leetcode.com/Suriya21072109/", rest: " showcasing consistent problem-solving commitment." },
    { text: "Mastered ", linkText: "Advanced Algorithms", href: "https://leetcode.com/Suriya21072109/", rest: " including Divide and Conquer (x4), Dynamic Programming (x3), and Trie (x1)." },
    { text: "Strong proficiency in ", linkText: "Intermediate Concepts", href: "https://leetcode.com/Suriya21072109/", rest: " with Hash Table (x21), Math (x14), and Binary Search (x8) solutions." },
    { text: "Demonstrated expertise in ", linkText: "Fundamental Data Structures", href: "https://leetcode.com/Suriya21072109/", rest: " including Arrays (x42), Two Pointers (x27), and Strings (x23)." },
    { text: "Achieved impressive ", linkText: "71.79% Acceptance Rate", href: "https://leetcode.com/Suriya21072109/", rest: " across all submitted solutions." },
    { text: "Excels in ", linkText: "JavaScript Problem-Solving", href: "https://leetcode.com/Suriya21072109/", rest: " with 106 problems solved using optimal approaches." }
  ], []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full space-y-16"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center max-w-2xl">
          {/* --- THIS IS THE FIXED HEADING --- */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight flex flex-col sm:flex-row items-center sm:items-baseline justify-center gap-2 sm:gap-4 text-foreground text-center">
            <Swords className="w-8 h-8 text-primary drop-shadow-sm flex-shrink-0" />
            <span>Competitive Programming</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            As a Software Engineer with 3 years of experience, my LeetCode journey reflects
            my commitment to algorithmic excellence and continuous learning. With over 100
            problems solved across various difficulty levels and strong proficiency in 
            JavaScript, I focus on building a solid foundation in data structures and algorithms.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-2xl">
          <motion.div
            variants={listContainerVariants}
            className="flex justify-center"
          >
            {cpPlatforms.map((platform) => (
              <PlatformCard key={platform.name} platform={platform} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-3xl">
          <div className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Key Highlights
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              <a href="https://leetcode.com/suriya-k7/" className="text-primary hover:underline dark:hover:text-primary-foreground/70 transition font-medium" target="_blank" rel="noopener noreferrer">
                View my complete LeetCode profile for more details
              </a>
            </p>
            <motion.ul
              variants={listContainerVariants}
              className="list-disc ml-5 space-y-2 text-base text-muted-foreground"
            >
              {highlights.map((item, index) => (
                <HighlightItem key={index} item={item} />
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default React.memo(CompetitiveProgrammingComponent);