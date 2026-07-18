import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Smooth springs for physics-based movement
    const springX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
    const springY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            springX.set(e.clientX - 10); // Offset by half width/height
            springY.set(e.clientY - 10);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over clickable elements
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.cursor-pointer') ||
                target.closest('[role="button"]')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [springX, springY]);

    return (
        <>
            {/* The crisp magnetic dot */}
            <motion.div
                className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    opacity: isHovering ? 1 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            {/* Subtle trailing shadow for elegance */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-white/50 mix-blend-difference rounded-full pointer-events-none z-[9998] hidden md:block"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
            />
        </>
    );
};

export default CustomCursor;
