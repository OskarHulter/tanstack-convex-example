import * as React from "react";
import { convexQuery } from "@convex-dev/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { api } from "../../convex/_generated/api";
import { EconomicCalendar } from "react-ts-tradingview-widgets";
import { Layout } from "../components/layout";

export const Route = createFileRoute("/calendar")({
  component: Calendar,
});

function Calendar() {
  const { data } = useSuspenseQuery(convexQuery(api.tasks.get, {}));

  return (
    <Layout>
      <EconomicCalendar colorTheme="dark" height={1200} width="100%" />
      {data.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
    </Layout>
  );
}
