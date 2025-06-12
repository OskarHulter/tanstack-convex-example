import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CryptoCurrencyMarket, Timeline } from "react-ts-tradingview-widgets";
import { Layout } from "../components/layout";

export const Route = createFileRoute("/cryptos")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <CryptoCurrencyMarket
        colorTheme="dark"
        width="100%"
        height={1200}
      ></CryptoCurrencyMarket>
      <Timeline
        colorTheme="dark"
        feedMode="market"
        market="crypto"
        height={1200}
        width="100%"
      ></Timeline>
    </Layout>
  );
}
