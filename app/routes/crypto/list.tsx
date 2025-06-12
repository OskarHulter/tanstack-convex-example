import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { Layout } from "../../components/layout";

export const Route = createFileRoute("/crypto/list")({
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
    </Layout>
  );
}
