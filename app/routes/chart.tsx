import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/layout";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../convex/_generated/api";

export const Route = createFileRoute("/chart")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useSuspenseQuery(convexQuery(api.tasks.get, {}));

  return (
    <Layout>
      {data.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
      <AdvancedRealTimeChart theme="dark" autosize />
    </Layout>
  );
}
