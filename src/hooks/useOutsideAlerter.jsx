import { useEffect } from "react";

export default function useOutsideAlerter({ menuRef, setMenuOpened }) {
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click was outside the menu and viewport is mobile-sized
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (window.innerWidth <= 640) {
          setMenuOpened(false);
        }
      }
    }

    // Listen for both mouse and touch events
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuRef, setMenuOpened]);
}
