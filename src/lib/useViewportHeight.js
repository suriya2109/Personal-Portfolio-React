import { useEffect } from 'react';

// This hook fixes the viewport height issue on mobile browsers
export function useViewportHeight() {
    useEffect(() => {
        // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
        const vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // We listen to the resize event
        const handleResize = () => {
            // We execute the same script as before
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, []);
}