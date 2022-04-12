import {MouseEvent, useEffect, useRef} from "react";

export const useSlidingBorder = () => {
    const borderRef = useRef<HTMLElement | null>(null);

    /**
     * Set classname to selected link
     * @param e - link click event
     */
    const styleLinkText = (e: MouseEvent<HTMLElement>) => {
        document.querySelectorAll(".link_span").forEach(l => l.classList.remove("selected"));
        e.currentTarget.classList.add("selected");
    }

    /**
     * Moves the border to be under the link selected
     * @param border - bottom border HTMLElement
     * @param target - the clicked HTMLLIElement containing link
     */
    const styleBottomBorder = (border: HTMLElement, target: HTMLElement) => {
        const {top, left, width, height} = target.getBoundingClientRect();
        border.style.left = left + "px";
        // border.style.top = "calc(" + (top + height) + "px - 0.5rem) ";
        border.style.width = width + "px";
    }

    /**
     * Changes styles according to link selected
     * @param e - link click event
     */
    const onLinkClick = (e: MouseEvent<HTMLElement>) => {
        styleLinkText(e);
        const target: HTMLElement | null = e.currentTarget.closest('.link_item');
        const border = borderRef.current;
        if (border && target) styleBottomBorder(border, target);
    }

    // useEffect(() => {
    //     const firstLink = document.querySelector(".link_span");
    //     const border = borderRef.current;
    //     if (!firstLink || !border) return;
    //     firstLink.classList.add("selected");
    //     border.style.width = firstLink.getBoundingClientRect().width + 'px';
    // }, [])

    return {borderRef, onLinkClick};
}
