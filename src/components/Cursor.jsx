import React, { useEffect, useState } from "react";
import "../cursor.css";
export default function () {
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  useEffect(() => {
    function handleMouse(e) {
      setCursorPosition({ left: e.clientX, top: e.clientY });
    }
    window.addEventListener("mousemove", handleMouse);
    return function () {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);
  return <div className="cursor" style={cursorPosition}></div>;
}
