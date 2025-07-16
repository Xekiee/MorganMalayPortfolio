import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "UI/UX Designer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return <span className="typed-text" ref={el}></span>;
}
