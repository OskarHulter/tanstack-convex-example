import * as React from "react";
import { NavMenu } from "./nav-menu";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: 960,
          height: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <NavMenu />
        {children}
      </div>
    </div>
  );
}
