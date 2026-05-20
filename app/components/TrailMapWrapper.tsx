"use client";

import dynamic from "next/dynamic";

const TrailMap = dynamic(() => import("./TrailMap"), { ssr: false });

interface Stop {
  address: string;
  label: string;
}

interface Props {
  stops: Stop[];
  color: string;
}

export default function TrailMapWrapper(props: Props) {
  return <TrailMap {...props} />;
}
