import { useEffect, useState } from "react";

export default function useScrollPosition() {
  const [headerShouldBeFixed, setHeaderShouldBeFixed] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= window.innerHeight) {
      setHeaderShouldBeFixed(true);
    } else if (window.pageYOffset <= window.innerHeight) {
      setHeaderShouldBeFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { handleScroll, headerShouldBeFixed };
}
