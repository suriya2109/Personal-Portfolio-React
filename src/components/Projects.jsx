import React, { memo, useMemo } from "react";
import { Code, ExternalLink, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants (The "Staggered Entrance" Pattern) ---
// This container will orchestrate the animation for the whole page
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time delay between each child animating in
    },
  },
};

// This variant will be used by each item in the container
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


// --- Child Component (No changes needed) ---
const ProjectCard = memo(({ project }) => {
  return (
    // This card is now an item in the grid's stagger animation
    <motion.div
      variants={itemVariants}
      className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col h-full"
    >
      {/* optional screenshot/banner for the project */}
      {project.image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={`${project.title}`}
            className="w-full h-40 object-cover border border-neutral-200 dark:border-neutral-700"
          />
        </div>
      )}

      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
        {project.title}
      </h3>
      <p className="text-base text-muted-foreground mb-4 flex-grow">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-2 mb-5 mt-auto">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 flex-wrap">
        {project.links.map((link, linkIndex) => (
          <a
            key={linkIndex}
            href={link.href}
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline hover:text-foreground dark:hover:text-primary-foreground/60 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.type === "code" ? (
              <Code className="w-4 h-4" />
            ) : (
              <ExternalLink className="w-4 h-4" />
            )}
            {link.type === "code" ? "Code" : "Demo"}
          </a>
        ))}
      </div>
    </motion.div>
  );
});
ProjectCard.displayName = "ProjectCard";


// --- Main Projects Component ---
function ProjectsComponent() {
  const projectsData = useMemo(
    () => [
      {
        title: "Shriram Finance Digital Platforms",
        desc: "Spearheaded development of enterprise-scale FinTech platforms at Shriram Finance, delivering 15+ integrated payment modules including Mobile Recharge, DTH, FASTag, Utilities, Credit Card, and Loan Repayment services. Engineered dynamic marketplaces for Two-Wheeler, Four-Wheeler, and EV Hub with real-time comparison capabilities. Enhanced UI responsiveness by 40%, supporting millions of monthly transactions across all services. Implemented BEM architecture and Drupal CMS integration for seamless content management and campaign optimization.",
        image: "/assets/projects/sfl.png",
        tags: ["Angular", "RxJS", "SCSS", "BEM", "Drupal CMS", "REST APIs", "TypeScript", "Payment Integration"],
        links: [
          { type: "demo", href: "https://www.shriramfinance.in/" }
        ]
      },
      {
        title: "Shriram Life Insurance — Calculators & Policy UX",
        desc: "Built responsive UI modules for Shriram Life Insurance using Angular and RxJS. Integrated REST APIs for policy management and dashboard analytics; developed interactive calculators including BMI, Children’s Savings, Smoking, Human Life Value, Double Your Money, Savings Plans, Retirement, and HRA calculators. Managed CMS-driven customer journey pages and delivered high-performing calculators that boosted lead conversions and streamlined policy comparisons.",
        image: "/assets/projects/slic.png",
        tags: ["Angular", "RxJS", "Chart.js", "REST APIs", "Calculators", "CMS"],
        links: [
          { type: "demo", href: "https://www.shriramlife.in/" }
        ]
      },
      {
        title: "Travel Insurance Consultants (TIC) — Global Platform",
        desc: "Developed a Next.js + React travel insurance platform for global users under Novac Technology Solutions. Built key modules — Contact Us, Get a Quote, Policy Assistance, Claims, and Help Centre. Created category pages for Holiday, Business, Student, Group, Domestic, and Schengen travel insurance. Implemented coverage detail pages for medical, cancellation, adventure, and accidental coverage. Integrated self-service portals and CMS-managed journey pages; delivered a responsive, multilingual platform that reduced claim drop-offs and improved user trust through streamlined UI workflows.",
        image: "/assets/projects/tic.png",
        tags: ["Next.js", "React", "Accessibility", "CMS Integration", "Responsive", "UX Optimization"],
        links: [
          { type: "demo", href: "https://travelinsurance.santam.co.za/" }
        ]
      },
      {
        title: "Shriram Asset Management Platform",
        desc: "Developed a Next.js + React mutual fund and investment platform for Shriram Asset Management Company (SAMC). Implemented All Funds, Fund Details, NFO, NAV Tracking, SIP, Lumpsum and Goal Calculators using React Hooks for state and lifecycle management. Integrated CMS-driven investor journeys with KYC, SEBI and AMFI compliance workflows. Optimized the site for SEO, accessibility and runtime performance, delivering faster navigation and improved investor engagement with real-time fund tracking.",
        image: "/assets/projects/amc.png",
        tags: ["Next.js", "React", "React Hooks", "SEO", "Accessibility", "KYC", "SEBI", "AMFI", "Real-time Data"],
        links: [
          { type: "demo", href: "https://www.shriramamc.in" }
        ]
      },
      {
        title: "ZIVA® Digital Transformation Suite",
        desc: "Contributed as a Front-End Engineer across FinTech, InsurTech, Digital Learning and ImmersiveTech domains at Novac Technology Solutions. Built enterprise-grade front ends for ZIVA®, STATIM®, AXLE™ and MIGOTO AI™ using Angular, React, TypeScript, HTML5, CSS3 and Tailwind CSS. Collaborated with product and design teams to deliver responsive, scalable UI architectures. Delivered scalable, SEO-optimized platforms with faster navigation and improved user engagement. Enhanced data transparency through real-time fund tracking and accelerated deployment timelines via modular architectures. Managed corporate portal modules — Discover Us, Leadership, CSR and Media Resources. Learn more: https://www.novactech.com/elearning-solutions",
        image: "/assets/projects/novactech.png",
        tags: [
          "Angular",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "RxJS",
          "REST APIs",
          "AI Integration",
          "eLearning",
          "Corporate Portal",
          "SEO",
          "Accessibility",
          "Modular Architecture"
        ],
        links: [
          { type: "demo", href: "https://www.novactech.com/elearning-solutions" }
        ]
      }
    ],
    []
  );

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      {/* 1. This is the SINGLE animation container for the whole page. */}
      {/* It uses `animate`, not `whileInView`, for guaranteed execution. */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >
        {/* Item 1: The header text block */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
                <FolderKanban className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
                Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-10">
                Showcasing my expertise in building enterprise-scale financial platforms and digital transformation solutions. Each project demonstrates my commitment to delivering high-performance, user-centric applications with modern technologies and best practices.
            </p>
        </motion.div>

        {/* Item 2: The entire project card grid animates in as one block... */}
        <motion.div
          // It is ALSO a container for its own children (the cards)
          variants={containerVariants}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// Export the memoized component in a standard way
export default memo(ProjectsComponent);