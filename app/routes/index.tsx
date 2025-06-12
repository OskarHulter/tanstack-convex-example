import React from "react";
import { convexQuery } from "@convex-dev/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { api } from "../../convex/_generated/api";
import { Layout } from "../components/layout";
import { timeValuePairs } from "../../test/mocks";
import { createChart, LineSeries } from "lightweight-charts";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { data } = useSuspenseQuery(convexQuery(api.tasks.get, {}));

  React.useEffect(() => {
    const chart = createChart(
      document.getElementById("chart") ?? document.body,
      { width: 960, height: 800 },
    );
    const lineSeries = chart.addSeries(LineSeries);
    lineSeries.setData(timeValuePairs);
    // chart.setSymbol({ ticker: "TestSymbol" });
    // chart.setPeriod({ span: 1, type: "day" });
    // chart.setDataLoader({
    //   getBars: ({ callback }) => {
    //     callback(ohlcv);
    //   },
    // });
    // return () => {
    //   dispose("chart");
    // };
  }, []);
  return (
    <Layout>
      {data.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
      <div id="chart" style={{ width: 600, height: 600 }} />
    </Layout>
  );
}
