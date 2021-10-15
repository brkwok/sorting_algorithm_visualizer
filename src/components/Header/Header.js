import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export default function Header({ setAlgorithm }) {
  return (
    <section id="header-container">
      <HeaderLeft setAlgorithm={ setAlgorithm }/>
      <HeaderRight />
    </section>
  );
}
