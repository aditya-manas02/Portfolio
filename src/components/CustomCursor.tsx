import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    // Exact position for the crosshair center
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring position for the trailing coordinates box
    const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
    const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setCoords({ x: e.clientX, y: e.clientY });
            
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [mouseX, mouseY, isVisible]);

    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        return null; // Don't show custom cursor on mobile
    }

    return (
        <>
            {/* The exact crosshair point */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0
                }}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-full h-[2px] bg-white" />
                    <div className="absolute h-full w-[2px] bg-white" />
                </div>
            </motion.div>

            {/* The trailing data box */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: springX,
                    y: springY,
                    opacity: isVisible ? 1 : 0
                }}
            >
                <div className="ml-4 mt-4 px-2 py-1 bg-white text-black font-mono-tech text-[10px] font-bold tracking-widest whitespace-nowrap uppercase brutalist-border" style={{ boxShadow: '2px 2px 0px 0px var(--color-primary)' }}>
                    X:{coords.x} Y:{coords.y}
                </div>
            </motion.div>
        </>
    );
};

export default CustomCursor;
