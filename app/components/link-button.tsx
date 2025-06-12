import * as React from "react";
import { Link } from "@tanstack/react-router";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
};

export function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <div style={{ padding: "2em" }}>
      <Link to={href}>{children}</Link>
    </div>
  );
}
