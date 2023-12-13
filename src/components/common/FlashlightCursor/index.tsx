import { useEffect, useState } from "react";
import Styles from "./flashlightCursor.module.scss";

interface FlashlightCursorProps {
  isActive: boolean;
  position: {
    top: number;
    left: number;
  };
}

const FlashlightCursor = ({ isActive, position }: FlashlightCursorProps) => {
  return (
    <div
      className={`${Styles.shadow} ${isActive ? Styles.in : Styles.out}`}
      style={{
        top: `${position?.top}px`,
        left: `${position?.left}px`,
      }}
    />
  );
};

export default FlashlightCursor;
