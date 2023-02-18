import { useEffect } from "react";
import { useTransition, useSpringRef } from "@react-spring/web";

export default function useMenuTransition(showNav) {
  const transRef = useSpringRef();
  const menuTransRef = useSpringRef();

  const [maskTransitions] = useTransition(showNav, () => ({
    ref: transRef,
    keys: null,
    from: {
      position: "absolute",
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  }));

  const [menuTransitions] = useTransition(showNav, () => ({
    ref: menuTransRef,
    keys: null,
    from: {
      position: "absolute",
      opacity: 0,
      transform: "translateX(-100%)",
    },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  }));

  useEffect(() => {
    transRef.start();
    menuTransRef.start();
  }, [showNav]);

  return [maskTransitions, menuTransitions];
}
