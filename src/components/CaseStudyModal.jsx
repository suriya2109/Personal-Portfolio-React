import React, { useEffect, useMemo } from 'react'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'

function CaseStudyModal({ project, onClose }) {
  if (!project) return null

  // create a container div for the portal so the overlay is attached to body
  const portalEl = useMemo(() => document.createElement('div'), [])
  useEffect(() => {
    document.body.appendChild(portalEl)
    return () => {
      try {
        document.body.removeChild(portalEl)
      } catch (e) {}
    }
  }, [portalEl])

  // prevent body scroll while modal is open and allow Escape to close
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose && onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/50 flex items-start sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/*
        Responsive modal behavior:
        - Mobile (default): full-screen panel (takes entire page), scrollable
        - Small and up (`sm:`): centered dialog with rounded corners and max height
      */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.18 }}
        onClick={(e) => e.stopPropagation()}
        className={
          'bg-white dark:bg-neutral-900 w-full h-full overflow-auto p-4 ' +
          'sm:relative sm:h-auto sm:max-h-[90vh] sm:w-full sm:max-w-3xl sm:rounded-2xl sm:mx-auto sm:p-6 sm:overflow-y-auto sm:shadow-2xl'
        }
      >
        <button
          aria-label="Close case study"
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-ring"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <header className="mb-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          {project.metric && (
            <div className="inline-block mt-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              {project.metric}
            </div>
          )}
        </header>

        <section className="prose dark:prose-invert max-w-none mb-4">
          <h4 className="text-lg font-semibold">Overview</h4>
          <p>{project.desc}</p>

          {project.impact && (
            <>
              <h4 className="text-lg font-semibold mt-4">Impact</h4>
              <p className="font-semibold">{project.impact}</p>
            </>
          )}

          <h4 className="text-lg font-semibold mt-4">Approach</h4>
          <ul className="list-disc ml-6">
            <li>Modular front-end architecture with component-driven design.</li>
            <li>Lazy-loading and code-splitting for faster initial load.</li>
            <li>Accessibility and SEO improvements where applicable.</li>
            <li>Close collaboration with product and backend teams for reliable APIs.</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4">Role & Deliverables</h4>
          <p>Frontend engineering, component design, performance optimizations, and integration with backend APIs/CMS.</p>
        </section>

        <footer className="flex items-center gap-3 justify-end sticky bottom-0 bg-gradient-to-t from-white/60 dark:from-neutral-900/60 py-3 sm:static sm:bg-transparent sm:pt-0">
          <a
            href={project.links?.[0]?.href || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-tilt p-2"
          >
            View Live
          </a>
          <button className="btn btn-secondary p-2" onClick={onClose}>Close</button>
        </footer>
      </motion.div>
    </div>
  )

  return createPortal(modalContent, portalEl)
}

export default CaseStudyModal
