import * as React from "react";
import { convexQuery } from "@convex-dev/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { api } from "../../convex/_generated/api";
import { MiniChart } from "react-ts-tradingview-widgets";
import { Layout } from "../components/layout";

export const Route = createFileRoute("/sectors")({
  component: Sectors,
});

function Sectors() {
  const { data } = useSuspenseQuery(convexQuery(api.tasks.get, {}));

  return (
    <Layout>
      <MiniChart colorTheme="dark" width="100%"></MiniChart>
      {data.map(({ _id, text }) => (
        <>
          {text}
          <MiniChart key={_id} colorTheme="dark" width="100%"></MiniChart>
        </>
      ))}
      {data.map(({ _id, text }) => (
        <>
          {text}
          <MiniChart key={_id} colorTheme="dark" width="100%"></MiniChart>
        </>
      ))}
      {data.map(({ _id, text }) => (
        <>
          {text}
          <MiniChart key={_id} colorTheme="dark" width="100%"></MiniChart>
        </>
      ))}
    </Layout>
  );
}
