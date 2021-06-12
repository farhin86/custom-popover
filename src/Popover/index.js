import React, { useState, useEffect } from "react";
import "./index.css";
import PropTypes from "prop-types";

function Popover(props) {
  const [positionRight, setPositionRight] = useState("auto");
  const [positionBottom, setPositionBottom] = useState("auto");
  const [distanceBottom, setDistanceBottom] = useState(0);
  const [uniqueId, setUniqueId] = useState(0);

  const { size, popOverId, openPopOver } = props;

  const getPosFromTop = el => {
    for (
      var lx = 0, ly = 0;
      el != null;
      lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent
    );
    return { x: lx, y: ly };
  };
  if (openPopOver && uniqueId === 0) {
    let uniqueId = Math.random();
    setUniqueId(uniqueId);
  }

  useEffect(() => {
    let popoverHeight;
    if (openPopOver) {
      popoverHeight = document.getElementById(`popover-main ${uniqueId}`)
        .offsetHeight;
    }
    if (popOverId) {
      let spaceFromTop = getPosFromTop(document.getElementById(popOverId))["y"],
        space = window.innerHeight - spaceFromTop,
        domRect = document
          .getElementById(popOverId)
          .getBoundingClientRect(popOverId),
        spaceBelow = window.innerHeight - domRect.bottom,
        elmentHeight =
          document.getElementById(popOverId).offsetTop +
          document.getElementById(popOverId).offsetHeight +
          5,
        spaceRight = window.innerWidth - domRect.left - size["elementWidth"];

      setDistanceBottom(spaceBelow);
      setPositionRight(spaceRight);
      let bottom;
      if (distanceBottom > popoverHeight) {
        bottom = spaceBelow - popoverHeight;
        setPositionBottom(bottom);
      } else if (space < popoverHeight) {
        bottom = elmentHeight + spaceBelow;
        setPositionBottom(bottom);
      }
    }
  }, [openPopOver, popOverId, size, distanceBottom, uniqueId]);

  function handlePopoverClickOutside() {
    setPositionBottom("auto");
    props.popoverClickOutside();
  }

  return (
    <div className="popover-element">
      {props.element}
      {openPopOver ? (
        <div
          className="popover-page"
          style={
            props.overLay
              ? {
                  backgroundColor: "rgba(68, 66, 66, 0.21)"
                }
              : {}
          }
          onClick={handlePopoverClickOutside}
        >
          <div
            className={`popover-main ${uniqueId}`}
            id={`popover-main ${uniqueId}`}
            style={
              positionBottom !== "auto"
                ? size
                  ? {
                      width: size["width"],
                      right: positionRight,
                      bottom: positionBottom,
                      left: size["left"] ? size["left"] : {}
                    }
                  : {}
                : { visibility: "hidden" }
            }
          >
            {props.children}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

Popover.defaultProps = {
  themeColor: {
    primaryColor: "red",
    secondaryColor: "blue",
    borderColor: "black"
  },
  size: { width: "150px", elementWidth: "50" },
  outsideClickClose: true,
  popoverClickOutside: {},
  overLay: true
};

Popover.propTypes = {
  themeColor: PropTypes.object,
  outsideClickClose: PropTypes.bool,
  popoverClickOutside: PropTypes.func,
  size: PropTypes.object,
  overLay: PropTypes.bool
};

export default Popover;
