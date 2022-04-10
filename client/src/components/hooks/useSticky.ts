import {useEffect, useRef} from "react";

export const useSticky = () => {

    const nav = useRef<HTMLElement | null>(null);
    const navOffset = useRef<number>();

    const onScroll = () => {
        const navBar = nav.current;
        if (!navBar || !navOffset?.current) return;

        if (window.scrollY >= navOffset.current) {
            navBar.classList.add("sticky")
        } else {
            navBar.classList.remove("sticky");
        }
    }

    useEffect(() => {

        const navBar = nav.current;
        if (!navBar) return;
        navOffset.current = navBar.offsetTop;

        window.onscroll = () => onScroll()
        return () => {
            window.onscroll = () => {
            };
        };
    }, [nav]);

    return nav;
}
