import * as React from "react";
import { convexQuery } from "@convex-dev/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { api } from "../../convex/_generated/api";
import { StockHeatmap, CryptoCoinsHeatmap } from "react-ts-tradingview-widgets";
import { Layout } from "../components/layout";
export const Route = createFileRoute("/heatmap")({
  component: Heatmap,
});

function Heatmap() {
  const { data } = useSuspenseQuery(convexQuery(api.tasks.get, {}));
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <Layout>
      {isLoaded ? (
        <>
          <StockHeatmap colorTheme="dark" autoSize height={600}></StockHeatmap>
          {data.map(({ _id, text }) => (
            <div key={_id}>{text}</div>
          ))}

          <CryptoCoinsHeatmap
            colorTheme="dark"
            autoSize
            height={600}
          ></CryptoCoinsHeatmap>
        </>
      ) : null}
    </Layout>
  );
}
