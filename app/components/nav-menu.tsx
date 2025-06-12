import * as React from "react";
import { LinkButton } from "./link-button";

export function NavMenu() {
  return (
    <div style={{ paddingBlock: "2em", width: "100%", display: "flex" }}>
      <LinkButton href="/calendar">calendar</LinkButton>
      <LinkButton href="/sectors">sectors</LinkButton>
      <LinkButton href="/heatmap">heatmap</LinkButton>
      <LinkButton href="/fundamentals">fundamentals</LinkButton>
      <LinkButton href="/markets">market list</LinkButton>
      <LinkButton href="/cryptos">cryptos</LinkButton>
      <LinkButton href="/crypto/list">crypto list</LinkButton>
      <LinkButton href="/chart">chart</LinkButton>
    </div>
  );
}
