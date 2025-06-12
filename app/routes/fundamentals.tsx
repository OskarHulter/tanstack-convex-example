import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  FundamentalData,
  CompanyProfile,
  Timeline,
} from "react-ts-tradingview-widgets";
import { Layout } from "../components/layout";

export const Route = createFileRoute("/fundamentals")({
  component: Fundamentals,
});

function Fundamentals() {
  return (
    <Layout>
      <FundamentalData
        colorTheme="dark"
        height={1200}
        width="100%"
      ></FundamentalData>
      <CompanyProfile
        colorTheme="dark"
        height={1200}
        width="100%"
      ></CompanyProfile>
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
