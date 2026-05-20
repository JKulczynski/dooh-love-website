"use client";

import dynamic from "next/dynamic";

const TrailMap = dynamic(() => import("./TrailMap"), { ssr: false });

type LatLng = [number, number];

interface Props {
  points: { pos: LatLng; label: string }[];
  color: string;
}

export default function TrailMapWrapper(props: Props) {
  return <TrailMap {...props} />;
}
