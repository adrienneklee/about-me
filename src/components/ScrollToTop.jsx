import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageview } from "../utils/analytics";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        trackPageview(pathname);   
    }, [pathname]);

    return null;
}

export default ScrollToTop