import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // always scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // change to "smooth" if you want smooth scrolling
    });
  }, [pathname, hash]);

  return null;
}
