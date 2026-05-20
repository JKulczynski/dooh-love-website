"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Polyline, CircleMarker, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type LatLng = [number, number];

interface TrailMapProps {
  center: LatLng;
  coordinates: LatLng[];
  points: { pos: LatLng; label: string }[];
  color: string;
}

function FitBounds({ coordinates }: { coordinates: LatLng[] }) {
  const map = useMap();
  useEffect(() => {
    if (coordinates.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const L = require("leaflet");
      map.fitBounds(L.latLngBounds(coordinates), { padding: [16, 16] });
    }
  }, [map, coordinates]);
  return null;
}

export default function TrailMap({ center, coordinates, points, color }: TrailMapProps) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const L = require("leaflet");
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/leaflet/marker-icon-2x.png",
      iconUrl: "/leaflet/marker-icon.png",
      shadowUrl: "/leaflet/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      center={center}
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
      <FitBounds coordinates={coordinates} />
      <Polyline
        positions={coordinates}
        pathOptions={{ color, weight: 3, opacity: 0.9 }}
      />
      {points.map((p, i) => (
        <CircleMarker
          key={i}
          center={p.pos}
          radius={5}
          pathOptions={{ color, fillColor: color, fillOpacity: 1, weight: 2 }}
        >
          <Tooltip permanent={false} direction="top">
            <span style={{ fontSize: "11px", background: "transparent", color: "#fff" }}>{p.label}</span>
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
