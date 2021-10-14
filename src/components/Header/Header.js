import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export default function Header() {
  return (
    <section id="header-container">
      <HeaderLeft />
      <HeaderRight />
    </section>
  );
}
