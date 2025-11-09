// src/components/ScrollToTop.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll manager for route changes.
 * - If location.state.scrollTo is present, scrolls the main container to that section.
 * - If a hash is present in the URL, attempts to scroll to that id.
 * - Otherwise scrolls the main container to top.
 */
export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Use the layout's main container as the scroll root
    const main = document.querySelector("main");

    const attemptScrollTo = (id) => {
      if (!id) return false;
      try {
        const el = document.getElementById(id);
        if (el) {
          // Prefer smooth scrolling on the main scroll container
          if (main) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          return true;
        }
      } catch (err) {
        // ignore
      }
      return false;
    };

    // priority: location.state.scrollTo -> location.hash -> fallback top
    const state = location.state && location.state.scrollTo;
    if (state) {
      // Defer slightly to let the new route render
      window.requestAnimationFrame(() => attemptScrollTo(state));
      return;
    }

    const hash = (location.hash || "").replace(/^#/, "");
    if (hash) {
      window.requestAnimationFrame(() => attemptScrollTo(hash));
      return;
    }

    // Default: scroll main to top
    if (main) {
      main.scrollTo({ top: 0, behavior: "auto" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}