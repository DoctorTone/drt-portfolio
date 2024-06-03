import React, { useState, useEffect } from "react";
import CircularOptionsPortfolioMenu from "./CircularOptionsPortfolioMenu";
import CircularOptionsDataVizMenu from "./CircularOptionsDataVizMenu";
import CircularLevelsMenu from "./CircularLevelsMenu";
import { SocialUI } from "../UI/SocialUI.jsx";
import Bubble from "../components/Bubble";

const BUBBLE_TIME = 5 * 1000;

const UILevels = ({ levelName }) => {
  const [optionsActive, setOptionsActive] = useState(false);
  const [levelsActive, setLevelsActive] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  const toggleOptionsMenu = (menuActive) => {
    setOptionsActive(menuActive);
    if (menuActive && levelsActive) {
      setLevelsActive(false);
    }
  };
  const toggleLevelsMenu = (menuActive) => {
    setLevelsActive(menuActive);
    if (menuActive && optionsActive) {
      setOptionsActive(false);
    }
  };

  useEffect(() => {
    if (levelName === "Portfolio") {
      setTimeout(() => {
        setShowBubble(false);
      }, BUBBLE_TIME);
    }
  }, [levelName]);

  switch (levelName) {
    case "Portfolio":
      return (
        <>
          <SocialUI />
          <CircularOptionsPortfolioMenu
            onToggle={toggleOptionsMenu}
            open={optionsActive}
          />
          <CircularLevelsMenu onToggle={toggleLevelsMenu} open={levelsActive} />
          {showBubble && <Bubble />}
        </>
      );
      break;

    case "DataViz":
      return (
        <>
          <SocialUI />
          <CircularOptionsDataVizMenu
            onToggle={toggleOptionsMenu}
            open={optionsActive}
          />
          <CircularLevelsMenu onToggle={toggleLevelsMenu} open={levelsActive} />
        </>
      );
      break;

    default:
      return null;
  }
};

export default UILevels;
