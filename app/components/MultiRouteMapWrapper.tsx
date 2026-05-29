"use client";

import dynamic from "next/dynamic";
import type { RouteData } from "./MultiRouteMap";

const MultiRouteMap = dynamic(() => import("./MultiRouteMap"), { ssr: false });

interface Props {
  routes: RouteData[];
  height?: number;
}

export default function MultiRouteMapWrapper(props: Props) {
  return <MultiRouteMap {...props} />;
}
