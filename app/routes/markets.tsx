import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/layout";
import { MarketData } from "react-ts-tradingview-widgets";

export const Route = createFileRoute("/markets")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <MarketData colorTheme="dark" width="100%" height={1200}></MarketData>
    </Layout>
  );
}
