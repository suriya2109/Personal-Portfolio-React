import React, { memo, useMemo, useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import CaseStudyModal from "./CaseStudyModal";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

function Projects() {
  const projects = useMemo(
    () => [
      {
        slug: "shriram-finance",
        title: "Shriram Finance Digital Platforms",
        metric: "40% UI",
        desc: "Built 15+ high-transaction FinTech modules including FASTag, Loans, Recharge, and Payments. Delivered responsive Angular UIs with real-time API integrations and optimized load performance using BEM and lazy-loading.",
        impact: "Improved UI responsiveness by 40% and supported millions of monthly transactions with seamless user experience.",
        caseStudy: {
          timeline: "Jan 2021 — Dec 2021",
          role: "Lead Frontend Engineer",
          problem: "Legacy banking UI could not handle surges in concurrent transactions and lacked mobile-first flows for payments and FASTag top-ups.",
          solution: "Re-architected the frontend into modular Angular components, introduced lazy-loading, optimistic UI updates for payments and a resilient error-handling layer. Tight API contracts reduced reflows and improved perceived performance.",
          outcomes: [
            { label: "UI latency", value: "-40%" },
            { label: "Monthly transactions", value: "> 2M" },
          ],
          tech: ["Angular", "RxJS", "SCSS", "REST APIs", "BEM"],
          screenshots: ["/assets/projects/sfl.png"],
        },
        image: "/assets/projects/sfl.png",
        tags: ["Angular", "RxJS", "SCSS", "BEM", "Drupal CMS", "REST APIs", "TypeScript", "Payment Integration"],
        links: [{ type: "demo", href: "https://www.shriramfinance.in/" }],
      },
      {
        slug: "shriram-life",
        title: "Shriram Life Insurance — Calculators & Policy UX",
        metric: "Conversion uplift",
        desc: "Created responsive UI modules with REST API integrations and interactive calculators (BMI, Savings, Retirement etc.) using Angular + Chart.js. Designed frictionless policy-journey flows via CMS.",
        impact: "Increased conversions and improved policy comparison experience for customers.",
        caseStudy: {
          timeline: "Apr 2020 — Nov 2020",
          role: "UX-focused Frontend Engineer",
          problem: "Complex product pages and calculators were leading to drop-offs during policy comparison and quote flows.",
          solution: "Introduced interactive calculators, progressive disclosure for complex choices, and streamlined policy comparison UI. Added analytics-driven A/B experiments to validate changes.",
          outcomes: [
            { label: "Conversion", value: "+12%" },
            { label: "Drop-offs", value: "-18%" },
          ],
          tech: ["Angular", "Chart.js", "CMS Integration"],
          screenshots: ["/assets/projects/slic.png"],
        },
        image: "/assets/projects/slic.png",
        tags: ["Angular", "RxJS", "Chart.js", "REST APIs", "Calculators", "CMS"],
        links: [{ type: "demo", href: "https://www.shriramlife.in/" }],
      },
      {
        slug: "tic-travel-insurance",
        title: "Travel Insurance Consultants (TIC) — Global Platform",
        metric: "Reduced drop-offs",
        desc: "Developed multilingual React + Next.js travel insurance portal. Created claim and quote journeys and category-wise coverage pages with accessibility improvements.",
        impact: "Reduced claim drop-offs and enhanced user trust through optimized workflows.",
        caseStudy: {
          timeline: "Mar 2022 — Sep 2022",
          role: "Frontend Engineer",
          problem: "International customers struggled with localization and complex quote flows that increased abandonment.",
          solution: "Built accessible, localized pages with clear step-by-step quote flows and server-side rendering for SEO. Implemented validation and progressive enhancement for low-bandwidth users.",
          outcomes: [
            { label: "Abandonment", value: "-22%" },
            { label: "Page speed (LCP)", value: "+1.3s" },
          ],
          tech: ["Next.js", "React", "i18n", "Accessibility"],
          screenshots: ["/assets/projects/tic.png"],
        },
        image: "/assets/projects/tic.png",
        tags: ["Next.js", "React", "Accessibility", "CMS Integration", "Responsive", "UX Optimization"],
        links: [{ type: "demo", href: "https://travelinsurance.santam.co.za/" }],
      },
      {
        slug: "shriram-amc",
        title: "Shriram Asset Management Platform",
        metric: "Faster nav",
        desc: "Engineered fund discovery, NAV tracking, compliance workflows (KYC/SEBI/AMFI) and investment calculators using React Hooks and Next.js.",
        impact: "Improved navigation speed and investor engagement with real-time data visibility.",
        caseStudy: {
          timeline: "Jun 2021 — Feb 2022",
          role: "Frontend Engineer",
          problem: "Investors needed faster discovery and real-time NAV visibility; existing UI had slow navigation and heavy bundle sizes.",
          solution: "Implemented client-side caching, incremental static regeneration for key pages, and optimized bundle splits. Added intuitive fund-discovery UX and improved accessibility.",
          outcomes: [
            { label: "Navigation", value: "+30% faster" },
            { label: "Engagement", value: "+20%" },
          ],
          tech: ["React", "Next.js", "SSR", "Caching"],
          screenshots: ["/assets/projects/amc.png"],
        },
        image: "/assets/projects/amc.png",
        tags: ["Next.js", "React", "React Hooks", "SEO", "Accessibility", "KYC", "SEBI", "AMFI", "Real-time Data"],
        links: [{ type: "demo", href: "https://www.shriramamc.in" }],
      },
      {
        slug: "ziva-suite",
        title: "ZIVA® Digital Transformation Suite",
        desc: "Contributed to front-end architecture for enterprise-grade solutions using Angular and React. Delivered scalable, SEO-optimized UI for FinTech and corporate platforms.",
        impact: "Faster deployments, increased feature scalability and improved product performance.",
        caseStudy: {
          timeline: "Sep 2019 — Present",
          role: "Front-end Architect",
          problem: "Multiple product lines had inconsistent UIs and a slow release cadence due to monolithic builds.",
          solution: "Built a modular component library, standardized design tokens and CI/CD pipelines which reduced integration friction and sped releases.",
          outcomes: [
            { label: "Deploy time", value: "-50%" },
            { label: "Reuse", value: "+70%" },
          ],
          tech: ["Angular", "React", "TypeScript", "Design Systems"],
          screenshots: ["/assets/projects/novactech.png"],
        },
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
          "Modular Architecture",
        ],
        links: [{ type: "demo", href: "https://www.novactech.com/elearning-solutions" }],
      },
    ],
    []
  );

  const [active, setActive] = useState(null);

  useEffect(() => {
    // deep-link support: #case=slug
    const hash = window.location.hash.replace(/^#/, "");
    if (hash.startsWith("case=")) {
      const slug = hash.split("=")[1];
      const found = projects.find((p) => p.slug === slug);
      if (found) setActive(found);
    }
  }, [projects]);

  return (
    <section>
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.article key={p.slug} variants={itemVariants} className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border py-4 shadow-sm overflow-hidden h-full">
            {/* screenshot / hero image */}
            {p.image && (
              <div className="w-full h-44 sm:h-56 bg-muted/30">
                <img src={p.image} alt={`${p.title} screenshot`} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="px-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm mt-2 text-primary" style={{display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{p.desc}</p>

              <div className="mt-4 flex items-center gap-2">
                <button onClick={() => setActive(p)} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-white text-sm">
                  View case study
                </button>
                {p.links?.map((l, i) => (
                  <a key={i} href={l.href} target="_blank" rel="noreferrer" className="ml-2 text-xs inline-flex items-center gap-1 text-muted-foreground">
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </a>
                ))}
              </div>

              {/* tech tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags?.map((t, i) => (
                  <span key={i} className="inline-block text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-800">{t}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {active && <CaseStudyModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

export default memo(Projects);
