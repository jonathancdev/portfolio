import React from "react";

export default function Header({ fixed }) {
  const handleScroll = (e) => {
    console.log(e);
  };
  return (
    <header
      onScroll={handleScroll}
      className={fixed ? "header fixed" : "header"}
    ></header>
  );
}
