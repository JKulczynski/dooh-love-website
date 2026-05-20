"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type LatLng = [number, number];

interface TrailMapProps {
  points: { pos: LatLng; label: string }[];
  color: string;
}

function FitBounds({ points }: { points: { pos: LatLng }[] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const L = require("leaflet");
      map.fitBounds(L.latLngBounds(points.map((p) => p.pos)), { padding: [24, 24] });
    }
  }, [map, points]);
  return null;
}

export default function TrailMap({ points, color }: TrailMapProps) {
  return (
    <MapContainer
      center={points[0]?.pos ?? [52.23, 21.01]}
      zoom={13}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
      attributionControl={false}
      style={{ height: "220px", width: "100%", background: "#0a0a0a" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution=""
      />
      <FitBounds points={points} />
      {points.map((p, i) => (
        <CircleMarker
          key={i}
          center={p.pos}
          radius={6}
          pathOptions={{ color, fillColor: color, fillOpacity: 1, weight: 2 }}
        >
          <Tooltip permanent={false} direction="top" className="map-tooltip">
            <span>{p.label}</span>
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
