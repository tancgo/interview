import { useState, useEffect, useRef } from 'react';

function useInView(options = {}) {
    const [inView, setInView] = useState(false);
    const [entry, setEntry] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting);
            setEntry(entry);
        }, options);

        observer.observe(ref.current);

        return () => {
            observer.unobserve(ref.current);
        };
    }, [options]);

    return [ref, inView, entry];
}

export default useInView;
