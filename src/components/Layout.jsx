import React from 'react';
import Header from "./Header";
import SideNav from "./SideNav";
import Footer from "./Footer";
import { StaticBackground } from '../App'; // We will export StaticBackground from App.jsx

const Layout = ({ children, theme, toggleTheme, sideNavOpen, setSideNavOpen }) => {
  return (
    <div className="relative min-h-screen w-screen max-w-[100vw] flex flex-col text-foreground">
      <StaticBackground theme={theme} />
      <Header
        toggleTheme={toggleTheme}
        currentTheme={theme}
        onHamburgerClick={() => setSideNavOpen(true)}
      />
      <SideNav open={sideNavOpen} onClose={() => setSideNavOpen(false)} />
      
      {/* 
        Make the main area the scroll container and enable scroll snapping.
        - overflow-y-auto: allow vertical scroll inside the main area
        - snap-y snap-mandatory: force the browser to snap to child elements with snap-start
        - scroll-smooth: provide smooth animated scrolling
        The header is fixed, so sections inside the routes will account for that via min-height used in wrappers.
      */}
      <main
        className="flex-1 w-full outline-none overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth"
        style={{ height: '100vh' }}
        tabIndex={-1}
      >
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default React.memo(Layout);