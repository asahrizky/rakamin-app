import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { animated } from "@react-spring/web";

import NavigationMenu from "../Components/NavigationMenu";

import useMenuTransition from "../Hooks/useMenuTransition";

function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const [maskTransitions, menuTransitions] = useMenuTransition(showNav);

  return (
    <nav>
      <span
        role="button"
        className="text-xl"
        onClick={() => setShowNav(!showNav)}
      >
        <FontAwesomeIcon icon={faBars} />
      </span>
      {maskTransitions(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              key={item}
              className="bg-black-half fixed top-0 right-0 h-full w-36 z-50"
              onClick={() => setShowNav(false)}
            />
          )
      )}
      {menuTransitions(
        (style, item, _, index) =>
          item && (
            <animated.div
              key={index}
              style={style}
              className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
            >
              <ul>
                <NavigationMenu label="Home" href="/" />
                <NavigationMenu label="About" href="/about" />
              </ul>
            </animated.div>
          )
      )}
    </nav>
  );
}

export default Navigation;
