import style from "./Header.module.scss";
import React from "react";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ isOpen, setIsOpen }: HeaderProps) {
  return (
    <a className={style.mainLink}>
      <div className={style.navi}>MetaDebateVis</div>
      {/* <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          marginLeft: "100px",
          marginBottom: "20px",
          background: "#9c27b0",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {isOpen ? "Hide Script" : "View Script"}
      </button> */}
    </a>
  );
}
